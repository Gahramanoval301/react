import React from 'react'
export const ToDo = ({ todo, deleteTodo }) => {
    console.log('tododaki', todo);
    return (
        <div>
            <p>{todo.task}</p>
            <button>Edit</button>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
    )
}
