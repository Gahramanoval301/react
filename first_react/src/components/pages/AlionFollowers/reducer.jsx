import React from 'react'
import axios from 'axios'

const url = 'https://api.github.com/users/Ali-GreenHeart/followers'

export const initialState = {
    count: 0,
    followers: []
}
export const actions = {
    'get_followers': 0,
    'remove_follower': 1
}
const reducerFollowers = (state = initialState, action) => {
    switch (action.type) {
        case actions.get_followers:
            return { ...state, followers: action.payload }
        case actions.remove_follower:
            return { ...state, followers: state.followers.filter((follower) =>
                    follower.id !== action.payload )}
        default:
            return state;
    }
}

export async function getFollowers() {
    const { data } = await axios.get(url)
    return data
}


export default reducerFollowers