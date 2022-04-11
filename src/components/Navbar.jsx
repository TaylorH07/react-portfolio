import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/myLogo2.png';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
        </div>

        {/* Menu */}
        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li> 
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className = 'py-6 text-4xl'>Home</li>
            <li className = 'py-6 text-4xl'>About</li>
            <li className = 'py-6 text-4xl'>Skills</li>
            <li className = 'py-6 text-4xl'>Projects</li>
            <li className = 'py-6 text-4xl'>Contact</li> 
        </ul>

        {/* Social Icons */}
        <div className ='flex fixed flex-col top-[35%] left-0' >
            <ul>
                <li>
                    <a href="/">
                        LinkedIn <FaFacebook />
                    </a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default Navbar