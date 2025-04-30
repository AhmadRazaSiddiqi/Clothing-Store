import React from 'react'
import { BsCart3 } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const cart=useSelector((state)=>state.cart.value)
  return (
    <div className='b h-10 w-full font-bold flex items-center p-9 justify-between sticky top-0 z-1'>
        <NavLink to={'/'} className={'font-bold text-lg'}>Store</NavLink>
        <NavLink to={`/cart`} className={'relative'}>
        <BsCart3 className='text-2xl cursor-pointer font-extrabold my-4.5'/>
        <span className='absolute top-0 right-0 rounded-full bg-red-600 text-white h-5 w-5 text-center p-0 text-sm'>{
        
        }</span>
        </NavLink>
        
    </div>
  )
}

export default Navbar