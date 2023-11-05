import React from 'react'
import axios from 'axios'
const url = 'http://localhost:3000/contacts'
const initialStore = {
    count: 0,
    users: [],
    contacts: []
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
        case 'get_contacts':
            return { ...store, contacts: action.payload }
        case 'add_contact':
            let idc = store.contacts.length + 1;
            let name = prompt('Please enter name:')
            let age = prompt('Please enter age:')
            let photo = prompt('Please enter image url:')
            axios.post(url, { id: idc, name, age, photo })
            return store
        case 'delete_contact':
            confirm('Are you sure you want to delete?') ? axios.delete(url + '/' + action.payload)
                : alert('Be Careful 😊')
            return store
        case 'edit_contact':
            let idOwn = action.payload.id
            let namec = prompt('Please enter new name:', action.payload.name)
            let agec = prompt('Please enter new age:', action.payload.age)
            let photoc = prompt('Please enter new image url:', action.payload.photo)
            let newContact = { id: idOwn, name: namec, age: agec, photo: photoc }
            axios.put(url + '/' + action.payload.id, newContact)
            return store
        default:
            return store;

    }

}

export default RootReducer