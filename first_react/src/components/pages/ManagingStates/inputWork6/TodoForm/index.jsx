import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
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
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="todo" id="todo"
                    value={todo}
                    onChange={handleInput} />
                <button type='submit'>Add Todo</button>
            </form>
        </>
    )
}
