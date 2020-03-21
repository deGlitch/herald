import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import LoginScreen from '../Components/Login/LoginScreen/LoginScreen';
import MainScreen from '../Components/Main/MainScreen/MainScren';
import Config from '../config'
import './App.css'

const App = () => (
    <div className="app-container">
        <Router>
            <Switch>
                <Route path={Config.routes.login} exact>
                    <LoginScreen />
                </Route>
                <Route path={Config.routes.root} exact>
                    <MainScreen  />
                </Route>
            </Switch>
        </Router>
    </div>
)

export default App;