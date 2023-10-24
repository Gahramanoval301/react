import React, { useContext } from 'react'
import styles from './index.module.css'
import { AuthContext } from '../../context-api/AuthorContext'

const Header = () => {
    const [d, setData] = useContext(AuthContext)
    console.log(d, 'salamamm');
    setData('leyla')
    console.log(d, 'slaam2');
    return (
        <>
            <div className={styles.headerComp}>
                <h1>Header</h1>
            </div>
        </>
    )
}

export default Header