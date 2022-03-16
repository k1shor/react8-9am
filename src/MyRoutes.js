import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './components/Pages/Home'

const MyRoutes = () => {
  return (
    
      <Router>
        <Routes>
          
          <Route path='/' element={<Home/>}/>
          
        </Routes>
      </Router>
    
  )
}

export default MyRoutes