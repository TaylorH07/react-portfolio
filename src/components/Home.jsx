import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import { Link } from 'react-scroll';
import jellyFish from '../assets/jellyfishVid.mp4';


const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#040412]'>
        
        {/* Container */}
          <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full '>
            <p className='text-violet-600'> Hey Hey! My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#b8c6f4] ' > Taylor Holmes </h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#869ce4] '> I'm a Software Engineer/ Full Stack Developer</h2>
            <p className='text-[#869ce4] py-4 max-w-[700px] '> I am a Full Stack Developer/Software Engineer from Southern Methodist University
                 Full Stack Development Bootcamp</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-violet-900 hover:border-violet-600'> 
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