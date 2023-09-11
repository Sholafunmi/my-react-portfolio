import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-fit bg-[#0a192f] flex justify-center items-center p-4 pt-10'>
        <form method='POST' action="https://getform.io/f/72d62d5f-263f-4b8f-b3f9-0d485ac68168" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-gray-300 text-4xl font-bold border-b-4 inline border-gray-300'> Contact</p>
                <p className='text-gray-300 py-4' >Sunmit the form below or shoot me an email at <a className='border-b' href="mailto:sholafunmiadewara@gmail.com" target='_blank'>➡sholafunmiadewara@gmail.com</a> </p>
            </div>

            <input type="text" placeholder='Name' name='name' className='my-4 p-2 bg-[#ccd6f6]' />
            <input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6]' />
            <textarea name="message" placeholder='Message' id="" cols="30" rows="10" className='my-4 p-2 bg-[#ccd6f6]'></textarea>
            <button className='text-white border-2  hover:bg-black hover:border-gray-300 px-4 py-3 my-8 mx-auto flex items-center ' >Submit</button>
        </form>
    </div>
  )
}

export default Contact