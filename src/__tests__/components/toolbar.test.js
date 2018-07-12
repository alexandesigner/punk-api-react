/* eslint-disable no-undef */
import React from 'react'
import Toolbar from '../../components/toolbar'

describe('Toolbar', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Toolbar />)
    expect(wrapper).toMatchSnapshot()
  })
  it('render a toolbar title', () => {
    const wrapper = mount(<Toolbar title="Beers" />)
    expect(wrapper.props().title).toEqual('Beers')
    expect(wrapper).toMatchSnapshot()
  })
})
