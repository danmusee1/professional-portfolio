import React from 'react'
import { SocialIcon } from 'react-social-icons'
import {motion} from "framer-motion"
import Link from 'next/link'
type Props = {}

export default function Header({}: Props) {
  return (
    <header className='flex items-start  sticky top-0 justify-between max-w-7xl 
    xl:items-center  mx-auto z-20 p-5'>
        {/*social icons*/}
        <motion.div
        initial={{
            x:-500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5,
        }}
         className="flex flex-row items-center">
        <SocialIcon 
        url="https://github.com/danmusee1"
        fgColor='gray'
        bgColor='transparent'
        
        />

<SocialIcon 
        url="https://www.linkedin.com/in/dan-musee-bb56341b2/"
        fgColor='gray'
        bgColor='transparent'
        
        />

<SocialIcon 
        url="https://youtube.com/channel/UCHHCsjWYhit9yUoN7aLkUFg"
        fgColor='gray'
        bgColor='transparent'
        
        />
        </motion.div>

      <Link href="#Contact">
        <motion.div
        initial={{
            x:500,
            opacity:0,
            scale:0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.5,
        }}

         className="flex flex-row items-center text-gray-400 cursor-pointer">
            <SocialIcon
            className='cursor-poiter'
            network='email'
            bgColor='transparent'
            fgColor='gray'
            />
            <p className='uppercase  hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>

        </motion.div>
        </Link>
    </header>
  )
}