import React, { Component } from 'react'

import './index.css'
import BookList from '../booklist'
import Search from '../search'

const columnData = [
  { id: 'isbn', numeric: false, disablePadding: false, label: 'ISBN' },
  { id: 'isbn13', numeric: false, disablePadding: false, label: 'ISBN13' },
  { id: 'authors', numeric: false, disablePadding: false, label: 'Author' },
  {
    id: 'original_title',
    numeric: false,
    disablePadding: false,
    label: 'Title',
  },
  {
    id: 'original_publication_year',
    numeric: true,
    disablePadding: false,
    label: 'Year',
  },
  {
    id: 'average_rating',
    numeric: false,
    disablePadding: false,
    label: 'Star Rating',
  },
  {
    id: 'language_code',
    numeric: false,
    disablePadding: false,
    label: 'Language',
  },
  {
    id: 'thumbnail',
    numeric: false,
    disablePadding: false,
    label: 'Thumbnail',
  },
]

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      filter: '',
    }
  }

  componentDidMount = () =>
    fetch('/books/?_page=1')
      .then(response => response.json())
      .then(json =>
        this.setState({
          books: json,
        })
      )

  search = term => {
    this.setState({
      filter: term,
    })
  }

  render = () => {
    const { books, filter } = this.state
    const filteredBooks = books.filter(book => book.title.includes(filter))
    return (
      <div className="app">
        <Search search={term => this.search(term)} />
        <BookList books={filteredBooks} columnHeaders={columnData} />
      </div>
    )
  }
}

export default App
