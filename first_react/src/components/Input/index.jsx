const Input = ({value, onChange, onKeyDown}) => {
  return (
    <>
    <input type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />

    </>
  )
}

export default Input