import Image from 'next/image'
import React from 'react'
import banner from '../public/imgs/banner.jpg'
function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:[700px]'>
        <Image src={banner}
        layout='fill'
        objectFit='cover'
        alt='banner'
        />  
        <div className='absolute top-1/2 w-full text-center space-y-7'>
            <p className='shadow-lg font-bold hidden md:block text-white w-25 text-4xl mx-auto lg:text-6xl'>Not sure where to go? Perfect!</p>
            <button className='text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>Explore</button>
        </div>
    </div>
    
  )
}

export default Banner