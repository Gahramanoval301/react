import {useState} from 'react'
const Input = (type='text', placeholder='') => {
  const [value, setValue] = useState('')
  return (
    <>
    <input type={type} value={value} placeholder={placeholder}
    onChange={ (e)=>
    {setValue(e.target.value)}} />
    </>
  )
}

export default Input