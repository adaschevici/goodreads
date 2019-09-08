import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class BookListHeader extends Component {
  static propTypes = {
    columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  createSortHandler = property => event => {
    const { onRequestSort } = this.props
    return onRequestSort(event, property)
  }

  render = () => {
    const { order, orderBy } = this.props
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
            >
              <Tooltip
                title="Sort"
                placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                enterDelay={300}
              >
                <TableSortLabel
                  active={orderBy === column.id}
                  direction={order}
                  onClick={this.createSortHandler(column.id)}
                >
                  {column.label}
                </TableSortLabel>
              </Tooltip>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }
}

export default withStyles(styles)(BookListHeader)
