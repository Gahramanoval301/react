import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../components/CounterSlice'

export const storet = configureStore({
    reducer: {
        counter: counterReducer,
    },
})