import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/js2.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'
import git from '../assets/git.png'


const Skills = () => {
  return (
    <div name='skills' className='bg-[#08192f] text-gray-300 w-full h-screen'>
    {/* create a container  */}
    <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-gray-300 '>Skills</p>
            <p className='mt-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-3 text-center py-8  items-center justify-center '>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[150px] md:w-[240px] h-[150px] flex flex-col justify-center items-center mt-7' >
                <img className='w-[150px] mx-auto' src={react} alt="react icon"  />
                <p className=' py-4'>REACT JS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[150px] md:w-[240px] h-[150px] flex flex-col justify-center items-center mt-7' >
                <img className='w-[250px] mx-auto' src={javascript} alt="js icon"  />
                <p className=' py-4'>JAVASCRIPT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500  w-[150px] md:w-[240px] h-[150px] flex flex-col justify-center items-center mt-7' >
                <img className='w-[85px] mx-auto' src={html} alt="HTML icon"  />
                <p className=' py-4'>HTML</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[150px] md:w-[240px] h-[150px] flex flex-col justify-center items-center mt-7' >
                <img className='w-[220px] mx-auto' src={css} alt="css icon"  />
                <p className=' py-4'>CSS</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[150px] md:w-[240px] h-[150px] flex flex-col justify-center items-center mt-7' >
                <img className='w-[110px] mx-auto' src={git} alt="css icon"  />
                <p className=' py-4'>GIT</p>
            </div>

            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[150px] md:w-[240px] h-[150px] flex flex-col justify-center items-center mt-7' >
                <img className='w-[220px] mx-auto' src={tailwind} alt="css icon"  />
                <p className=' py-4'>Tailwind CSS</p>
            </div>

            {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 w-[240px] h-[150px] flex flex-col justify-center items-center ' >
                <img className='w-20 mx-auto' src={css} alt="css icon"  />
                <p className=' py-4'>CSS</p>
            </div> */}

            

        </div>


    </div>





        {/* <img src={Whatsapp} alt="" /> */}

    </div>
  )
}

export default Skills