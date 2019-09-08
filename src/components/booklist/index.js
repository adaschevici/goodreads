import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'

import styles from './styles'
import BookListHeader from './components/book-list-header'
import Book from './components/book'

function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
    : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1)
}

class BookList extends Component {
  static propTypes = {
    columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
    books: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      order: 'asc',
      orderBy: 'original_title',
    }
  }

  handleRequestSort = (event, property) => {
    const orderBy = property
    const { order } = this.state
    let currentOrder = 'desc'

    if (orderBy === property && order === 'desc') {
      currentOrder = 'asc'
    }

    this.setState({ order: currentOrder, orderBy })
  }

  render = () => {
    const { classes, columnHeaders, books } = this.props
    const { order, orderBy } = this.state
    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <BookListHeader
              columnHeaders={columnHeaders}
              onRequestSort={this.handleRequestSort}
              {...this.state}
            />
            <TableBody>
              {books.sort(getSorting(order, orderBy)).map(book => (
                <Book key={book.id} book={book} typesMapping={columnHeaders} />
              ))}
            </TableBody>
          </Table>
        </div>
      </Paper>
    )
  }
}

export default withStyles(styles)(BookList)
