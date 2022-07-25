import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb | clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Header/>
    <Banner/>
    <main className='max-w-7xl bg-white mx-auto px-8 sm:px-16 shadow-md my-8 rounded-lg'>
    <section>
        <h2 className='text-3xl font-semibold py-8'> 
          Explore The World
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        {exploreData?.map(item =>(
          <SmallCard key={item.location} img={item.img} location={item.location} country={item.country}/>
        ))}
        </div>
        {/* server side rendering */}
       
      </section>
      <section>
      <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
      <div className='flex space-x-4 overflow-scroll scrollbar-hide
      p-3 ml-3'>
      
        {cardsData?.map(
          item =>(
            <MediumCard key={item.title} img={item.img} title={item.title}/>
          )
        )}
      </div>
       
      </section>
      <LargeCard img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
      />
    </main>
        <Footer/>

    </div>
  )
}
// static sever side rendering
export async function getStaticProps(){
     const exploreData=await fetch(' https://jsonkeeper.com/b/V7L9').
     then(
      (res)=>res.json()
     );
     const cardsData = await fetch('https://jsonkeeper.com/b/PEUF').
     then(
      (res)=> res.json()
     );
     return{
      props:{
        exploreData,
        cardsData
      }
     }
}