import React from 'react'
import Search from '../index'
import Button from '../components/button'
import Input from '../components/input'
import TestRenderer from 'react-test-renderer'

let props = {}
const mockFn = jest.fn()
const event = { target: { value: 'search term' } }

beforeEach(() => {
  console.log('Running first test')
  props = {
    search: mockFn,
  }
})

test('Search component is rendered ok', () => {
  const component = TestRenderer.create(<Search {...props} />)
  expect(component.toJSON()).toMatchSnapshot()
})

test('Button click event is handled', () => {
  const testRenderer = TestRenderer.create(<Search {...props} />)
  const testInstance = testRenderer.root
  const button = testInstance.findByType(Button)
  button.props.onClick()
  expect(testInstance.props.search).toHaveBeenCalled()
})

test('Input handles change events', () => {
  const testRenderer = TestRenderer.create(<Search {...props} />)
  const testInstance = testRenderer.root
  const parent = testInstance.instance
  const input = testInstance.findByType(Input)
  input.props.onChange(event)
  expect(parent.state.input).toEqual('search term')
})
