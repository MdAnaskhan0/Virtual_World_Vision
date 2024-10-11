import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import SignUp from './Pages/Signup'
import LogIn from './Pages/Login'
import PageNotFound from './Pages/PageNotFound'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
