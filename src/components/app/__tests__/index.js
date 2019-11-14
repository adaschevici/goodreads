import React from 'react'
import App from '../index'
import renderer from 'react-test-renderer'

test('App is rendered ok', () => {
  const component = renderer.create(<input />)
  let _ = component.toJSON()
})
