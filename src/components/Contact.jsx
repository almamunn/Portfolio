import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] m-auto p-4 md:pl-20 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="https://getform.io/f/56cc0209-86e7-4f58-9f30-c7c6dfbd514e" method='POST' encType='multipart/form-data'>
            <div  className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col '>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name='name' />
                </div>
                <div  className='flex flex-col '>
                    <label className='uppercase text-sm py-2'>Phone</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name='phone' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Email</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="email" name='email' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Subject</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-400' type="text" name='subject' />
                </div>
                <div className='flex flex-col py-2'>
                    <label className='uppercase text-sm py-2'>Message</label>
                    <textarea className='border-2 rounded-lg p-3 border-gray-400' rows="10" name='message'></textarea>
                </div>

            </div>
            <button className='bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg'>
                    Send Message
                </button>
        </form>

    </div>
  )
}

export default Contact