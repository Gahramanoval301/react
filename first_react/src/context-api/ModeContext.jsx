import React, { createContext, useState, useEffect } from 'react'

const ModeContext = createContext(false)

export const ModeContextProvider = ({children}) => {
    const [isDarkMode, setIsDarkMode] = useState(JSON.parse(localStorage.getItem('isDark')))
     const modeToggler = ()=>{
        setIsDarkMode(!isDarkMode)
     }
     useEffect(() => {
      localStorage.setItem('isDark', JSON.stringify(isDarkMode))
     
     }, [isDarkMode])
     
  return (
    <div className={ isDarkMode ? 'darkModeContainer' : ''}>
    <ModeContext.Provider value={[isDarkMode, modeToggler]}>
      {children}
    </ModeContext.Provider>
    </div>
  )
}
export default ModeContext

