import React from 'react'
import { findUser,addId } from '../api/Users/findUsers';

const IdForm = () => {
    async function handleSubmit(formData) {
      "use server"
      const user = await findUser(formData.get('ID'))
      return ((user)? <p>""</p> : 
      addId(formData.get('ID'))
      )
    }
  return (
    <form action={handleSubmit}>
      <div className='mt-28'>
        <label htmlFor="ID">Enter Your ID:</label>
        <input type="text" name='ID' className='border m-5'/>
        </div>
        <button type='submit' className='m-5 border bg-green-500 text-white px-10 py-3'>Confirm</button>
    </form>
  )
}

export default IdForm
