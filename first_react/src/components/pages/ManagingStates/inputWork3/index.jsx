import React, { useState } from 'react'
import '../inputWork1/index.css'

const inputWork3 = () => {
    let [firstName, setFirstName] = useState('')
    let [lastName, setLastName] = useState('')

function handleFirstName(e) {
    setFirstName(e.target.value)
}
function handleLastName(e) {
    setLastName(e.target.value)
}

    return (
        <>
            <h1 style={{ margin: '7px 14px' }}></h1>
            <div className='form'>
                <h2>Let's check you in</h2>
                <form style={{ display: "flex", flexFlow: 'column wrap', gap: '5px' }}>
                    <label htmlFor="firstName">
                        First Name:
                        <input style={{ margin: '0 4px' }} type="text" name="firstName" id="firstName"
                        value={firstName}
                        onChange={handleFirstName} />
                    </label>
                    <label htmlFor="lastName">
                        Last Name:
                        <input style={{ margin: '0 5px' }} type="text" name="lastName" id="lastName"
                        value={lastName}
                        onChange={handleLastName} />
                    </label>
                    <p>You ticket will be issued: {firstName} {lastName} </p>
                </form>

            </div>
        </>
    )
}

export default inputWork3