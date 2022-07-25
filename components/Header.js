import React, { useState } from 'react'
import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/router'
function Header({thePlaceholder}) {
    const router=useRouter();
    const[searchInput,setSearchInput]=useState("");
    const[startDate, setStartDate]=useState(new Date())
    const[endDate, setEndDate]=useState(new Date())
    const[numGuests, setNumGuests]=useState(1);
    const selectionRange={
        startDate,
        endDate,
        key:'selection'
    }
    const handleSelect=(ranges)=>{
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const resetSearch=()=>{
        setSearchInput("");
    } 
    const search=()=>{
        router.push({
            pathname: '/search',
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate:endDate.toISOString(),
                numGuests:numGuests,
            }
        })
    }
   
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-5 px-5 md:px-10'>
       {/* header__logo */}
        <div onClick={()=> router.push("/")} className='relative flex items-center h-10 cursor-pointer my-auto'>
            <Image 
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left'
                alt='logo'
            />
        </div>
        {/* header__search */}
        <div className='flex items-center md:border-2 rounded-full py-3'> 
            <input
             placeholder={thePlaceholder || "start exploring"}
             value={searchInput}
             onChange={e => setSearchInput(e.target.value)}
             className='text-sm placeholder-gray-400 flex-grow outline-none  pl-5 bg-transparent' type="text"/>
            <SearchIcon className='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer mx-2'/>
        </div>
        {/* header__links */}
        <div className='flex space-x-3 justify-end text-gray-500 items-center'>
            <p className='hidden md:inline cursor-pointer '>Become a host</p>
            <GlobeAltIcon className='h-6'/>
            <div className='flex items-center space-x-2 border-2 p-2 rounded-full cursor-pointer'>
                <MenuIcon className='h-6'/>
                <UserCircleIcon className='h-6'/>
            </div>
        </div>
        {searchInput&&<div className='flex flex-col col-span-3 mx-auto'>
            <DateRangePicker
                ranges={[selectionRange]}
                minDate={new Date()}
                rangeColors={["#FD5B61"]}
                onChange={handleSelect}
            />
            <div className='flex items-center border-b mb-4'>
                <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
                <UsersIcon className='h-5'/>
                <input min={1} value={numGuests} onChange={e => setNumGuests(e.target.value)} type="number" className="w-12 pl-2 text-lg outline-none text-orange-500"/>
            </div>
            <div className='flex'>
                <button className='flex-grow text-gray-500' onClick={resetSearch}>Cancel</button>
                <button onClick={search} className='flex-grow text-red-400'>Search</button>
            </div>
        </div>}
    </header>
  )
}

export default Header