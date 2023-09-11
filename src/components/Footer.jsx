import React from 'react'
import { FaLinkedin, FaGithub} from 'react-icons/fa'
import { HiOutlineMail} from 'react-icons/hi'
// import { BsFillPersonLinesFill } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='w-full h-fit bg-[#02060d]  md:flex items-center justify-center md:justify-between md:px-40 gap-4 pt-10 pb-10'>
        <div className='text-gray-200 flex flex-col text-center md:text-left '>
            <p>Sholafunmi Adewara</p>
            <p>@2023 CopyRight Reserved</p>
        </div>
    
       
              <ul className='flex gap-5 justify-center mt-4 md:mt-0 '>
                  <a className=' text-gray-300' target='_blank' href="https://www.linkedin.com/in/sholafunmi-adewara-22820613b"> <FaLinkedin size={30} /> </a>
                  <a className=' text-gray-300' target='_blank' href="https://github.com/Sholafunmi"> <FaGithub size={30} /> </a>
                  <a className=' text-gray-300' target='_blank' href="mailto:sholafunmiadewara@gmail.com"> <HiOutlineMail size={30} /> </a>                    
                  {/* <a className=' text-gray-300' href=""> <BsFillPersonLinesFill size={30} /> </a> */}
             
              </ul>

          
    </div>
  )
}

export default Footer