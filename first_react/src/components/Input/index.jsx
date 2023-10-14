const Input = (type='text', placeholder='', onChange) => {
  return (
    <>
    <input type={type} placeholder={placeholder}
    onChange={onChange} />
    </>
  )
}

export default Input