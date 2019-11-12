import { DELETE_BOOK } from './types'
import fetchBooks from '../../app/actions'

const deleteBookFinished = () => ({
  type: DELETE_BOOK,
})

export const deleteBook = (bookId, history) => dispatch => {
  const header = {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
  }
  return fetch(`/books/${bookId}`, header)
    .then(res => res.json())
    .then(() => dispatch(deleteBookFinished()))
    .then(() => dispatch(fetchBooks('/books')))
    .catch(err => console.log(err))
}
