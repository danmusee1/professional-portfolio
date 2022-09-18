import React from 'react';
import {Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircle from './BackgroundCircle';
import Image from 'next/image';
import Link from 'next/link';

type Props = {}

export default function Hero({}: Props) {
    const[text,count] = useTypewriter({
        words:[
            "Hi, The name is Dan Musee",
            "Guy who Loves Coffe.tsx",
            "<ButLovesToCodeMore/>",
        ],
        loop:true,
        delaySpeed:2000,
    })
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center
    text-center overflow-hidden'>
        <BackgroundCircle/>
        <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src="https://avatars.githubusercontent.com/u/104038467?v=4" alt="profileimg" height="130" width="130" />
        <div className='z-20'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                Software Engineer
            </h2>
            <h1 className='text-5xl lg:text-5xl font-semibold px-10'>
            <span className="mr-3">{text}</span>
            <Cursor cursorColor='#F7ABBA'/>
        </h1>
        <div>
            <Link href="#About">
            <button className="heroButton">About </button>
            </Link>

            <Link href="#Experience">
            <button className="heroButton">Experience </button>
            </Link>

            <Link href="#Skills">
            <button className="heroButton">Skills </button>
            </Link>

            <Link href="#Projects">
            <button className="heroButton">Projects </button>
            </Link>
            
            
           
            
            
            
        </div>
            
        </div>
        
    </div>
  )
}