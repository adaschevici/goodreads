import { ADD_BOOK, EDIT_BOOK } from './types'

const editBookFinished = () => ({
  type: EDIT_BOOK,
})

export const editBook = (url, book, history) => dispatch => {
  const header = {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(book),
  }
  return fetch(url, header)
    .then(res => res.json())
    .then(() => dispatch(editBookFinished()))
    .then(() => history.push('/'))
    .catch(err => console.log(err))
}

const addBookFinished = () => ({
  type: ADD_BOOK,
})

export const addBook = (url, book, history) => dispatch => {
  const header = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8', // Indicates the content
    },
    body: JSON.stringify(book),
  }
  return fetch(url, header)
    .then(res => res.json())
    .then(() => dispatch(addBookFinished()))
    .then(() => history.push('/'))
    .catch(err => console.log(err))
}
