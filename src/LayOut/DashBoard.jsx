import React from 'react';

import { Outlet } from 'react-router-dom';
import DashBoardSideBar from '../Pages/DashBoard/DashBoardSideBar';

const DashBoard = () => {
    return (
        <div className='sm:flex'>
            <DashBoardSideBar></DashBoardSideBar>
            <Outlet className='flex-1'></Outlet>
        </div>
    );
};

export default DashBoard;