const Input = ({ type = "text", placeholder = '', onChange, value, onEnter }) => {
    return (
        <>
            <input
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        onEnter()
                    }
                }}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
            />
        </>
    )
}

export const TextArea = ({ type = "text", placeholder = '', onChange, value, onEnter }) => {
    return (
        <>
            <textarea
                style={{
                    resize: "none"
                }}
                onKeyDown={(e) => {
                    if (e.code === 'Enter') {
                        onEnter()
                    }
                }}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={({target})=>{onChange(target.value)}}
            />
        </>
    )
}



export default Input
