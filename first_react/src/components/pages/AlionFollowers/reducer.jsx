import React from 'react'
import axios from 'axios'

const url = 'https://api.github.com/users/Ali-GreenHeart/followers'

export const initialState = {
    count: 0,
    followers: []
}
export let actions = {
    'get_followers': 0,
    'remove_follower': 1,
    'rm_remove_with_a': 2
}
const reducerFollowers = (state = initialState, action) => {
    switch (action.type) {
        case actions.get_followers:
            return { ...state, followers: action.payload }
        case actions.remove_follower:
            return {
                ...state, followers: state.followers.filter((follower) =>
                    follower.id !== action.payload)
            }
        case actions.rm_remove_with_a:
            const index = state.followers.findIndex((fol) => fol.login.toLowerCase().startsWith('a'))
            console.log(index)
            const fols = [...state.followers]
            if (index !== -1) fols.splice(index, 1)
            return { ...state, followers: fols }
        default:
            return state;
    }
}

export async function getFollowers() {
    const { data } = await axios.get(url)
    return data
}


export default reducerFollowers