import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'
import Firstpage from './components/First'

const MyRoutes = () => {
  return (
    
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          <Route path='/first' element={<Firstpage/>}/>
        </Routes>
      </Router>
    
  )
}

export default MyRoutes