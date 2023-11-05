import React from 'react'

const initialStore = {
    count: 0,
    users: []
}
const RootReducer = (store = initialStore, action) => {
    switch (action.type) {
        case 'inc':
            return { ...store, count: store.count + 1 }
        case 'dec':
            return { ...store, count: store.count - 1 }
        case 'GET_USERS':
            return { ...store, users: action.payload }
        case 'ADD_USER':
            let username = prompt('Please enter name:')
            let email = prompt('Please enter email:')
            let id = store.users.length + 1
            let add_user = [...store.users, { id, username, email }]
            return { ...store, users: add_user }
        case 'DELETE_USER':
            let deleteUser = store.users.filter(user => user.id !== action.payload)
            return { ...store, users: deleteUser }
        case 'RM_LAST_USER':
            let rm_last_user = [...store.users]
            rm_last_user.pop()
            return { ...store, users: rm_last_user }
        default:
            return store;

    }

}

export default RootReducer