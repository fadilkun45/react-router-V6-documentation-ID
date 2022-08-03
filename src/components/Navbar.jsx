import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="container row flex-between items-center">
                <div className="nav-logo">
                    <h1>React Router V6</h1>
                </div>
                <div className="nav-link">
                    <NavLink to="/"  className={({isActive}) => isActive ? 'Active' : ''}>Home</NavLink>
                    <NavLink to="/dashboard"  className={({isActive}) => isActive ? 'Active' : ''}>Dashboard</NavLink>
                    <NavLink to="/detail/1"  className={({isActive}) => isActive ? 'Active' : ''}>Detail</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
