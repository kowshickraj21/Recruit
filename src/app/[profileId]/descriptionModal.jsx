import React,{useRef} from 'react'
import { MdClose } from 'react-icons/md'
import setDescription from './editDescription'

const DescriptionModal = ({close,description,profile}) => {
  const text = useRef();
  const handleChange = () => {
    setDescription(text.current.value,profile);
    close(false);
  }
  return (
    <div className='absolute w-full h-svh bg-black bg-opacity-50 top-0 z-20 flex justify-center items-center'>
      <div className='bg-gray-100 min-h-1/2 w-2/3 rounded-md flex flex-col'>
      <div className='flex justify-between m-5'>
        <h2 className='text-xl font-semibold m-3'>Edit Description:</h2>
        <MdClose onClick={() => close(false)} className='hover:cursor-pointer text-xl'/>
      </div>
      <textarea name="description" id="description" rows={8} className='p-5 mx-10' placeholder='Your new description here' ref={text} defaultValue={description}></textarea>
      <button className='m-auto w-1/2 bg-secondry text-white h-10 my-8' onClick={() => handleChange()}>Add Changes</button>
      </div>
    </div>
  )
}

export default DescriptionModal
