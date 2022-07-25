import React from 'react'
import banner from '../public/imgs/banner.jpg'
function Banner() {
  return (
    <div className='flex items-center justify-center h-[80vh] mb-12 bg-fixed bg-center bg-cover custom-img'>
       
        <div className='absolute top-1/2 w-full text-center space-y-7'>
            <p className=' font-bold hidden md:block text-white w-25 text-4xl mx-auto lg:text-6xl'>Not sure where to go? Perfect!</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Explore</button>
        </div>
    </div>
    
  )
}

export default Banner