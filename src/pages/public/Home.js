import React from 'react'
import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'
import { Login } from './Login';

export const Home = () => {
    return (
        <div>
           
            {/**-----------Renderizar las rutas anidadas-----------**/}
            <Login />

        </div>
    )
}