import React from 'react'
import ProjectItems from './ProjectItems'
import cryptoImg from '../assets/images/crypto.jpg'
import dgraphicImg from '../assets/images/dgraphic.jpg'
import webImg from '../assets/images/web.jpg'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h2 className='text-4xl font-bold text-center text-[#001b5e]'>Project</h2>
        <p className='text-center py-8'>I'm responsible for developing new user-facing features, determining the structure and design of web pages, building reusable codes, optimizing page loading times, and using a variety of markup languages to create the web pages.</p>
          <div className='grid sm:grid-cols-2 gap-12'>
          <ProjectItems img={cryptoImg} title='Crypto App'/>
          <ProjectItems img={dgraphicImg} title='Digital Graphic'/>
          <ProjectItems img={webImg} title='Web Page'/>
          <ProjectItems img={cryptoImg} title='Dashboard'/>
          </div>
    </div>
      
  )
}

export default Projects