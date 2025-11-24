import React from 'react'
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/HomePage'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/homepage' element={<HomePage/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App