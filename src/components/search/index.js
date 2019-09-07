import React, { Component } from 'react'

import Button from './components/button'
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
    const { search } = this.props
    return (
      <div className="search">
        <Input onChange={event => this.handleChange(event.target.value)} />
        <Button onClick={() => search(this.state.input)} />
      </div>
    )
  }
}

export default Search
