import React from 'react'
import TextField from '@material-ui/core/TextField'
import PropTypes from 'prop-types'

const Input = ({ onChange }) => {
  return (
    <TextField
      id="outlined-search"
      label="Search field"
      type="search"
      margin="normal"
      variant="outlined"
      onChange={onChange}
    />
  )
}

Input.defaultProps = {}

Input.propTypes = {
  onChange: PropTypes.func.isRequired,
}

export default Input
