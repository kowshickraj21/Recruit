import React from 'react'
import freelancer1 from '@/assets/freelancer1.jpg';
import freelancer2 from '@/assets/freelancer2.jpg';
import Image from 'next/image';
import { IoBarChart } from "react-icons/io5";
import { IoIosPerson } from "react-icons/io";
import { FaRankingStar } from "react-icons/fa6";
import { GiAchievement } from "react-icons/gi";

const DefaultAbout = () => {
  return (
    <div>
      <div className='w-full m-auto h-72 bg-slate-900 bg-opacity-85 text-white text-center'>
        <h3 className='pt-10 pb-3 lg:text-3xl text-2xl font-semibold'>Find Your Next Great Job Opportunity</h3>
        <p className='text-xs opacity-55'>Subsribe to our NewsLetter to not miss any updates on new Job listings.</p>
        <div className='mt-10 flex items-center justify-center w-11/12 md:w-auto m-auto'>
            <input type="email" placeholder='Enter Your Email Address' className='h-12 w-96 rounded-s-xl pl-3 md:text-sm text-xs text-black'/>
            <button className='w-36 -ml-3 h-12 bg-secondry text-white md:text-sm text-xs rounded-2xl'>Subscribe</button>
        </div>
      </div>
      <div className='w-full h-auto bg-blue-50 bg-opacity-10'>
        <div className='flex flex-col md:flex-row w-full justify-center gap-20 pt-10 h-svh m-auto items-center'>
            <div className='relative md:w-1/3 w-2/3 h-3/4'>
              <Image src={freelancer1} alt="freelancer" fill className='object-cover'/>
            </div>
            <div className='md:w-1/3 w-full ml-5 md:text-4xl text-3xl font-bold pr-4'>
                <p className='text-2xl md:text-4xl text-center md:text-left px-5 md:px-0'>Worldwide Best Platform For Job Seekers</p>
                <div className='flex flex-wrap mt-14 gap-y-10 px-2 md:px-0'>
                  <div className='w-1/2 h-auto px-1 md:px-0'>
                    <div className='bg-orange-100 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                      <IoBarChart  className='text-orange-300'/>
                    </div>
                    <h3 className='text-sm font-semibold mb-1'>Career Booster</h3>
                    <p className='text-xs font-medium pr-2'>Boost your career and your Job Opportunity by joining with us.</p>
                  </div>
                  <div className='w-1/2 h-auto px-1 md:px-0'>
                  <div className='bg-blue-200 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                  <IoIosPerson  className='text-blue-400'/>
                  </div>
                    <h3 className='text-sm font-semibold mb-1'>Profile Highlighters</h3>
                    <p className='text-xs font-medium'>Create and Highlight your Profile to stand out from others.</p>
                  </div>
                  <div className='w-1/2 h-auto px-1 md:px-0'>
                  <div className='bg-purple-200 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                    <FaRankingStar className='text-purple-400' />
                  </div>
                    <h3 className='text-sm font-semibold mb-1'>Easy Ranking</h3>
                    <p className='text-xs font-medium'>Rank your profile among others by reviews and work experience.</p>
                  </div>
                  <div className='w-1/2 h-auto px-1 md:px-0'>
                  <div className='bg-green-100 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                    <GiAchievement className='text-green-400' />
                  </div>
                    <h3 className='text-sm font-semibold mb-1'>Add Achievements</h3>
                    <p className='text-xs font-medium'>You can add your Certifications and Achievements to boost your Profile.</p>
                  </div>
                </div>
            </div>
        </div>
        <div className='flex md:flex-row flex-col w-full justify-center gap-20 h-svh m-auto pt-20'>
        <div className='md:w-1/3 w-full px-5 md:px-0'>
                <h3 className='md:text-4xl text-3xl font-bold leading-relaxed'>Build Your Recruit Profile,</h3>
                <h3 className='md:text-4xl text-3xl font-bold leading-relaxed'>Get Hired</h3> 
                <p className='pt-6 hidden md:block'> Sign up on Recruit today and create your profile to get noticed by top recruiters! Showcase your skills to attract potential employers. By creating gigs based on your unique skill set, you can highlight your strengths and connect with clients looking for your specific talents.</p>
                <p className='pt-6 text-xs md:text-base'>Whether you&apos;re a seasoned professional or just starting, Recruit is the platform for everyone. Don&apos;t wait, Join now and start building your professional network!</p>
                <button className='bg-secondry h-12 px-5 text-white rounded-md mt-10'>Create a Profile</button>
            </div>
            <div className='relative md:w-1/3 w-full h-3/4'>
              <Image src={freelancer2} alt="freelancer" fill className='object-cover'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultAbout
