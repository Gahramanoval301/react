import React from 'react'
import styles from './index.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

export const ToDo = ({ todo, deleteTodo, toggleCompleted, toggleEdit }) => {

    console.log('tododaki', todo);

    return (
        <div className={styles.todoList}>
            <p style={{ cursor: 'pointer' }} onClick={() => toggleCompleted(todo.id)}
                className={todo.completed ? (styles.task) : ''}>
                {todo.task}</p>
            <div className={styles.buttonGroup}>
                <button onClick={() => toggleEdit(todo.id)}><FontAwesomeIcon icon={faEdit}/></button>
                <button onClick={() => deleteTodo(todo.id)}><FontAwesomeIcon icon={faTrash}/></button>
            </div>
        </div>
    )
}
