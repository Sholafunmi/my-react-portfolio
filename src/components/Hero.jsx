import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'
// import {HiArrowNarrowRight} from 'react-icons/h1'

const Hero = () => {
  return (
    <div name='hero' className='w-full sm:mw-fit h-screen sm:h-fit sm:py-10   lg:h-screen bg-[#0a192f] flex justify-center items-center'>

    {/* container  */}
        <div className='max-w-[1000px]  px-8 mt-32 flex flex-col justify-center h-full '>
            <p className='text-[#8892b0]  '>Hi, Nice to meet you!</p>
            <p className='text-3xl sm:text-7xl font-bold text-[#ccd6f6]'>My name is <br /> Sholafunmi Adewara</p>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a software engineer</h2>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a frontend web developer passionate about building accesible web apps that users love</p>


            <div>
                <button className=' group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-black hover:border-gray-300 gap-3'> 
                <Link to='work'> View Work</Link>
                    <span className='group-hover:rotate-90 duration-300'>  <HiArrowNarrowRight /> </span> 
                </button>
            </div>
        
        </div>


        {/* right image  */}
        {/* <div className="heroImg border rounded-3xl hidden lg:flex w-[300px] h-[250px]">
            
        </div> */}
    </div>
  )
}

export default Hero