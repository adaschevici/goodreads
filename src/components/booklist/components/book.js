import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'

import styles from './styles'

const Book = ({
  classes,
  isbn,
  isbn13,
  authors,
  original_title,
  original_publication_year,
  average_rating,
  language_code,
  small_image_url,
}) => {
  return (
    <TableRow>
      <TableCell className={classes.tableCell}>{isbn}</TableCell>
      <TableCell className={classes.tableCell}>{Number(isbn13)}</TableCell>
      <TableCell className={classes.tableCell}>{authors}</TableCell>
      <TableCell className={classes.tableCell}>{original_title}</TableCell>
      <TableCell className={classes.tableCell}>
        {Number(original_publication_year)}
      </TableCell>
      <TableCell className={classes.tableCell}>{average_rating}</TableCell>
      <TableCell className={classes.tableCell}>{language_code}</TableCell>
      <TableCell>
        <img src={small_image_url} alt={original_title} />
      </TableCell>
    </TableRow>
  )
}

Book.propTypes = {
  book_id: PropTypes.string.isRequired,
  isbn: PropTypes.string.isRequired,
  isbn13: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  original_title: PropTypes.string.isRequired,
  original_publication_year: PropTypes.string.isRequired,
  average_rating: PropTypes.string.isRequired,
  language_code: PropTypes.string.isRequired,
  small_image_url: PropTypes.string.isRequired,
  classes: PropTypes.object,
}

export default withStyles(styles)(Book)
