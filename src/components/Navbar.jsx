import React, {useState} from 'react';
import {FaBars, FaGithub, FaLinkedin, FaTimes} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
// import {BsFillPersonLinesFill} from 'react-icons/bs'
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNave] = useState(false)
  const handleClick = () => setNave(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center p-4 md:px-20 bg-[#08192f] text-gray-300 nav '>
        {/* <img src={Logo} alt="logo" style={{width: '50px'}} /> */}
        <a href=""className='sm:text-2xl' >Sholafunmi Adewara</a>

        {/* MENU  */}
            <ul className='hidden lg:flex'>          
              <li  className='cursor-pointer'>
                <Link   to="hero"  smooth={true} offset={50} duration={500} >
                  Home
                </Link>
              </li>

              <li  className='cursor-pointer'>
                <Link  to="bio"  smooth={true} offset={50} duration={500} >
                  Bio
                </Link>
              </li>

              <li className='cursor-pointer'>
                <Link  to="skills"  smooth={true} offset={50} duration={500} >
                  Skills
                </Link>
              </li>

              <li className='cursor-pointer'>
                <Link  to="work"  smooth={true} offset={50} duration={500} >
                  Work
                </Link>
              </li>

              <li className='cursor-pointer'>
                <Link  to="contact"  smooth={true} offset={50} duration={500} >
                  Contact
                </Link>
              </li>
            </ul>
        

         {/* HAMBURGER  */}
         <div onClick={handleClick} className='lg:hidden z-10 cursor-pointer text-2xl'>
         {!nav ? <FaBars className='' /> : <FaTimes />}
         </div>

           {/* MOBILE MENU  */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#08192f] text-gray-300 flex flex-col justify-center items-center'}>
              <li  className='cursor-pointer  py-6 text-4xl'>
                  <Link onClick={handleClick}   to="hero"  smooth={true} offset={50} duration={500} >
                    Home
                  </Link>
                </li>

                <li  className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick}  to="bio"  smooth={true} offset={50} duration={500} >
                    Bio
                  </Link>
                </li>

                <li className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick} to="skills"  smooth={true} offset={50} duration={500} >
                    Skills
                  </Link>
                </li>

                <li className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick} to="work"  smooth={true} offset={50} duration={500} >
                    Work
                  </Link>
                </li>

                <li className='cursor-pointer py-6 text-4xl'>
                  <Link onClick={handleClick} to="contact"  smooth={true} offset={50} duration={500} >
                    Contact
                  </Link>
                </li>
            </ul>


            {/* social icons  */}
            <div className='hidden lg:flex fixed flex-col top-[40%] left-0'>
              <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                  <a className='flex justify-between items-center w-full text-gray-300' target='_blank' href="https://www.linkedin.com/in/sholafunmi-adewara-22820613b"> Linkedin <FaLinkedin size={30} /> </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                  <a className='flex justify-between items-center w-full text-gray-300' target='_blank' href="https://github.com/Sholafunmi"> Github <FaGithub size={30} /> </a>
                </li>

                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                   <a className='flex justify-between items-center w-full text-gray-300' target='_blank' href="mailto:sholafunmiadewara@gmail.com"> Email <HiOutlineMail size={30} /> </a>
                </li>

                {/* <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                  <a className='flex justify-between items-center w-full text-gray-300' href=""> Resume <BsFillPersonLinesFill size={30} /> </a>
                </li> */}




              </ul>

            </div>
    </div> 
  )
}

export default Navbar