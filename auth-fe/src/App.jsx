import { useState } from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Create from './components/Create'
import env from './components/env'
import cors from 'cors'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='*' element={<Navigate to='/login'/>}/>

        
      </Routes>
      </BrowserRouter> 
      
    </>
  )
}

export default App
