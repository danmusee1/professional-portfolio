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


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden 
    z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Dan's Portfolio</title>
        
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
<section id="ContactMee" className='snap-center'>
  <ContactMe />
</section>
 {/* contact me */}
    

     
    </div>
  )
}

export default Home
