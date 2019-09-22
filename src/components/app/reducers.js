import {
  FETCH_BOOKS_STARTED,
  FETCH_BOOKS_SUCCESS,
  FETCH_BOOKS_FAILED,
} from './types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS_STARTED:
      return {
        ...state,
        loading: action.payload.loading,
      }
    case FETCH_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        loading: action.payload.loading,
      }
    case FETCH_BOOKS_FAILED:
      return {
        ...state,
        loading: action.payload.loading,
      }
    default:
      return state
  }
}
