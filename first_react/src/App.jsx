import FirstElement from './components/FirstElement'
import ToDo from './components/ToDo'
import Contacts from './components/Contacts'
import SocialNetworking from './components/SocialNetworking'
import { Route, Routes, useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <NavLink to='/contacts' style={(({ isActive }) => ({ color: isActive ? 'red' : 'initial' }))}
      >go to contacts</NavLink>;
      <Routes>
        <Route path='/' element={<div><ToDo />
          <Link to='/contacts'>go to contacts</Link>
        </div>
        } />
        <Route path='/social' element={<SocialNetworking />}>
          <Route path='test1' element={<div>Sallllaammm men outletem</div>} />
        </Route>
        <Route path='contacts/:id' element={<div><p>Salllammm men iiiiiddddddddd</p>
          <AnyElement />
        </div>} />
        <Route path='/contacts' element={<Contacts />}></Route>
        <Route path='/social' element={SocialNetworking()}>
        </Route>
      </Routes>
    </>
  )
}

function AnyElement() {
  const { id } = useParams();
  return (<>
    <div><em>{id}</em> -bu id'desen</div>
  </>)

}

export default App
