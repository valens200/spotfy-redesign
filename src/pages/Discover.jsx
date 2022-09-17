import React from 'react'
import svg from '../assets/images/disc.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import foto from '../assets/images/foto.png'
import { Slide } from 'react-reveal'
function Discover() {
  const texts = ['Charts', 'Albums', 'More']
  return (
    <Slide  up>

    <div>
      <Navbar />
    <div className=' h-[80vh] flex justify-between w-[80%] mx-auto translate-y-[18vh] mb-3'>
      <div>
        <div className='w-[76%] mx-auto'>
        <h1 className='text-[1.7rem] text-white my-10'>Discover new music</h1>
          <div className='flex md:flex-row flex-col md:space-y-0 space-y-20  w-[60%] justify-between'>
            {texts.map((text, index) => (
              <div  className='bg-[black] p-2 text-white w-[30%] h-[10vh]'>
                <p className='my-3'>img</p>
                <p className='text-center'>{text}</p>
              </div>
            ))}

          </div>
          <div className='text-white my-5 text-[1.8rem]'>
            <p>BY joining you can benefit from listening to</p>
            <p>the latest album</p>
          </div>
        </div>
    
      </div>
      
      <div className='w-[40%]'>
        <div>
           <img  src={foto}/>
        </div>
      </div>

    </div>
    <Footer />
    </div>
    </Slide>
  )
}

export default Discover