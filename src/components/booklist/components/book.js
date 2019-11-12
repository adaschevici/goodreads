import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import { Link } from 'react-router-dom'

import styles from './styles'
import { deleteBook } from './actions'

const Book = ({ classes, book, typesMapping, history, deleteBook }) => {
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
        } else if (column.id === 'edit') {
          return (
            <TableCell key={column.id}>
              <Link to={{ pathname: '/edit', state: { book, action: 'edit' } }}>
                <Fab color="secondary" aria-label="edit">
                  <EditIcon />
                </Fab>
              </Link>
            </TableCell>
          )
        } else if (column.id === 'delete') {
          return (
            <TableCell key={column.id}>
              <Fab
                color="default"
                aria-label="delete"
                onClick={() => deleteBook(book.id, history)}
              >
                <DeleteIcon />
              </Fab>
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

const mapDispatchToProps = dispatch => ({
  deleteBook: (bookId, history) => dispatch(deleteBook(bookId, history)),
})

export default connect(
  null,
  mapDispatchToProps
)(withStyles(styles)(Book))
