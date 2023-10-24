import React from 'react'
import { NavLink } from 'react-router-dom'


const NavigationLink = ({ to, title }) => {
    return (
        <li>
        <NavLink to={to} style={({ isActive }) => ({ color: isActive ? 'red' : 'initial' })} >
            {title}
        </NavLink>
        </li>
    )
}

const Navigation = () => {
    return (
        <>
            <NavigationLink to='/' title='Home' />
            <NavigationLink to='/about' title='go to about' />
        </>
    )

}

export default Navigation;

