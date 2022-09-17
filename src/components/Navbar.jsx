import React from 'react'
import logo from '../assets/images/Logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'


export default function Navbar() {
    console.log("hello")

    const  links =  ['Discover', 'Join'];
    console.log(links)
  return (
    <div className='bg-[rgba(0, 0, 0, 0.769)] h-[6vh] py-4'>

    <div className='bg-[rgba(0, 0, 0, 0.769)]  w-[80%]  h-[100%] mx-auto text-white justify-between flex flex-row'>
     <Link to="/"> <div className='flex flex-row '>
        <div className='text-white'>
          
            logo
         </div>
          <div className='ml-3 text-2xl'>
                SoundWave
            </div>
      </div></Link>
      <div className="text-white">
        <ul className='flex '>
            <Link to="/Discover">  <li>Discover</li></Link>
           <Link to="/join" ><li className='ml-4'>Join</li></Link>
        </ul>

      </div>
    </div>
    </div>
  )
}
