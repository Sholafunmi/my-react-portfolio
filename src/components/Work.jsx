import React, {useEffect} from 'react'
import spill from '../assets/spillAfrica.png'
import tomideImg from '../assets/tomide.png'
import fashImg from '../assets/fash.png'
import loopstudio from '../assets/loopstudios.jpg'
import huddle from '../assets/huddle.jpg'
import vscte from '../assets/vscte.png'


import AOS from 'aos'
import 'aos/dist/aos.css'

const Work = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, []);
  return (
    <div name='work' className='w-full h-fit py-5 text-gray-300 bg-[#0a192f]  pb-10 ' >
    {/* work content  */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ' >
            <div className='pb-8' >
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-gray-300 ' >Work </p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>
            {/* CARD  */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4' data-aos="fade-up">
            {/* CARD CONTENT,  grid content  */}

                 {/* PROJECT 6  */}
                 <div style={{ backgroundImage: `url(${vscte})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/* ADD Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            React JS |Tailwind
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href="https://vscte.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Project
                                </button>
                            </a>

                            <a target='_blank' href="https://github.com/Sholafunmi/vscte">
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>


                <div style={{ backgroundImage: `url(${spill})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* ADD Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className=' text-2xl font-bold text-white tracking-wider'>
                            HTML/ CSS/ JAVASCRIPT
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://spillafrica.vercel.app/" target='_blank '>
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white  text-gray-700 font-bold text-lg'>
                                    View Project
                                </button>
                            </a>

                            <a href="https://github.com/Sholafunmi/spillafrica" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* PROJECT 2  */}
                <div style={{ backgroundImage: `url(${tomideImg})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* ADD Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            HTML/ CSS/ JAVASCRIPT
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://tomideolukuade.vercel.app/about.html" target='_blank' >
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Project
                                </button>
                            </a>

                            <a href="https://github.com/Sholafunmi/Tomide_Olukuade" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* PROJECT 3  */}
                <div style={{ backgroundImage: `url(${fashImg})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/*  */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            HTML / CSS / JAVASCRIPT
                        </span>
                        <div className='pt-8 text-center'>
                            <a href="https://temitopefash.vercel.app/" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Project
                                </button>
                            </a>

                            <a href="https://github.com/Sholafunmi/temitope_fash" target='_blank'>
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* PROJECT 4  */}
                <div style={{ backgroundImage: `url(${loopstudio})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* ADD Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            HTML/ CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href="https://loopstudiosbysholafunmi.netlify.app/">
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Project
                                </button>
                            </a>

                            <a target='_blank' href="https://github.com/Sholafunmi/loopstudios">
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* PROJECT 5  */}
                <div style={{ backgroundImage: `url(${huddle})` }} className=' shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* ADD Hover effect  */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className=' text-2xl font-bold text-white tracking-wider '>
                            
                            HTML/ CSS
                        </span>
                        <div className='pt-8 text-center'>
                            <a target='_blank' href="https://huddle-landing-page-sholafunmi.vercel.app/">
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Project
                                </button>
                            </a>

                            <a _blank href="https://github.com/Sholafunmi/Huddle-landing-page">
                                <button className='text-center rounded-lg px-4 py-4 m-2 bg-white text-gray-700 font-bold text-lg'>
                                    View Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

               

                {/* https://loopstudiosbysholafunmi.netlify.app/  */}
                {/* https://huddle-landing-page-sholafunmi.vercel.app/  */}



            </div>



        </div>
    </div>
  )
}

export default Work