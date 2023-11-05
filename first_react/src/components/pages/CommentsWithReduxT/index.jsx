import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    comments: []
}
export const commentSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {
        get_users: (state, action) => {
            state.comments = action.payload
        },
        delete_user: (state, action) => {
            state.comments = state.comments.filter((comment) => comment.id !== action.payload)
        }

    }
})
export const { get_users, delete_user } = commentSlice.actions
export default commentSlice.reducer