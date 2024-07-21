import React from 'react'
import Link from 'next/link';
import { categories } from '@/assets/categories'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TagScroller = () => {
  return (
    <div className='bg-gray-200 flex items-center justify-center gap-5 h-12'>
        <IoIosArrowBack />
    <div className='scroller flex overflow-x-auto w-11/12 bg-gray-200 items-center gap-5'>
      {categories.map( ( category,index ) => {
        
        return (
            <Link href={`/?s=${category}`} className='w-auto flex-shrink-0' key={index}>{category}</Link>
        )

      })}
    </div>
    <IoIosArrowForward />
    </div>
  )
}

export default TagScroller
