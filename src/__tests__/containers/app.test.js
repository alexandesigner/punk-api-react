/* eslint-disable no-undef */
import React from 'react'
import App from '../../containers/App'

describe('App', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
