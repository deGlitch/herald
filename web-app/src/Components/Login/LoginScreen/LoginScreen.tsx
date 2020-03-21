import React, { Component } from 'react'
import LoginPanel from '../LoginPanel/LoginPanel'
import './LoginScreen.css'

class LoginScreen extends Component {

    state = {
        username: "",
        password: ""
    }

    handleUsernameChange = (username: string) => this.setState({ username })
    handlePasswordChange = (password: string) => this.setState({ password })
    handleLoginInformationSubmit = () => {
        const { username, password } = this.state;
    }

    render = () => {
        const { username, password } = this.state;
        return (
            <div className="login-screen-container">
                <LoginPanel
                username={username}
                password={password}
                onPasswordChange={this.handleUsernameChange}
                onUsernameChange={this.handleUsernameChange}
                onSubmit={this.handleLoginInformationSubmit}
                />
            </div>
        )
    }
}

export default LoginScreen;