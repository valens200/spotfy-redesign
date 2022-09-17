import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/images/image.png'
import Footer from '../components/Footer'

function Home() {
  return (
    <div>

    <div className='main h-screen'>
        <Navbar />
        <div className='w-[80%]   translate-y-[30vh] mx-auto  justify-between flex md:flex-row  text-white flex-col md:space-y-4 space-y-0'>
            <div className='md:w-[50%]   -translate-y-[20vh] mr-4 w-[80%]'>
                {/* <img src={Image}  className="h-[100%]"/> */}
            </div>
            <div className='md:w-[50%] w-[80%]'>
                <h1 className='text-[3.6rem]'>Fell the music</h1>
                <p className='text-[2.5rem]'>Stream over 30 thousant song with one click</p>
                <button className="bg-blue-500 mt-4 text-center h-[8vh] rounded w-[15vw]">Join now</button>
            </div>
        </div>

    </div>
    </div>
  )
}

export default Home