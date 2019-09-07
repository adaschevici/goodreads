import React, { Component } from 'react'
import { books as globalBooks } from '../../books.json'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import BookIcon from '@material-ui/icons/Book'

import './index.css'
import Search from '../search'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: globalBooks.slice(0, 20),
      filteredBooks: globalBooks.slice(0, 20),
      searchTerm: '',
    }
  }

  search = term => {
    this.setState({
      filteredBooks: this.state.books.filter(book => book.title.includes(term)),
    })
  }

  render = () => {
    const { filteredBooks } = this.state
    return (
      <div className="App">
        <Search search={this.search} />
        <List dense={true}>
          {filteredBooks.map(book => (
            <ListItem key={book.id}>
              <ListItemIcon>
                <BookIcon />
              </ListItemIcon>
              <ListItemText primary={book.title} />
            </ListItem>
          ))}
        </List>
      </div>
    )
  }
}

export default App
