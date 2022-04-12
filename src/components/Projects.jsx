import React from 'react'
import MAF from '../assets/MAF-SS.png'
import PPChron from '../assets/paw-chronicles-SS.png'
import WDash from '../assets/weather-Dash-SS.png'
import TeamGen from '../assets/teamGenerateSS.png'


const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-300 bg-[#040412]' >
        <div className='max-w mx-auto p-4 flex flex-col justify-center w-full h-full ' >
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-violet-600 ' >Projects</p>
                <p className='py-6 '>// Check out some of my recent Projects</p>
            </div>
            {/* Grid container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4  '>

                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${MAF})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider ' >
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${PPChron})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider ' >
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${WDash})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider ' >
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Repo</button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* grid item */}
                <div 
                    style={{ backgroundImage: `url(${TeamGen})` }}
                    className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div ' >
                    
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider ' >
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '>Deployed</button>
                            </a>
                            <a href="/">
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg '> Repo</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Projects