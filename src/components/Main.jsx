import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaLinkedinIn, FaInstagram, FaTwitter, FaFacebook} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
            <img className='w-full h-screen object-cover object-left ' src="src\assets\images\banner.jpg" alt="my pic" />
            <div className='w-full h-screen absolute top-0 left-0 bg-white/30 '>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Md Abdullah Al Mamun</h1>
                    <h2 className=' flex sm:text-3xl text-2xl font-bold pt-4 text-gray-700'>I'm a <span>____</span>  
                       <TypeAnimation
                      sequence={[
                        'Front-end Developer',
                        2000,
                        'Coder',
                        2000,
                        'Design Expert',
                        2000,
                      ]}
                      wrapper='div'
                      cursor={true}
                      repeat={Infinity}
                      style={{fontSize: '1em', paddingleft: '30px' }}
                      />

                       </h2>
                       <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaFacebook className='cursor-pointer' size={25}  />
                        <FaTwitter  className='cursor-pointer' size={25} />
                        <FaInstagram  className='cursor-pointer' size={25}/>
                        <FaLinkedinIn className='cursor-pointer' size={25} />
                       </div>
                </div>
            </div>
    </div>
  )
}

export default Main