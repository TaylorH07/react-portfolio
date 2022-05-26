import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import jellyFish from '../assets/jellyfishVid.mp4';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen relative'>
      <video
        className='w-full h-full object-cover ' src={jellyFish} autoPlay loop muted
      />

      <div className='absolute w-full h-full top-0 left-0 bg-gray-900/30'></div>
        {/* Container */}
      <div className='absolute top-0  max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
        
            <p className='text-[#c0fdff]'> Hey Hey! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#b8c6f4] ' > Taylor Holmes </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#869ce4] '> I'm a Software Engineer/ Full Stack Developer</h2>
            <p className='text-[#869ce4] py-4 max-w-[700px] '> I am a Full Stack Developer/Software Engineer from Southern Methodist University
                 Full Stack Development Bootcamp</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#528082] hover:border-[#c0fdff]'> 
                    <Link to="projects" smooth={true} duration={500}>
                        View Projects
                    </Link>
                    <span className='group-hover:rotate-90 duration-300 '>
                        <HiArrowNarrowRight className='ml-3 ' /> 
                    </span>
                </button>
            </div>
        </div>

    </div>
  )
}

export default Home;