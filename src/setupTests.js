// setup file
import {
  shallow, render, mount, configure
} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// Configure adapter
configure({ adapter: new Adapter() })

// Globals
global.shallow = shallow
global.render = render
global.mount = mount
