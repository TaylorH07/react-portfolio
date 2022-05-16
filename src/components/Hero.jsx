import React from 'react'
import bubbles from '../assets/bubbleVid.mp4'

const Hero = () => {
    return (
        <div className='w-full h-screen relative'>
            <video className='w-full h-full object-cover' src={bubbles} autoPlay loop muted />
            
        </div>
    )
}

export default Hero