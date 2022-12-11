import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function Projects({}: Props) {
    const projects=[
        
        1, 2, 3, 4, 5
    ];
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
        
    }} className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly 
    mx-auto items-center z-0 '>
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-400 text-2xl">
            Projects
            </h3>
            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20'>
                {projects.map((project, i) =>(
                    <div   className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 
                    items-center justify-center p-20 md:p-44 h-screen' >
                        <motion.img
    initial={{
        opacity:0,
        y:-300,
    }}
    transition={{
        duration:1.2,
    }}
    whileInView={{
        opacity:1,
        y:0,
        
    }}
    viewport={{once:true}}
                        src="https://i.ytimg.com/vi/4qNFioc85Ng/maxresdefault.jpg"
                        alt="project" height="350px" width="350px"/>

                        <div className='space-y-10 px-0 md-px-10 max-w-6xl '> 
                        <h2 className='text-4xl font-semibold text-center'>
                             <span  className='underline decoration-[#F7AB0A]/50'>case Study {i+1} of {projects.length}:</span>
                             Sanity studio</h2>
                             <p className='text-lg text-center md:text-left'>
                                Netflix app v2.0 that has alog in and a log out functionality. Athentificates const has an admin page that
                                allows udser roles administation. enables movie adition , delition , updation and reading.
                                supper fast build with an integrated api calls using asynch functions/. payment is done using stripe, mpesa and apple pay
                             </p>
                        </div>
                    </div>
                ))}
                {/*projects*/}
            </div>
            <div className=' w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>

    </motion.div>
  )
}

export default Projects