import React, { useState, useEffect } from 'react'
import styles from './index.module.css'
const Modal = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [users, setUsers] = useState([])
    const [openModal, setOpenModal] = useState(false)
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.log(err))
    }, [])

    const openModalHandler = (name) => {
        setOpenModal(true)
        setCurrentUser(name)
    }
    const closeModalHandler = () => {
        setOpenModal(false)
    }

    console.log(users);
    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {
                    users.map(({ id, username }) => {
                        return (
                            <div className={styles.list_item} key={id}>
                                <p>{username}</p>
                                <button onClick={()=>openModalHandler(username)}>Open Model</button>
                            </div>
                        )
                    })
                }
            </div>
            {openModal &&
                <>
                    <div className={styles.modal}>
                        <h2>Username: {currentUser}</h2>
                        <button onClick={closeModalHandler}>close</button>
                    </div>

                    <div className={styles.overlay} onClick={closeModalHandler}></div>
                </>
            }

        </div>

    )
}

export default Modal