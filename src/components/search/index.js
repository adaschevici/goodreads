import React, { Component } from 'react'

import Input from './components/input'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
    }
  }

  handleChange = value =>
    this.setState({
      input: value,
    })

  render = () => {
    return (
      <div className="search">
        <Input onChange={event => this.handleChange(event.target.value)} />
      </div>
    )
  }
}

export default Search
