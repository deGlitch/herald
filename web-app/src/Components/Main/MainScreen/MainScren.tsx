import React, { Component } from 'react'
import UpperNav from '../UpperNav/UpperNav'
import ContentPane from '../ContentPane/ContentPane'
import { PanelData } from '../../../../../packages/src/interfaces'
import { Route, RouteComponentProps } from 'react-router-dom'


interface User {
    username: string
}

interface MainScreenState {
    user: User,
    panels: PanelData[]
}

class MainScreen extends Component<RouteComponentProps, MainScreenState> {

    state : MainScreenState = {
        user: {
            username: ''
        },
        panels: []
    }

    render = () => {

        const { match } = this.props;
        const { panels, user } = this.state
        const { username } = user

        const panelNameList = panels.map(panel => panel.panel)

        return (
            <div>
                <UpperNav username={username} panelNameList={panelNameList} />
                <Route path={`${match.path}/:panelId`} render={(routeProps) => <ContentPane {...routeProps} panels={panels} />} />
            </div>
        )
    }
}

export default MainScreen