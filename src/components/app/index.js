import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import fetchBooksAction from './actions'
import './index.css'
import BookList from '../booklist'
import Search from '../search'

export const columnData = [
  { id: 'isbn', numeric: true, disablePadding: false, label: 'ISBN' },
  { id: 'isbn13', numeric: true, disablePadding: false, label: 'ISBN13' },
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
    id: 'small_image_url',
    numeric: false,
    disablePadding: false,
    label: 'Thumbnail',
  },
]

class App extends Component {
  static defaultProps = {
    books: [],
  }

  static propTypes = {
    fetchBooks: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(PropTypes.object),
  }

  constructor(props) {
    super(props)
    this.state = {
      filter: '',
    }
  }

  componentDidMount = () => {
    const { fetchBooks } = this.props
    fetchBooks('/books/')
  }

  search = term => {
    this.setState({
      filter: term,
    })
  }

  render = () => {
    const { books } = this.props
    const { filter } = this.state
    const filteredBooks = books.filter(book => book.title.includes(filter))
    return (
      <div className="app">
        <Search search={term => this.search(term)} />
        <BookList books={filteredBooks} columnHeaders={columnData} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  books: state.appReducer.books,
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: url => dispatch(fetchBooksAction(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
