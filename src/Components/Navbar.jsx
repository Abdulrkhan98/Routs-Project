import React from 'react'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
    <div className='flex items-center mt-5  justify-around'>
    <div>
        <h3 className='text-4xl font-bold'>router</h3>
    </div>
    <div className=' text-black px-5 py-2 rounded-full shadow-2xl bg-gray-200'>
        <ul>
          <li className='text-xl flex gap-5'>
             <NavLink to="/" className={({isActive}) => isActive ? "text-blue-600" : ""}>Home</NavLink>
             <NavLink to="products" className={({isActive}) => isActive ? "text-blue-600" : ""}>Products</NavLink>
             <NavLink to="about" className={({isActive}) => isActive ? "text-blue-600" : ""}>About</NavLink>
             <NavLink to="contact" className={({isActive}) => isActive ? "text-blue-600" : ""}>Contact</NavLink>
             <NavLink to="jobs" className={({isActive}) => isActive ? "text-blue-600" : ""}>Jobs</NavLink>
           </li>
        </ul>
    </div>
    <div>
        <button className='bg-black text-white px-6 py-3 rounded-full'>Get Started</button>
    </div>
 </div>
    </>
  )
}

export default Navbar
