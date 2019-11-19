import React from 'react'
import 'isomorphic-fetch'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from '../index'
import { FETCH_BOOKS_STARTED, FETCH_BOOKS_SUCCESS } from '../types'
import fetchBooks, { fetchBooksSuccessAction } from '../actions'
import renderer from 'react-test-renderer'
import data from './books'
import { MemoryRouter } from 'react-router'
import configureStore from 'redux-mock-store'
import fetchMock from 'fetch-mock'

const mockStore = configureStore([thunk])

let store

beforeEach(() => {
  store = mockStore({
    appReducer: {
      books: data,
      loading: false,
    },
  })
})

afterEach(() => {
  fetchMock.restore()
})

test('App is rendered ok', () => {
  const component = renderer.create(
    <Provider store={store}>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </Provider>
  )
  expect(component.toJSON()).toMatchSnapshot()
})

test('Fetches books on load', () => {
  fetchMock.getOnce('/books', {
    body: data,
    headers: { 'content-type': 'application/json' },
  })

  const expectedActions = [
    { type: FETCH_BOOKS_STARTED, payload: { loading: true } },
    {
      type: FETCH_BOOKS_SUCCESS,
      payload: { books: data, loading: false },
    },
  ]

  const store = mockStore({ books: [] })

  return store.dispatch(fetchBooks('/books')).then(() => {
    expect(store.getActions()).toEqual(expectedActions)
  })
})
