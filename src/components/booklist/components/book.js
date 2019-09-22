import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import styles from './styles'

const Book = ({ classes, book, typesMapping }) => {
  return (
    <TableRow>
      {typesMapping.map(column => {
        if (column.numeric && !Number.isNaN(Number(book[column.id]))) {
          if (book[column.id]) {
            return (
              <TableCell key={column.id} className={classes.tableCell}>
                {Number(book[column.id])}
              </TableCell>
            )
          } else {
            return (
              <TableCell key={column.id} className={classes.tableCell}>
                N/A
              </TableCell>
            )
          }
        } else if (column.id === 'small_image_url') {
          return (
            <TableCell key={column.id}>
              <img src={book.small_image_url} alt={book.original_title} />
            </TableCell>
          )
        }
        return (
          <TableCell key={column.id} className={classes.tableCell}>
            {book[column.id]}
          </TableCell>
        )
      })}
    </TableRow>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    isbn13: PropTypes.string.isRequired,
    authors: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    original_publication_year: PropTypes.string.isRequired,
    average_rating: PropTypes.string.isRequired,
    language_code: PropTypes.string.isRequired,
    small_image_url: PropTypes.string.isRequired,
    classes: PropTypes.object,
  }).isRequired,
  typesMapping: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      numeric: PropTypes.bool.isRequired,
      disablePadding: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
}

export default withStyles(styles)(Book)
