import React from 'react'
import Navbar from '../Pages/Navbar'

const Header = () => {
  return (
    <>
    <Navbar/>
    <div className='border border-slate-200 py-5 text-md font-semibold'>
    <ul className='flex justify-evenly'>
        <li>men's clothing</li>
        <li>women's clothing</li>
        <li>electronics</li>
        <li>jewelery</li>
    </ul>
    </div>
    </>
  )
}

export default Header