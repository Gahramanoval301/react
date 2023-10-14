import Button from '../Button'
import Input from '../Input'
import {useState} from "react"
const ToDo = () => {
    const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

    const onEdit=(_todoName)=>{
       const newTodos = todos.map((todoName)=>{
            if(_todoName === todoName)
            {
                let newTodo = prompt('yeni todon elave et', _todoName);
                return newTodo;
            }
            return todoName
        })
        setTodos(newTodos)

    }
    const onDelete=(_todoName)=>{
        let newTodos = todos.filter((todoName)=>todoName !== _todoName)
        setTodos(newTodos)

    }

  return (
    <>
    <div>
    <Input value={value}  onChange={(e)=>{setValue(e.target.value)}} />
    <Button title='add todo' onClick={()=>{
        setTodos([...todos, value])
        setValue('')
        }}/>
    <Button title='show on console' onClick={()=>{console.log(todos)}}/>
    {
        todos.map((todoName)=>{
            return <div key={todoName}>
              <p> {todoName} </p> 
              <button onClick={()=>{onEdit(todoName)}}>🖊</button>
              <button onClick={()=>{onDelete(todoName)}}>❌</button>
                </div>
        })
    }
    </div>
    </>
  )
}

export default ToDo