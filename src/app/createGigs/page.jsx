import React from 'react'

const page = () => {
  return (
    <div>
      <form action="">
        <input type="text" name="title" className='border' id="title" />
        <input type="text" name="description" className='border' id="description" />
        <input type="number" name="hourly" className='border' id="hourly" />
        <input type="number" name="projectly" className='border' id="projectly" />
        <button type="submit">Create Gig</button>
      </form>
    </div>  
  )
}

export default page
