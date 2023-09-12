import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Bio = () => {
    useEffect(()=>{
        AOS.init({duration: 1000})
    }, []);
  return (
  
    <div name='bio' className='w-full h-fit py-10 bg-[#0a192f]  text-gray-300' >
        <div className='flex flex-col justify-center items-center w-full h-full'>
            {/* we create a container div  */}
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-300'>Bio</p>
                </div>
                <div>
                  
                </div>

                <div className="heroImgMobile border rounded-3xl  sm:hidden w-[200px] h-[200px] ml-4 ">
            
                </div>

            </div>

                <div className='max-w-[1000px] w-full h-fit grid sm:grid-cols-2 justify-center gap-8 px-4'>
                    <div className='sm:text-right md:text-4xl font-bold mt-2' data-aos="fade-right">
                        <p>I'm a passionate software developer with abilities to turn ideas into elegant, functional solutions.
                        With over a year in the tech industry, I thrive on creating seamless user experiences and tackling complex challenges head-on.</p>
                    </div> 
                    <div className='flex flex-col gap-4 text-[18px]' data-aos="fade-left">
                        <p> <span className='font-bold'>Tech Stack: </span><br />React, Javascript, Html, CSS[Bootstrap, Tailwind], Git.</p>

                        <p><span className='font-bold'>Work Experience:</span> <br />
                        🚀 Developed and launched various fully responsive websites for individuals and organizations like SPILL Africa</p>
                    
                        <p> <span className='font-bold'>Passion and Mission:</span> <br />
                        I'm all about innovation and meaningful impact. My mission is to craft software that not only functions flawlessly but also enhances lives and experiences.
                        Whether it's simplifying a complex workflow or bringing a creative idea to life, I'm in my element.</p>
                   
                        <p>
                            <span className='font-bold'>Education:</span> <br />
                            🎓 B.Tech. in Electrical Electronics, Federal University of Technology Minna, Nigeria. <br />
                            💻 Frontend Web Development, Nupat Technology Lagos. <br />
                            🏆 Software Engineering, ALX Africa (In Session)
                        </p>

                        <a className='border-b w-fit' target='_blank' href="https://github.com/Sholafunmi">📽 Click to check out my GitHub profile to see some of my latest projects and coding experiments.</a>

                        <p><span className='font-bold'>Let's Connect:</span>
                            Ready to collaborate, chat tech, or discuss the latest innovations?
                            Feel free to reach out on <a className='border-b' target='_blank' href="https://www.linkedin.com/in/sholafunmi-adewara-22820613b">LinkedIn</a>  or email me at <a className='border-b' target='_blank' href="mailto:sholafunmiadewara@gmail.com">sholafunmiadewara@gmail.com</a> </p>
                   
                    </div>
                </div>
        </div> 
    </div>
  )
}

export default Bio