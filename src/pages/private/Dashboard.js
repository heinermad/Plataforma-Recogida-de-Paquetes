import React, { useContext } from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import AuthContext from '../../context/AuthContext';
import Aside from '../../components/Aside';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Lateral from '../../components/Lateral';

export const Dashboard = () => {
    const {handleAuth} = useContext(AuthContext);

    /* const handleLogout = ()=>{
        handleAuth(false);
    } */

    return (
        <div id="wrapper">
            <Lateral />
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

