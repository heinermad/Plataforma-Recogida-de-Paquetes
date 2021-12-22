import React from 'react'
import { Outlet } from 'react-router'
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

export const Dashboard = () => {

    /* const handleLogout = ()=>{
        handleAuth(false);
    } */

    return (
        <div id="wrapper">
            <Aside />
            <div id="content-wrapper" className="d-flex flex-column">
            <Nav />
                <div className="container-fluid">
                <Outlet />
                </div>
            <Footer />
      </div>
    </div>
    )
}

