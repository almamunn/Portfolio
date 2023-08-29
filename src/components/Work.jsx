import React from 'react'
import WorkItem from './WorkItem'
  

const data = [

    {
        year: 2021,
        title: 'Content Creator',
        duration:'2 Years',
        details: ' I create entertaining or educational material to express through any medium or channel. I have my personal Youtube channel and a Facebook page and I upload 4 videos in a week.'
    },
    {
        year: 2021,
        title: 'Canva ',
        duration:'6 months',
        details: ' Canva is a program for creative people including graphic designers, photographers, illustrators, artists, and teachers, to share their work with over 85 million people and earn royalties. There are three types of Creators; Template Creators, Element Creators, and Education Specialty Creators. I am a Template Creator in Canva '
    },
    {
        year: 2022,
        title: 'Figma to Html',
        duration:'1 Year',
        details: 'Last one year I am a full time figma designer. I can make multiple web page template in figma. I can make CV, Posters, Banner, Cover picture for all kind of business website and social media.'
    },
    {
        year: 2023,
        title: 'Web Design',
        duration:'1 year',
        details: 'As a Front end developer I have made lot of webpages for every sort of Business, educational and entertainment. I try to give every consumer a different type of design to attract their feild raleted user. I ensure the best service and I always submit my projects in deadline. Now I am available in both online(fiverr) and offline market places.'
    }
]
const Work = () => {
  return (
  <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'> 
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        { data.map((item, idx) => (
            <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            />

        ))}
  </div>
  )
}

export default Work