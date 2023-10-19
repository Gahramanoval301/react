import axios from "axios"
import { useState, useEffect } from "react"
import Button from "../Button"
import Input, { TextArea } from "../Input"
import styles from './index.module.css'

const url = 'https://652f73380b8d8ddac0b27d03.mockapi.io/api/v2/posts'

function SocialNetworking() {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        axios.get(url).then(({data})=>{
            setPosts(data)
        })
    },[])
    
    return(
        <>
        <div className={styles.inputContainer}>
            <h1>Post Form</h1>
            <Input placeholder='enter your heading...' />
            <TextArea placeholder="enter your description" />
            <Button title='POST IT!'/>
        </div>
        <div>
            {
                posts.map((post)=>{
                    return (
                        <div key={post.id} className={styles.postCard}>
                            <h2>{post.title}</h2>
                            <p>{post.description}</p>
                            <hr />

                        </div>
                    )

                })
            }
        </div>
        </>
    )     
}
export default SocialNetworking