import { Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import NotFound from '../pages/NotFound'
import Contacts from '../Contacts'
import ToDo from '../ToDo'
import SocialNetworking from '../SocialNetworking'
import AnyElement from '../AnyElement'
import Header from '../Header'

const WebRouting = () => {
  return (
    <>
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path='/' element={<Header/>}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
        {/* <Route path='/' element={<div><ToDo />
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
        </Route> */}
      </Routes>
    </>
  )
}
export default WebRouting