import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';
import Projects from '../components/Projects';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Dans Portfolio</title>
        
      </Head>


<Header/>
 {/* heroo */}
 <section id="hero" className='snap-start'>
  <Hero/>
 </section>

 {/* about */}
 <section id="About" className='snap-center'>
<About/>
 </section>

 {/* experience */}
 <section id="Experience" className='snap-center'>
<WorkExperience/>
 </section>

 {/* skills */}
 <section id="Skills" className='snap-center'>
<Skills/>
 </section>

 <section id="Projects" className='snap-center'>
<Projects/>
 </section>

 {/* projects */}
<section id="Contact" className='snap-center'>
  <ContactMe />
</section>
 {/* contact me */}
 <Link href="#hero">
 <footer className='sticky bottom-1 w-full cursor-pointer'>
  <div className='flex item-center justify-center'>
    <Image className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer
    ' src="https://avatars.githubusercontent.com/u/104038467?v=4" alt="profileimg" height="60" width="60"/>
  </div>
 </footer>
 </Link>
    

     
    </div>
  )
}

export default Home
