import React, { useRef } from 'react'

const SomeElement = () => {
    const input = useRef()
    console.log(input);
    const handleFocus = () => {
        input.current.focus()

    }
    return (
        <div>someElement
            <input type="text" ref={input} />
            <button onClick={handleFocus}>Focus</button>
        </div>
    )
}

export default SomeElement