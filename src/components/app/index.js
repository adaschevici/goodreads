import React, { Component } from 'react'
import './index.css'
import { books as globalBooks } from '../../books.json'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: globalBooks.slice(0, 20),
      filteredBooks: globalBooks.slice(0, 20),
      searchTerm: '',
    }
  }

  onChange = event => {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  search = () => {
    this.setState({
      filteredBooks: this.state.books.filter(book =>
        book.title.includes(this.state.searchTerm)
      ),
    })
  }

  render = () => {
    const { filteredBooks } = this.state
    return (
      <div className="App">
        <input placeholder="Search here..." onChange={this.onChange}></input>
        <button onClick={this.search}>Search</button>
        <ul>
          {filteredBooks.map(book => (
            <li>{book.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
