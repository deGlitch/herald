import React from 'react';

interface PanelProps {
    title: string,
    children: React.ReactNode
}

const Panel = ({ children, title } : PanelProps) => {
    return (
        <div>
            <p>{title}</p>
            { children }
        </div>
    )
}

export default Panel