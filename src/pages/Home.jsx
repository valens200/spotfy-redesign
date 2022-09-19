import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/images/image.png'
import Footer from '../components/Footer'
import { Slide } from 'react-reveal' 
import { Link } from 'react-router-dom'

function Home() {
  return (
    <Slide up>

    <div>

    <div className='main h-screen'>
        <Navbar />
        <div className='w-[80%]   translate-y-[30vh] mx-auto  justify-between  text-white flex-col md:space-y-4 space-y-0'>
            <div className='md:w-[50%] md:mt-0 mt-4 md:float-right w-[100%]'>
                <h1 className='text-[3.6rem]'>Fell the music</h1>
                <p className='text-[2.5rem]'>Stream over 30 thousant song with one click</p>
                <Link to="/Join">
                <button className="bg-blue-500 mt-4 text-center h-[6vh] rounded w-[100%] md:w-[14vw]">Join now</button>
                </Link>
            </div>
        </div>

    </div>
    </div>
    </Slide>

  )
}

export default Home