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

  render = () => {
    const { books } = this.state
    return (
      <div className="App">
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
