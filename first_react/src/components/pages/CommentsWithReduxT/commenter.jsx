import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { get_users, delete_user } from '.'
import axios from 'axios'
import PageContainer from '../../PageContainer'
import { smallBtnStyle } from '../ContactWithRedux'
const url = 'https://dummyjson.com/comments'

const Commenter = () => {
    const comments = useSelector((state) => {
        console.log(state, state.commenter, state.commenter.comments);
        return state.commenter.comments
    })
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(url).then(({ data }) => { dispatch(get_users(data.comments)) })
    }, [])

    return (
        <PageContainer>
            <div className='container' style={{ margin: 7 }}>
                <h1 style={{ color: 'navy', letterSpacing: 4, textAlign: "center" }}>My comments</h1>
                {
                    comments.map(({ id, body }) => {
                        return (
                            <div key={id} className='comment' >
                                <h1 style={{ display: 'inline' }} >{id}-{body}
                                    <button style={smallBtnStyle} onClick={() => dispatch(delete_user(id))}>❌</button></h1>

                            </div>
                        )

                    })

                }
            </div>
        </PageContainer>
    )
}

export default Commenter