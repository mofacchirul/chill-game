import React from 'react';
import Navbar from '../Componets/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Componets/Footer/Footer';

const MainLayOut = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;