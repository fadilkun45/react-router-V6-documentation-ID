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
                    <NavLink to="/" activeClassName="active" >Home</NavLink>
                    <NavLink to="/dashboard"  activeClassName="active">Dashboard</NavLink>
                    <NavLink to="/detail/1"  activeClassName="active" >Detail</NavLink>
                    <NavLink to="/login">Login</NavLink>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
