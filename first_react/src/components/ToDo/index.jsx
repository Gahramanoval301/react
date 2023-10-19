//  1st level because we have not endpoint and refresh hell
import { useState } from "react";
import Button from "../Button";
import Input, { TextArea } from "../Input";
import styles from "./index.module.css";
import React from 'react'
const Todo = () => {
    const [error, setError] = useState('')
    const [username, setUsername] = useState('')
    const [comment, setComment] = useState('')
    const [todos, setTodos] = useState([])

    const addTodo = () => {
        if(username.length < 3 || comment.length < 3)
        {
            setError('Write longer...')
            setTimeout(() => {
                setError('')
            },  2000);
            return;
        }
        setTodos([...todos, { id: username, username, comment }])
        setUsername('')
        setComment('')
    }

    const onDelete = (_id) => {
        let filteredTodos = todos.filter(({ id }) => id !== _id)
        setTodos(filteredTodos)
    }

    const onEdit =(_id)=>{
       let newTodos = todos.map(({id, username, comment})=>{
            if(id === _id)
            {
                return {
                    id:username,
                    username: prompt("Enter new username", username),
                    comment:prompt("Enter new comment", comment)
                }
            }
            return {
                id,
                username,
                comment
            }
        })
        setTodos(newTodos)

    }
    return (
        <React.Fragment key={username}>
            <div className={styles.todoContainer}>
                <h1>Comments Page about <a href="https://youtu.be/th4OBktqK1I?si=9aC8MPAH2rSUqfZG" target="_blank">this video</a></h1>
                <p><em style={{color:'red'}}>{error}</em></p>
                <Input type="text" placeholder="enter your username:" value={username} onChange={setUsername} onEnter={addTodo} />
                <TextArea type="text" placeholder="enter your comment:" value={comment} onChange={setComment} onEnter={addTodo} />
                <Button title={'Add comment'} onClick={addTodo} />
            </div>
            <div className={styles.todoItemsContainer}>
                <h1 style={{textAlign:"center"}}>Comments Forms</h1>
            {
                todos.map((todo) => {
                    return (
                        <div className={styles.todoItem} key={todo.id}>
                            <h1 style={{borderBottom:'1px solid black'}}>{todo.username}</h1>
                            <p style={{borderBottom:'1px solid black'}}>{todo.comment}</p>
                            <div className={styles.btnContainer}>
                                <Button title='❌' onClick={() => onDelete(todo.id)} />
                                <Button title='🖊' onClick={() => onEdit(todo.id)} />
                            </div>
                        </div>

                    )

                })
            }
            </div>
        </React.Fragment>
    )
}
export default Todo;