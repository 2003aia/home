import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav>
            <div>
                <NavLink to='/profile'>Profile</NavLink>
                <NavLink to='/messages'>Messages</NavLink>
            </div>
        </nav>
            
        
    )
}

export default Navbar;