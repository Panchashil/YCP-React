import React from 'react';
import { Outlet } from 'react-router-dom';

const ReactHooksComp = () => {
    return (
        <div>
            <h2>This is Rteact Hooks components</h2>
            <Outlet />
        </div>
    )
}

export default ReactHooksComp
