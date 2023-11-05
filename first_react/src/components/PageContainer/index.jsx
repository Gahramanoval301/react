import React from 'react'
import Navigation from '../Navigation'
const PageContainer = ({ children }) => {
  const hfStyles = {
    backgroundColor: 'navy',
    textAlign: 'center',
    padding: '1rem',
    color: 'white',
    fontSize: '1.2rem',
    letterSpacing: '5px'

  }

  return (
    <>
      <header style={hfStyles}>
        Header
      </header>
      <Navigation />
      {children}
      <footer style={hfStyles}>
        Footer
      </footer>
    </>
  )
}

export default PageContainer