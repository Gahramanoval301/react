import React from 'react'

export const initialState = {
    count: 0
}

const ReducerCounter = (state = initialState, action) => {
    switch (action.type) {
        case 'inc':
            return { ...state, count: state.count++ }
        case 'reset':
            return { ...state, count: state.count = 0 }
        default:
            return state
    }
}

export default ReducerCounter