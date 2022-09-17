import React from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Slide } from 'react-reveal';

function Join() {
    const [inputs, setINputs] = useState(['Name', 'Email', 'Password',]);
    const getClass = (input) => {
        if(input == 'submit'){
            return "bg-blue-600"
        }else{
            return "bg-black  w-[100%]  h-[80%] border-[blue] border-[2px] [h-[100%]"
        }
    }
  return (
    <Slide right>

    <div>
        <Navbar />

    <div className='text-white h-[90vh]'>
      <div className='md:translate-y-[40vh] translate-y-[20vh] flex  md:flex-row flex-col justify-between w-[90%] md:w-[70%] mx-auto'> 
      <div className='text-[4rem]'>
           <h1 className='font-bold'>Join the <span className='text-red-500'>Fun</span></h1>
        </div>
        <div className='bg-black  rounded px-2 py-4 h-[50vh] md:h-[70vh] w-[100%] md:w-[54%] md:-translate-y-[20vh]'>
            <form action="classsName w-[90%] mx-auto h-[100%] p-[20px]">
                {inputs.map((input, index) => (
                    <div className='bg-[black] mt-[6%] mx-auto h-[8vh]  rounded w-[80%]'>
                        <label className='my-2' htmlFor={input}>{input + ":"}</label>
                        <input className={getClass(input)} />
                    </div>
                ))}
                <div className='w-[80%] mx-auto mt-4  h-[5vh]'>
                <button className="bg-blue-500 mt-4 text-center h-[100%] rounded w-[100%]">Join now</button>

                </div>
            

            </form>
        </div>
      </div>
    </div>
   <div className='mt-20 md:block hidden'>
   <Footer />
   </div>
    </div>
    </Slide>
  )
}

export default Join