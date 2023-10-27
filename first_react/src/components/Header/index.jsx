import React, { useContext } from 'react'
import styles from './index.module.css'
import { AuthContext } from '../../context-api/AuthorContext'
import MyContext from '../../context-api/MyContext'

const Header = () => {
    // const [d, setData] = useContext(AuthContext)
    // console.log(d, 'salamamm');
    // setData('leyla')
    // console.log(d, 'slaam2');
    const [word, setWord, sayHello] = useContext(MyContext)
    console.log(word);
    setWord('leman deyisildi setWord funksiyasi terefinden!')
    console.log(word);

    return (
        <>
            <div className={styles.headerComp}>
                <h1>Header {word}</h1>
                <em>{sayHello()}</em>
            </div>
        </>
    )
}

export default Header