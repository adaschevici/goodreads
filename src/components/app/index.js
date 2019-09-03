import React, { Component } from 'react'
import './index.css'
import { books } from '../../books.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: books.slice(0, 20),
    }
  }

  onChange = event => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  search = () => {
    this.setState({
      books: this.state.books.filter(book =>
        book.title.includes(this.state.searchTerm)
      ),
    })
  }

  render = () => {
    const { books } = this.state
    return (
      <div className="App">
        <input placeholder="Search here..." onChange={this.onChange}></input>
        <button onClick={this.search}>Search</button>
        <ul>
          {books.map(book => (
            <li>{book.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
