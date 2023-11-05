import React, { useEffect, useState, useReducer } from 'react'
import PageContainer from '../../PageContainer'
import axios from 'axios'
import {connect} from 'react-redux'
// import {v4} from 'uuid'
const url = 'https://jsonplaceholder.typicode.com/users'

const UsersWithRedux = ({ users, dispatch }) => {

    useEffect(() => {
        axios.get(url).then(({ data }) => {
            dispatch({
                type: 'GET_USERS',
                payload: data
            })
        })
    }, [])

    return (
        <PageContainer> <br />
            <button onClick={() => dispatch({
                type: 'ADD_USER'
            })}>add user</button>
            <button onClick={() => dispatch({ type: 'RM_LAST_USER' })}>
                remove last element
            </button>
            {
                users.map(({ id, username, email }) => {
                    return (
                        <div key={id}>
                            <h1>{id}.{username} - {email}  <button onClick={() =>
                                dispatch({
                                    type: 'DELETE_USER',
                                    payload: id
                                })
                            }>
                                ❌</button></h1>
                        </div>
                    )
                })
            }
        </PageContainer>
    )
}

const mapStoreToProps = (store) => store
export default connect(mapStoreToProps)(UsersWithRedux)