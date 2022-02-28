import React from 'react'
import { NavLink } from 'react-router-dom'
const Sidebar = () =>
{
    return (
        <nav className='sidenav'>
            <NavLink className='navlink' to='/'>Home</NavLink>
            <NavLink className='navlink' to={ '/about' }>About</NavLink>
            <NavLink className='navlink' to={ '/experience' }>Experience</NavLink>
            <NavLink className='navlink' to={ '/interest' }>Interests</NavLink>
            <NavLink className='navlink' to={ '/skils' }>Skills</NavLink>
            <NavLink className='navlink' to={ '/award' }>Award</NavLink>
        </nav>
    )
}

export default Sidebar