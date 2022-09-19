import React from 'react'
import {motion} from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
  return (
  <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
  w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 
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
    className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
    src="https://avatars.githubusercontent.com/u/104038467?v=4"
         alt="profileimg"
    />
    <div className='px-0 md:px-10'>
        <h4 className="text-4xl font-light">YOUNG CEO NONICHE</h4>
        <p className="font-bold text-2xl mt-1">NONICHE</p>
        <div className='flex space-x-2 my-2'>
            <img className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="imgteck"/>
            {/*techstack used*/}
            <img className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="imgteck"/>
            {/*techstack used*/}
            <img className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="imgteck"/>
            {/*techstack used*/}
            <img className="h-10 rounded-full" src="https://cdn.sanity.io/images/bhlraw1w/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp" alt="imgteck"/>
            {/*techstack used*/}
            
        </div>
        <p> Started work.... Ended....</p>
            <ul className="list-disc space-y-4 ml-5 text-lg">
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
                <li>Summary Points</li>
            </ul>
    </div>
  </article>
  )
}