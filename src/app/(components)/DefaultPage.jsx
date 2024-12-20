import React from 'react'
import Nav from './Nav';
import DefaultAbout from './defaultAbout';
import Footer from './Footer';
import Image from 'next/image';
import { SiMusicbrainz } from "react-icons/si";
import { GrPersonalComputer } from "react-icons/gr";
import { BsClipboard2Data } from "react-icons/bs";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

const DefaultPage = () => {
  return (
    <div className='overflow-hidden'>
      <main className="h-screen w-full bg-gradient-to-t from-[rgba(44,103,153,0.7)] to-[rgba(28,176,255,0.3)] bg-opacity-50">
      <Nav />
        {/* <Image src={banner} alt='background' width={1500} height={10} className='-z-10 absolute w-full h-screen'/> */}
      <div className='w-full flex flex-row'>
      <div className='w-1/2'>
      <h1 className="pt-48 ml-10 md:text-8xl italic text-5xl font-semibold">Everything in <span className="text-secondry font-semibold">ONE</span> Place.</h1>
      <h2 className="mt-5 ml-12 text-3xl font-medium">Freelance, Hire, Get Hired</h2>
      {/* <form className='hidden md:block'>
        <input type="text" className="pl-5 ml-12 mt-10 rounded-xl border w-1/3 h-14" placeholder="Search for a Freelancer" />
        <button type="submit" className="-ml-14 border border-secondry rounded-xl w-32 h-14 bg-secondry text-white">Search</button>
      </form> */}
      <button className=" mt-10 ml-14 border border-secondry rounded-xl w-1/6 h-14 bg-secondry text-white">Get Started</button>
      </div>
      </div>
    </main>
     <div className='bg-blue-50 bg-opacity-30 pt-10'>
      <h1 className="text-center lg:text-4xl text-2xl font-semibold pt-10 pb-5">Browse Popular Jobs</h1>
      <p className="text-center lg:text-base text-sm opacity-65 md:px-0 px-8">We have listed our top and demanding jobs according to our audience demand.</p>
      <p className="text-center lg:text-base text-sm opacity-65 md:px-0 px-8 mt-2">Popular jobs may change depending upon the time of the market.</p>
      <div className='flex flex-col md:flex-row w-5/6 m-auto justify-around items-center py-20'>

        <div className='md:w-1/5 w-2/3 my-4 h-64 rounded-xl p-3 bg-white shadow-2xl'>
        <div className='bg-orange-50 ml-2 h-12 w-12 flex justify-center items-center mt-8 rounded-lg'>
          <GrPersonalComputer className='text-orange-300 m-auto text-2xl'/>
          </div>
          <h3 className='font-semibold mt-5'>Full-Stack Developer</h3>
          <p className='text-sm opacity-60 mt-2'>On average a Full-stack Developer makes around 80k+/Year around the world.</p>
        </div>
        <div className='md:w-1/5 w-2/3 my-4 h-64 rounded-xl p-3 bg-white shadow-2xl'>
          <div className='bg-green-50 ml-2 h-12 w-12 flex justify-center items-center mt-8 rounded-lg'>
          <SiMusicbrainz className='text-green-400 m-auto text-2xl'/>
          </div>
          <h3 className='font-semibold mt-5'>AI Engineer</h3>
          <p className='text-sm opacity-60 mt-2'>On average an AI Engineer makes around $100k+/Year around the world.</p>
        </div>
        <div className='md:w-1/5 w-2/3 my-4 h-64 rounded-xl p-3 bg-white shadow-2xl'>
        <div className='bg-purple-50 ml-2 h-12 w-12 flex justify-center items-center mt-8 rounded-lg'>
          <BsClipboard2Data className='text-purple-500 m-auto text-2xl'/>
          </div>
          <h3 className='font-semibold mt-5'>Data Scientist</h3>
          <p className='text-sm opacity-60 mt-2'>On average a Data Scientist makes around $85k+/Year around the world.</p>
        </div>
        <div className='md:w-1/5 w-2/3 my-4 h-64 rounded-xl p-3 bg-white shadow-2xl'>
        <div className='bg-red-50 ml-2 h-12 w-12 flex justify-center items-center mt-8 rounded-lg'>
          <FaMoneyBillTrendUp className='text-red-400 m-auto text-2xl'/>
          </div>
          <h3 className='font-semibold mt-5'>Financial Manager</h3>
          <p className='text-sm opacity-60 mt-2'>On average a Financial Manager makes around $90k+/Year around the world.</p>
        </div>
      </div>
      <DefaultAbout />
      <Footer />
     </div>
    </div>
  )
}

export default DefaultPage
