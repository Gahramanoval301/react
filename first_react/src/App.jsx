import { NavLink } from 'react-router-dom'
import WebRouting from './components/Routin'
import './App.css'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      {/* <NavLink to='/contacts' style={(({ isActive }) => ({ color: isActive ? 'red' : 'initial' }))}
      >go to contacts</NavLink>; */}
      <WebRouting/>
    </>
  )
}



export default App
