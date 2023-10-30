import React, { useState, useEffect, useReducer } from 'react'
import styles from './index.module.css'
const Modal = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    // const [users, setUsers] = useState([])
    // const [openModal, setOpenModal] = useState(false)
    // const [currentUser, setCurrentUser] = useState({})

    const reducer = (state, action) => {
        console.log(state, action);
        switch (action.type) {
            case 'setUsers':
                return { ...state, users: action.payload }
            case 'setCurrentUser':
                return { ...state, currentUser: action.payload }
            case 'setOpenModal':
                return { ...state, modalState: true }
            case 'setCloseModal':
                return { ...state, modalState: false }
            default:
                return state;
        }
    }

    const initial = {
        users: [],
        currentUser: {},
        modalState: false
    }
    const [state, dispatch] = useReducer(reducer, initial)

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then((data) => {
                dispatch({
                    type: 'setUsers',
                    payload: data
                })
            })
            .catch((err) => console.log(err))
    }, [])

    const openModalHandler = (name) => {
        // setOpenModal(true)
        dispatch({
            type: 'setOpenModal'
        })
        // setCurrentUser(name)
        dispatch({
            type: 'setCurrentUser',
            payload: name
        })
    }
    const closeModalHandler = () => {
        // setOpenModal(false)
        dispatch({
            type: 'setCloseModal'
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.list}>
                {
                    state.users.map(({ id, username }) => {
                        return (
                            <div className={styles.list_item} key={id}>
                                <p>{username}</p>
                                <button onClick={() => openModalHandler(username)}>Open Model</button>
                            </div>
                        )
                    })
                }
            </div>
            {state.modalState &&
                <>
                    <div className={styles.modal}>
                        <h2>Username: {state.currentUser}</h2>
                        <button onClick={closeModalHandler}>close</button>
                    </div>

                    <div className={styles.overlay} onClick={closeModalHandler}></div>
                </>
            }

        </div>

    )
}

export default Modal