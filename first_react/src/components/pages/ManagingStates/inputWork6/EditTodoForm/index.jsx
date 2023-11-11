import React, { useState } from 'react'

export const EditTodoForm = ({editTodo}) => {
    const [todo, setTodo] = useState('')

    function handleInput(e) {
        setTodo(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        editTodo(todo)
        setTodo('')
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todo"
                    value={todo}
                    onChange={handleInput} />
                <button onClick={()=>editTodo(todo)} type='button' >Update Task</button>
            </form>
        </>
    )
}
