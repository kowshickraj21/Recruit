"use client"
import React,{useRef} from 'react';

const CommentForm = () => {
    const comment = useRef();
  return (
    <div className='w-full'>
      <input type="text" ref={comment} />
      <button>Comment</button>
    </div>
  )
}

export default CommentForm
