import React from 'react'
import Navigation from '../Navigation'
const PageContainer = ({children}) => {
  return (
    <>
      <header style={{backgroundColor:'red', width: 200}}>
        IM' header
      </header>
      <Navigation/>
      {children}
      <footer style={{backgroundColor:'blue', width: 200}}>
        Im'sd footer
      </footer>
    </>
  )
}

export default PageContainer