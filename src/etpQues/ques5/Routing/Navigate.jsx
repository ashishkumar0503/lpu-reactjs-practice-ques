import React from 'react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Blog from './Blog';

const Navigate = () => {
  return (
    <BrowserRouter>
        <ul>
            <li>
                <Link to='/' >Home</Link>
            </li>
            <li>
                <Link to='/about' >About</Link>
            </li>
            <li>
                <Link to='/blog' >Blog</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/blog' element={<Blog/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Navigate