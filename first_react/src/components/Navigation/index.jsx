import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationLink = ({ to, title }) => {
    return (
        <NavLink to={to} style={({ isActive }) => ({ color: isActive ? 'red' : 'initial' })} >
            {title}
        </NavLink>
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

