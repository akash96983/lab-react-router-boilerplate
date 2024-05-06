import react,{ useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Allroutes from './components/Allroutes'

function App() {
  
  return (
 <div id='whole-Container'>
  <NavBar />
  <Allroutes />
 </div>
  )
}

export default App