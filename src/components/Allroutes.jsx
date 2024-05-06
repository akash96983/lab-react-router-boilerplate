import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import About from '../pages/About';

function Allroutes() {
  return (
  <Routes>
    <Route path='/home' element={<Home/>} />
    {/* <Route path='/home'> <Home /></Route> */}
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
  </Routes>
  )
}

export default Allroutes