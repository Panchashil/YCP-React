import React from 'react';
import { Outlet } from 'react-router-dom';
import NavComp from './NavComp';

const MainDashboard = () => {
    return (
        <div className='container'>
            {/* <h2>This is MainDashboard components</h2> */}
            <div className='card border-primary'>
                <div className='card-header'>
                    <NavComp />
                </div>
                <div className='card-body'>
                   <Outlet />
                </div>
                <div className='card-footer'>footer</div>
            </div>
        </div>
    )
}

export default MainDashboard
