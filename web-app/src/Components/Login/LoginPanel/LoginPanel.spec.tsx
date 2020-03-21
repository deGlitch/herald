import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import LoginPanel, { LoginPanelProps } from './LoginPanel'

describe('testing the <LoginPanel/> component', () => {
    let wrapper : ShallowWrapper;

    const minProps : LoginPanelProps = {
        username: '',
        password: '',
        onPasswordChange: jest.fn(),
        onUsernameChange: jest.fn(),
        onSubmit: jest.fn()
    }

    beforeEach(() => {
        wrapper = shallow(<LoginPanel {...minProps} />)
    })

    it('should render a <div/>', () => {
        expect(
            wrapper.find('div').length
        ).toEqual(1)
    })

    it('should render 2 <Input/>', () => {
        expect(
            wrapper.find('Input').length
        ).toEqual(2)
    })

    it('should render 1 <Button/>', () => {
        expect(
            wrapper.find('Button').length
        ).toEqual(1)
    })

    it('should change username and password value based on props', () => {
        wrapper = shallow(<LoginPanel {...minProps} username="a" password="b" />)
        expect(
            wrapper.find('#username-field').prop('value')
        ).toEqual('a')
        expect(
            wrapper.find('#password-field').prop('value')
        ).toEqual('b')
    })
})