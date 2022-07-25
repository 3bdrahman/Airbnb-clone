import { useRouter } from 'next/router'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { parseISO, format } from 'date-fns';

function search({searchRes}) {
    const router=useRouter();
    const {location, startDate, endDate, numGuests}=router.query;
   
    // function dateIsValid(date) {
    //     return !Number.isNaN(new Date(date).getTime());
    //   }
    
  
    //   const strt = new Date(parseISO(startDate))
    //   console.log(strt)
    //  const stringStartDate = format(strt,"yyyy-MM-dd");
    const stringStartDate=startDate? format(new Date(startDate), "dd MMMM yy"): new Date()
    const stringEndDate=startDate? format(new Date(endDate), "dd MMMM yy"): new Date()
     const range = `${stringStartDate} - ${stringEndDate}`
    console.log(stringEndDate)
  return (
    <div>
        <Header thePlaceholder={`${location} | ${range} | ${numGuests} guests`}/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                    <p className='text-xs h-1'>300+ stays - {range}  for {numGuests} Guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>stays in {location}</h1>
                    <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                        <p className='search-Button'>Cancellation Flexibilty</p>
                        <p className='search-Button'>Type of Place</p>
                        <p className='search-Button'>Price</p>
                        <p className='search-Button'>Rooms and Beds</p>
                        <p className='search-Button'>Advanced Filters</p>
                    
                    </div>
                   
                </section>
            </main>
        <Footer/>
    </div>
  )
}

export default search

export async function getServerProps(){
    const searchRes = await fetch("https://jsonkeeper.com/b/5NPS")
    .then(result => result.json())

    return {
      props:{
        searchRes,
      }
    }
}