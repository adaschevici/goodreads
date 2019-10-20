import React from 'react'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TableSortLabel from '@material-ui/core/TableSortLabel'
import Tooltip from '@material-ui/core/Tooltip'

export const SortableColumnHeader = ({ column, orderBy, order, sorter }) => (
  <Tooltip
    title="Sort"
    placement={column.numeric ? 'bottom-end' : 'bottom-start'}
    enterDelay={300}
  >
    <TableSortLabel
      active={orderBy === column.id}
      direction={order}
      onClick={sorter}
    >
      {column.label}
    </TableSortLabel>
  </Tooltip>
)

export const ActionColumnHeader = ({ column }) => {
  switch (column.id) {
    case 'add':
      return (
        <Fab variant="extended" color="primary" aria-label="add">
          <AddIcon />
          Add book
        </Fab>
      )
    default:
      return null
  }
}
