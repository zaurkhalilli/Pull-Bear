import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Men from './Pages/Men/Men'
import Women from './Pages/Women/Women'
const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route index path='/' element={<Men/>}/>
          <Route index path='/women' element={<Women/>}/>
        </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App

