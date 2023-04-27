import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'

const Navbar = () => {
  return (
    <BrowserRouter>

        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/about' >About US</Link>
            </li>
            <li>
                <Link to='/contact' >Contact</Link>
            </li>
        </ul>

        <Routes>
            <Route exact path='/' element = {<Home/>} >Home</Route>
            <Route exact path='/about' element={<About/>} ></Route>
            <Route exact path='/contact' element={<Contact/>} ></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Navbar