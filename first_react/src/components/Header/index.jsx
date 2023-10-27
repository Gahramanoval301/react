import React, { useContext } from 'react'
import styles from './index.module.css'
import { AuthContext } from '../../context-api/AuthorContext'
import MyContext from '../../context-api/MyContext'
import ModeContext from '../../context-api/ModeContext'

const Header = () => {
    // const [d, setData] = useContext(AuthContext)
    // console.log(d, 'salamamm');
    // setData('leyla')
    // console.log(d, 'slaam2');

    // const [word, setWord, sayHello] = useContext(MyContext)
    // console.log(word);
    // setWord('leman deyisildi setWord funksiyasi terefinden!')
    // console.log(word);

    const [isDark, modeToggler] = useContext(ModeContext)

   
    return (
        <>
            <div className={styles.headerComp}>
                <h1>Header</h1>
                <button onClick={modeToggler}>modeChange</button>
                {/* <em>{sayHello()}</em> */}
            </div>
        </>
    )
}

export default Header