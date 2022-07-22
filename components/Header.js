import React from 'react'
import Image from 'next/image'
import {SearchIcon, GlobeAltIcon} from '@heroicons/react/solid'
function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
       {/* header__logo */}
        <div className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
            />
        </div>
        {/* header__search */}
        <div className='flex items-center md:border-2 rounded-full py-3'> 
            <input className='text-sm placeholder-gray-400 flex-grow outline-none  pl-5 bg-transparent' type="text" placeholder="Search 10,000+ destinations"/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-auto mx-2'/>
        </div>
        {/* header__links */}
        <div className='flex space-x-3'>
            <p>Become a host</p>
            <GlobeAltIcon className='h-6'/>
        </div>
    </header>
  )
}

export default Header