import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import Hero from '../components/Hero';
import Header from '../components/Header';
import About from '../components/About';


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Dans Portfolio</title>
        
      </Head>


<Header/>
 {/* heroo */}
 <section id="hero" className='snap-start'>
  <Hero/>
 </section>

 {/* about */}
 <section id="about" className='snap-center'>
<About/>
 </section>

 {/* experience */}

 {/* skills */}

 {/* projects */}

 {/* contact me */}
    

     
    </div>
  )
}

export default Home
