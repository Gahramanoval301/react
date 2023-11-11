import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { ToDo } from './Todo'
import { v4 } from 'uuid'
const InputWork6 = () => {
    const [todos, setTodos] = useState([])

    function addTodo(todo) {
        setTodos([...todos, { id: v4(), task: todo, completed: false, isEditing: false }])
    }

    function deleteTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    console.log('todos', todos);
    
    return (
        <>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo) => {
                return <ToDo todo={todo} deleteTodo={deleteTodo} key={todo.id} />
            })}
        </>

    )
}

export default InputWork6