/* eslint-disable no-undef */
import React from 'react'
import { Beer } from '../../components/beer'

describe('Beer', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Beer />)
    expect(wrapper).toMatchSnapshot()
  })
  it('render a beer properties', () => {
    const wrapper = mount(<Beer name="Buzz" tag="A Real Bitter Experience." description="A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once." image_url="https://images.punkapi.com/v2/keg.png" />)
    expect(wrapper.props().image_url).toEqual('https://images.punkapi.com/v2/keg.png')
    expect(wrapper.props().name).toEqual('Buzz')
    expect(wrapper.props().tag).toEqual('A Real Bitter Experience.')
    expect(wrapper.props().description).toEqual('A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.')
  })
})
