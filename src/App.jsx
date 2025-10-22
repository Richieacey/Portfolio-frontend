import CursorLight from './assets/components/CursorLight'
import NavBar from './assets/components/NavBar'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Projects from './assets/pages/Projects'
import Contact from './assets/pages/Contact'
import { Route, Routes } from 'react-router-dom'
import './App.css'

export default function App() {

  return (
    <>
      <NavBar />
      <CursorLight />
      <main className='main-content'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
      </main>
    </>
  )
}
