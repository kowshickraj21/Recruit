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
      <div className='w-full m-auto h-72 bg-black bg-opacity-90 text-white text-center'>
        <h3 className='pt-10 pb-3 text-3xl font-semibold'>Find Your Next Great Job Opportunity</h3>
        <p className='text-xs opacity-55'>Subsribe to our NewsLetter to not miss any updates on new Job listings.</p>
        <div className='mt-10 flex items-center justify-center'>
            <input type="email" placeholder='Enter Your Email Address' className='h-12 w-96 rounded-sm pl-3 text-sm text-black'/>
            <button className='w-36 h-12 rounded-sm bg-secondry text-white text-sm'>Subscribe</button>
        </div>
      </div>
      <div className='w-full h-auto bg-blue-50 bg-opacity-10'>
        <div className='flex w-full justify-center gap-20 pt-10 h-svh m-auto items-center'>
            <div className='relative w-1/3 h-3/4'>
              <Image src={freelancer1} alt="freelancer" fill className='object-cover'/>
            </div>
            <div className='w-1/3 text-4xl font-bold pr-4'>
                Worldwide Best Platform For Job Seekers 
                <div className='flex flex-wrap mt-14 gap-y-10'>
                  <div className='w-1/2 h-auto'>
                    <div className='bg-orange-100 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                      <IoBarChart  className='text-orange-300'/>
                    </div>
                    <h3 className='text-sm font-semibold mb-1'>Career Booster</h3>
                    <p className='text-xs font-medium pr-2'>Boost your career and your Job Opportunity by joining with us.</p>
                  </div>
                  <div className='w-1/2 h-auto'>
                  <div className='bg-blue-200 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                  <IoIosPerson  className='text-blue-400'/>
                  </div>
                    <h3 className='text-sm font-semibold mb-1'>Profile Highlighters</h3>
                    <p className='text-xs font-medium'>Create and Highlight your Profile to stand out from others.</p>
                  </div>
                  <div className='w-1/2 h-auto'>
                  <div className='bg-purple-200 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                    <FaRankingStar className='text-purple-400' />
                  </div>
                    <h3 className='text-sm font-semibold mb-1'>Easy Ranking</h3>
                    <p className='text-xs font-medium'>Rank your profile among others by reviews and work experience.</p>
                  </div>
                  <div className='w-1/2 h-auto'>
                  <div className='bg-green-100 w-16 h-16 rounded-md mb-5 flex justify-center items-center'>
                    <GiAchievement className='text-green-400' />
                  </div>
                    <h3 className='text-sm font-semibold mb-1'>Add Achievements</h3>
                    <p className='text-xs font-medium'>You can add your Certifications and Achievements to boost your Profile.</p>
                  </div>
                </div>
            </div>
        </div>
        <div className='flex w-full justify-center gap-20 h-svh m-auto pt-20'>
        <div className='w-1/3'>
                <h3 className='text-4xl font-bold leading-relaxed'>Build Your Recrute Profile,</h3>
                <h3 className='text-4xl font-bold leading-relaxed'>Get Hired</h3> 
                <p className='pt-6'> Sign up on Recrute.in today and create your profile to get noticed by top recruiters! Showcase your skills to attract potential employers. By creating gigs based on your unique skill set, you can highlight your strengths and connect with clients looking for your specific talents.</p>
                <p className='pt-6'>Whether you&apos;re a seasoned professional or just starting, Recrute.in is the platform for everyone. Don&apos;t wait, Join now and start building your professional network!</p>
                <button className='bg-secondry h-12 px-5 text-white rounded-md mt-10'>Create a Profile</button>
            </div>
            <div className='relative w-1/3 h-3/4'>
              <Image src={freelancer2} alt="freelancer" fill className='object-cover'/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultAbout
