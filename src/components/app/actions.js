import { FETCH_BOOKS } from './types'
import { columnData } from '.'

const fetchBookAction = books => ({
  type: FETCH_BOOKS,
  payload: {
    books,
  },
})

export default url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(books => {
      // eslint-disable-next-line no-unused-vars
      const mapper = columnData.map(column => column.id)
      const reducedBooks = books.map(book =>
        (({ ...mapper }) => ({ ...mapper }))(book)
      )
      dispatch(fetchBookAction(reducedBooks))
    })
}
