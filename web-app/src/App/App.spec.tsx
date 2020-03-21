import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

describe('testing the <App/> component', () => {

    let wrapper : any;

    beforeEach(() => {
        wrapper = shallow(<App/>)
      })

    it('should render a <div/>', () => {
        expect(wrapper.find('div').length).toEqual(1)
    })
      
})