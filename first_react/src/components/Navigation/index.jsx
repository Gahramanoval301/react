import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.css'


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
        <div className={styles.nav}>
            <NavigationLink to='/' title='Home' />
            <NavigationLink to='/about' title='go to about' />
            <NavigationLink to='/users' title='UsersWithReducer' />
            <NavigationLink to='/followers' title='AlionFollowers' />
            <NavigationLink to='/counterRedux' title='CounterRedux' />
            <NavigationLink to='/usersWithRedux' title='UsersWithRedux' />
            <NavigationLink to='/contactsWithRedux' title='ContactsWithRedux' />
            <NavigationLink to='/commenter' title='CommentsWithReduxToolkit' />
            <NavigationLink to='/managingStates' title='ManagingStates' />
        </div>
    )

}

export default Navigation;

