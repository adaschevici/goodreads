import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import {
  SortableColumnHeader,
  ActionColumnHeader,
} from './column-header-actions'

class BookListHeader extends Component {
  static propTypes = {
    columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  createSortHandler = property => event => {
    const { onRequestSort } = this.props
    if (['add'].includes(property)) return () => {}
    return onRequestSort(event, property)
  }

  addBookHandler = history => () => history.push('/edit')

  render = () => {
    const { order, orderBy, history } = this.props
    const { classes, columnHeaders } = this.props

    return (
      <TableHead>
        <TableRow>
          {columnHeaders.map(column => (
            <TableCell
              key={column.id}
              numeric={column.numeric ? column.value : undefined}
              padding={column.disablePadding ? 'none' : 'default'}
              className={classes.tableCell}
              sortDirection={orderBy === column.id ? order : false}
              colSpan={column.span || 1}
            >
              {column.id === 'add' ? (
                <ActionColumnHeader
                  column={column}
                  addBook={this.addBookHandler(history)}
                />
              ) : (
                <SortableColumnHeader
                  column={column}
                  orderBy={orderBy}
                  order={order}
                  sorter={this.createSortHandler(column.id)}
                />
              )}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }
}

export default withStyles(styles)(BookListHeader)
