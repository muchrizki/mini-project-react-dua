import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import Register from './pages/Register'
import Home from './pages/Home'



function App() {
  // const [count, setCount] = useState(0)
  const [register, setRegister] = useState(false)
  const handleRegisterPage = () => setRegister(!register)
  const setRegisterFalse = () => setRegister(false)
  const setRegisterTrue = () => setRegister(true)
  // console.log(register)

  return (
    <BrowserRouter>
      
      <Routes>

        <Route path='/' element={ <Home handleRegisterPage = {handleRegisterPage} setRegisterFalse = {setRegisterFalse} setRegisterTrue = {setRegisterTrue} /> } />
        <Route path='/login' element={ <LoginPage register={register} handleRegisterPage = {handleRegisterPage}/> } />
        <Route path='/register' element={ <Register/> } />
      
      </Routes>

    </BrowserRouter>
  )
}

export default App
