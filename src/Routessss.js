import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Firstpage from './First'

const Routessss = () => {
    return (
        <BrowserRouter>
            <Routes>
                // path - url , element - components
                <Route path='/f' element={<Firstpage/>}/>

                
            </Routes>
        </BrowserRouter>
    )
}

export default Routessss