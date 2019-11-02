import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import fetchBooksAction from './actions'
import './index.css'
import BookList from '../booklist'
import Search from '../search'
import columnData from './data-mapping'

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
      loading: false,
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
    const { books, loading, history } = this.props
    const { filter } = this.state
    const filteredBooks = books.filter(book => book.title.includes(filter))
    const headers = [columnData.addButton, ...columnData.sortableColumns]
    return (
      <div className="app">
        <Search search={term => this.search(term)} />
        <BookList
          books={filteredBooks}
          loading={loading}
          columnHeaders={headers}
          history={history}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.appReducer.loading,
  books: state.appReducer.books,
})

const mapDispatchToProps = dispatch => ({
  fetchBooks: url => dispatch(fetchBooksAction(url)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
