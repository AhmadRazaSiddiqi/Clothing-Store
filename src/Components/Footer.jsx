import React from 'react'
import { SlSocialInstagram } from 'react-icons/sl'
import { TiSocialFacebookCircular, TiSocialTwitterCircular } from 'react-icons/ti'

const Footer = () => {
    return (
        <div className='bg-slate-200  b-0 w-full grid grid-cols-4 p-4 items-center h-auto'>
            <div className=''>
                 <h3 className='text-xl my-4'>Products</h3>
                <ul className='flex flex-col gap-2'>
                    <li>Mens Clothing</li>
                    <li>Women's Clothing</li>
                    <li>Jwelery</li>
                    <li>Electronics</li>
                </ul></div>

            <div className=''>
            <h3 className='text-xl my-4'>Socials</h3>
                <ul className='flex flex-col gap-2'>
                    <li>mail@Email.com</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>+1100000099232</li>
                </ul>
            </div>
            <div className=''>
            <h3 className='text-xl my-4'>Help</h3>
                <ul className='flex flex-col gap-2'>
                    <li>Help Forums</li>
                    <li>About Us</li>
                </ul>
            </div>
            <div className=''>
            <h3 className='text-lg my-4'>Subscribe to our NewsLetter</h3>
                <ul className='flex  gap-2'>
                    <input type="text" className='border rounded border-slate-400' />
                    <button className='border bg-black text-white border-slate-300 px-1 py-0.5 rounded'>Subscribe</button>
                </ul>
            </div>
        </div>
    )
}

export default Footer