import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/CounterSlice'
import commentReducer from '../components/pages/CommentsWithReduxT'

export const storet = configureStore({
    reducer: {
        counter: counterReducer,
        commenter: commentReducer
    },

})