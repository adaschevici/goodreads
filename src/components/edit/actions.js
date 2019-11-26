import { EDIT_BOOK } from './types'

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
   fetch(url, header)
    .then(res => res.json())
    .then(() => dispatch(editBookFinished()))
    .then(() => history.push('/'))
    .catch(err => console.log(err))
}

