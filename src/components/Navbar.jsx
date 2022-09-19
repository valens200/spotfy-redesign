import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import logo2 from '../assets/images/logo.png'
import Logo from './Logo'

export default function Navbar() {
    console.log("hello")

    const  links =  ['Discover', 'Join'];
    console.log(links)
  return (
    <div className='bg-[rgba(0, 0, 0, 0.769)] h-[6vh] py-4'>

    <div className='bg-[rgba(0, 0, 0, 0.769)]  w-[80%]  h-[100%] mx-auto text-white justify-between flex flex-row'>
     <Link to="/"> <div className='flex  flex-row '>
        <div className=''>
          <Logo />
         </div>
          <div className='ml-3 text-2xl'>
                SoundWave
            </div>
      </div></Link>
      <div className=" md:block hidden text-white">
        <ul className='flex '>
          {links.map((link, index) => (
              <Link className='mx-2 text-[1.5rem]' to={"/" + link}>  <li>{link}</li></Link>

          ))}
        </ul>

      </div>
    </div>
    </div>
  )
}
