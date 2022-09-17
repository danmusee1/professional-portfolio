import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import Hero from '../components/Hero';
import Header from '../components/Header';


const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Dan's Portfolio</title>
        
      </Head>


<Header/>
 {/* heroo */}
 <section id="hero">
  <Hero/>
 </section>

 {/* about */}

 {/* experience */}

 {/* skills */}

 {/* projects */}

 {/* contact me */}
    

     
    </div>
  )
}

export default Home
