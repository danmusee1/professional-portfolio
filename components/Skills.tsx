import React from 'react'
import Skill from './Skill'
import {motion} from "framer-motion"

type Props = {}

export default function Skills({}: Props) {
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
     className='flex flex-col relative  text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 justify-center mx-auto xl:space-y-0 items-center min-h-screen'>

<h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
    Skills</h3>

<h1 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
    Hover over a skill for a proficiency</h1>

<div className='grid grid-cols-4 gap-5'>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    <Skill/>
    
</div>
    </motion.div>
  )
}