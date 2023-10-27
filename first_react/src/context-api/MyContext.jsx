import React, { createContext, useState, useEffect } from 'react'

const MyContext = createContext({})

export const MyContextProvider = ({ children }) => {
    const [word, setWord] = useState('leman')
    useEffect(() => {
        console.log('helloooo')
    }, [word])
    useEffect(() => {
        setWord('leyla')
    }, [])
    function sayHello() {
        console.log('Selamun Alekum');
        return (
            <div>Salamun alekum!</div>
        )
    }

    return (
        <MyContext.Provider value={[word, setWord, sayHello]}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContext