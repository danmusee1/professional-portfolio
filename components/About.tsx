import React from 'react'
import Image from 'next/image';
import {motion} from "framer-motion"


type Props = {}

export default function About({}: Props) {
  return (
    <motion.div
    initial={{
        
        opacity:0,
    }}
    transition={{
        duration:1.5,
    }}
    whileInView={{
        opacity:1,
        
    }}
     className='flex flex-col relative h-screen text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center min-h-screen'>
        <h3 className='absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

       
        <motion.img
         initial={{
            x:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{
            opacity:1,
            x:0,
        }}
        viewport={{
            once:true,
        }}
          className='mt-20 -mb-20 pr-5 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover
        md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px] ' src="https://avatars.githubusercontent.com/u/104038467?v=4"
         alt="profileimg"  />
      
       <div className='mt-14 space-y-5 px-0 md:x-10'>
        <h4 className='lg:text-4xl text-2xl font-semibold  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-400'>
            Here is a {""}
            <span className='underline decoration-yellow-600'>little</span> {""}
             background
        </h4>
        <p className='text-base'>
        A multidisciplinary full stack web and android developer 
        who focuses on designing and developing 
        identities and campaigns with emphasis on topography and interaction.
        I have an aim To change the world through innovations
         that have never been seen before by designing game-changing 
         e-commerce solutions to make the world a better place. .
         You are welcome to join me.#React js, #Node js, #Next js,#Sanity,#Firebase
        </p>
       </div>
    
    </motion.div>
  )
}

