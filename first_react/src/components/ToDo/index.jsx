import Button from '../Button'
import Input from '../Input'
const ToDo = () => {
  return (
    <>
    <div>
    <Input />
    <Button title='add todo' onClick={()=>{console.log('hellp')}}/>
    </div>
    </>
  )
}

export default ToDo