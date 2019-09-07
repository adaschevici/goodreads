import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'

class BookListHeader extends Component {
  static propTypes = {
    columnHeaders: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  render = () => {
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
            >
              {column.label}
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
    )
  }
}

export default withStyles(styles)(BookListHeader)
