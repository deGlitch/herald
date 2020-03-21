import React from 'react'
import { PanelData } from '../../../../../packages/src/interfaces'
import { RouteComponentProps } from 'react-router';


interface MatchParams {
    panelId: string
}

export interface ContentPaneProps extends RouteComponentProps<MatchParams> {
    panels: PanelData[]
} 

const ContentPane = ({ match, panels } : ContentPaneProps) => {
    
    const { panelId } = match.params;
    const panelData = panels.find(panel => panel.panel === panelId);
    const forms = panelData?.forms || []

    return (
        <div>

        </div>
    )
}

export default ContentPane;