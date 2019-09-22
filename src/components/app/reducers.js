import { FETCH_BOOKS } from './types'

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOOKS:
      return {
        books: action.payload.books,
      }
    default:
      return state
  }
}
