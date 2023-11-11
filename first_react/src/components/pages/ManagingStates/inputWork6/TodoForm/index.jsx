import React, { useState } from 'react'
import styles from './index.module.css'

export const TodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState('')

    function handleInput(e) {
        setTodo(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        addTodo(todo)
        setTodo('')
    }
    return (
        <>
            <h1>Go to do your tasks!</h1>
            <form action="" onSubmit={handleSubmit} className={styles.formTodo}>
                <input type="text" name="todo" id="todo"
                    value={todo}
                    onChange={handleInput} />
                <button type='submit' disabled={todo.length < 5}>Add Todo</button>
            </form>
        </>
    )
}
