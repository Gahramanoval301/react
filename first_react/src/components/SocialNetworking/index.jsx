import axios from "axios"
import { useState, useEffect } from "react"
import Button from "../Button"
import Input, { TextArea } from "../Input"
import styles from './index.module.css'
import Post from "../Posts"

const url = 'https://652f73380b8d8ddac0b27d03.mockapi.io/api/v2/posts'

function SocialNetworking() {
    const [posts, setPosts] = useState([])
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')

    function getPosts(_setPosts) {
        axios.get(url).then(({ data }) => {
            setPosts(data)
        })
    }

    useEffect(() => {
        getPosts(setPosts)
    }, [])

    function handleSubmit() {
        if (title.length > 3 && description.length > 6) {
            axios.post(url, { title, description }).then(() => {
                getPosts(setPosts)
            })
            setTitle('')
            setDescription('')
        }
        else{
            setError('Write longer...')
            setTimeout(()=>{
                setError('')
            }, 1000)
        }
    }

    function onDelete(id) {
        axios.delete(url +'/' + id).then(()=>{
            getPosts(setPosts)
        })
        
    }
    return (
        <>
            <div className={styles.inputContainer}>
                <h1>Post Form</h1>
                <em style={{
                    color:'red'
                }}>{error}</em>
                <Input placeholder='enter your heading...' value={title} onEnter={handleSubmit}
                    onChange={ setTitle } />
                <TextArea placeholder="enter your description" value={description} onEnter={handleSubmit}
                    onChange={setDescription} />
                <Button title='POST IT!' onClick={handleSubmit} />
            </div>
            <div>
                {
                    posts.map((post) => {
                        return (
                            <Post key={post.id} post={post} onDelete={onDelete} />
                        )
                        
                    })
                }
            </div>
        </>
    )
}
export default SocialNetworking