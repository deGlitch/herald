import React from 'react'
import { shallow } from 'enzyme'
import LoginScreen from './LoginScreen'

describe('testing the <LoginScreen/> component', () => {
    let wrapper : any;

    beforeEach(() => {
        wrapper = shallow(<LoginScreen/>)
    })

    it('should render a <div/>', () => {
        expect(
            wrapper.find('div').length
        ).toEqual(1)
    })
})