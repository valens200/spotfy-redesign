import React from 'react'
import svg from '../assets/images/disc.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import foto from '../assets/images/foto.png'
import { Slide } from 'react-reveal'
import album from '../assets/images/album.svg'
function Discover() {
  const texts = ['Charts', 'Albums', 'More']
  return (
    <Slide  up>

    <div>
      <Navbar />
    <div className=' h-[80vh] flex flex-col md:flex-row justify-between  md:w-[80%] mx-auto w-[100%] mx-auto translate-y-[18vh] mb-3'>
      <div className='md:w-[70%] w-[90%] mx-auto'>
        <div className='md:w-[76%] w-[100%] mx-auto'>
        <h1 className='text-[1.7rem] text-white my-10'>Discover new music</h1>
          <div className='flex md:flex-row  flex-col md:space-y-0 space-y-20  md:w-[60%] w-[100%] justify-between'>
            {texts.map((text, index) => (
              <div  className='bg-[black] p-4 text-white md:w-[30%] w-[100%]'>
               <div className='text-center w-[50%] mx-auto'>
               <svg width="68" height="72" viewBox="0 0 68 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M60.9273 31.7182L67.3637 35.6997L33.8063 56.4676L0.26001 35.6997L6.69357 31.7182L33.8063 48.5046L60.9273 31.7182ZM33.8063 63.336L6.69357 46.5494L0.26001 50.534L33.8063 71.3019L67.3637 50.534L60.9273 46.5524L33.8063 63.336ZM67.3637 20.8655L33.8063 0.0975342L0.26001 20.8655L33.8063 41.6334L67.3637 20.8655Z" fill="#EAEAEA"/>
                </svg>
               </div>
                <p className='text-center mt-4'>{text}</p>
              </div>
            ))}

          </div>
          <div className='text-white my-5 text-[1.8rem]'>
            <p>BY joining you can benefit from listening to</p>
            <p>the latest album</p>
          </div>
        </div>
    
      </div>
      
      <div className='md:w-[30%] w-[100%]'>
        <div>
           <img  src={foto}/>
        </div>
      </div>

    </div>
    <div className='md:block hidden'>

    <Footer />
    </div>
    </div>
    </Slide>
  )
}

export default Discover