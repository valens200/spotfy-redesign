import React from 'react'

function Footer() {
    const footerLInk = ['ABout Us', 'Contact']
    const footerLInk2 = ['Twitter', 'Facebok']
  return (
    <div className=''>
    <div  className=' flex w-[80%]  mx-auto justify-between text-white'> 
        <div>
            <ul className='flex font-bold text-[1.8rem]'>

            {footerLInk.map((link, index) => (
                <li className='mx-2'>{link}</li>     
            ))}
            </ul>

        </div>
        <div>
        <ul className='flex font-bold text-[1.8rem]'>

            {footerLInk2.map((link, index) => (
                <li className='mx-2'>{link}</li>     
            ))}
            </ul>

        </div>
    </div>

    </div>
  )
}

export default Footer