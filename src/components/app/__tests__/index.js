import React from 'react'
import fetch from 'isomorphic-fetch'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from '../index'
import renderer from 'react-test-renderer'
import data from './books'
import { MemoryRouter } from 'react-router'
import configureStore from 'redux-mock-store'

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
