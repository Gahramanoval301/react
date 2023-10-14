import Button from '../Button'
import Input from '../Input'
import {useState} from "react"
const ToDo = () => {
    const [value, setValue] = useState('')
  return (
    <>
    <div>
    <Input onChange={(e)=>{setValue(e.target.value)}} />
    <Button title='add todo' onClick={()=>{console.log('hellp')}}/>
    </div>
    </>
  )
}

export default ToDo