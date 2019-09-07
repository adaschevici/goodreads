import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

import styles from './styles'
import BookListHeader from './components/book-list-header'
import Book from './components/book'

class BookList extends Component {
  static propTypes = {
    columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render = () => {
    const { classes, columnHeaders, books } = this.props
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <BookListHeader
              columnHeaders={columnHeaders}
              rowCount={books.length}
            />
            <TableBody>
              {books.map(book => (
                <Book key={book.id} {...book} />
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(BookList)
