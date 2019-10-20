import {
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
} from './types'
import columnData from './data-mapping'

const fetchBooksStartedAction = () => ({
  type: FETCH_BOOKS_STARTED,
  payload: {
    loading: true,
  },
})

const fetchBooksSuccessAction = books => ({
  type: FETCH_BOOKS_SUCCESS,
  payload: {
    loading: false,
    books,
  },
})

const fetchBooksFailedAction = () => ({
  type: FETCH_BOOKS_FAILED,
  payload: {
    loading: false,
  },
})

export default url => dispatch => {
  dispatch(fetchBooksStartedAction())
  fetch(url)
    .then(res => res.json())
    .then(books => {
      // eslint-disable-next-line no-unused-vars
      const mapper = columnData.sortableColumns.map(column => column.id)
      const reducedBooks = books.map(book =>
        (({ ...mapper }) => ({ ...mapper }))(book)
      )
      dispatch(fetchBooksSuccessAction(reducedBooks))
    })
    .catch(_ => dispatch(fetchBooksFailedAction()))
}
