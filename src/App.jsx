import React from 'react'
import Home from './Pages/Home'
import Products from './Pages/Products'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Jobs from './Pages/Jobs'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'

const App = () => {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>}/>   
    <Route path='products' element={<Products/>}/>   
    <Route path='about' element={<About/>}/>   
    <Route path='contact' element={<Contact/>}/>   
    <Route path='jobs' element={<Jobs/>}/>   

    

   </Routes>
  
   </>
  )
}

export default App
