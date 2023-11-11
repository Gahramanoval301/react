import React from 'react'
import styles from './index.module.css'

export const ToDo = ({ todo, deleteTodo, toggleCompleted }) => {

    console.log('tododaki', todo);

    return (
        <div>
            <p style={{ cursor: 'pointer' }} onClick={() => toggleCompleted(todo.id)} 
            className={todo.completed ? (styles.task) : ''}>
                {todo.task}</p>
            <button>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}
