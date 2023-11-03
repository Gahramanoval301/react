import React, { useEffect, useReducer } from 'react'
import PageContainer from '../../PageContainer'
import reducerFollowers, { actions, getFollowers, initialState } from './reducer'
import axios from 'axios'

const buttonStyle = {
  outline: 'none',
  backgroundColor: 'pink',
  color: 'blue',
  border: '1px solid hotpink',
  boxShadow: '0 0 10px cadetblue',
  margin: '5px',
  cursor: 'pointer',
  height: '50px'
}
const containerStyle = {
  display: 'flex',
  margin: 10,
  alignItems: 'center'
}
const imgStyle = {
  heigth: '200px',
  width: '200px',
  objectFit: 'cover'
}

const url = 'https://api.github.com/users/Ali-GreenHeart/followers'

const AlionFollowers = () => {
  const [state, dispatch] = useReducer(reducerFollowers, initialState)
  useEffect(() => {
    getFollowers().then((data) => {
      dispatch(
        {
          type: actions.get_followers,
          payload: data
        })
    })
  }, [])
  return (
    <PageContainer>
       <button style={buttonStyle} onClick={() => dispatch({ type: actions.rm_remove_with_a })}>
          remove first follower with a
        </button>
      {
        state.followers.map((follower) => {
          return (
      <div key={follower.id} style={containerStyle}>
        <img style={imgStyle} src={follower.avatar_url} alt={`${follower.login}-follower photo`} />
        <h1>{follower.login}</h1>
        <button style={buttonStyle} onClick={() => dispatch({
          type: actions.remove_follower,
          payload: follower.id
        })}>❌</button>
      </div>
      )
        })
      }
    </PageContainer>
  )
}

export default AlionFollowers