import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image'

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
  <article  className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
  w-[400px] lg:w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-2 lg:p-10 hover:opacity-100 
  opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
    <motion.img
    initial={{
        y:-100,
        opacity:0,
    }}
    transition={{
        duration:1.2,
    }}
    whileInView={{
        opacity:1,
        y:0
        
    }}
    viewport={{once:true}}
    className='bg-blue-100  w-32 h-32 rounded w-full xl:w-full xl:h-[200px] object-cover object-center' id='imnewpage_background'
    />
    <div className='px-0 md:px-10'>
        <h4 className="lg:text-4xl text-2xl font-light">YOUNG CEO @ SANTORIN</h4>
        <p className="font-bold text-2xl mt-1">NONICHE</p>
        <div className='flex space-x-2 my-2'>
            <Image className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="Imageteck" height="100px" width="100px" />
            {/*techstack used*/}
            <Image className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="Imageteck" height="100px" width="100px"/>
            {/*techstack used*/}
            <Image className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="Imageteck" height="100px" width="100px"/>
            {/*techstack used*/}
            <Image className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="imgteck" height="100px" width="100px"/>
            {/*techstack used*/}
            
        </div>
        <p> Started work.... Ended....</p>
            <ul className="list-disc space-y-2 lg:space-y-4 ml-5 mr-5 lg:text-lg">
                <li>Summary Points of my life on the day I started working</li>
                <li>Summary Points of my life on the day I started working</li>
                <li>Summary Points of my life on the day I started working</li>
                <li>Summary Points of my life on the day I started working</li>
                <li>Summary Points of my life on the day I started working</li>
                <li>Summary Points of my life on the day I started working</li>
            </ul>
    </div>
  </article>
  )
}