import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const SearchButton = ({ onClick }) => {
  return (
    <div style={{ margin: 'auto 0' }}>
      <Button
        variant="contained"
        size="medium"
        color="primary"
        onClick={onClick}
      >
        Search
      </Button>
    </div>
  )
}

SearchButton.defaultProps = {}

SearchButton.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default SearchButton
