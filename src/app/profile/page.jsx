import React from 'react';
import Image from 'next/image';
const page = () => {
  return (
    <div>
        <div>
            <div className='picture'>
              <Image src={'https://lh3.googleusercontent.com/a/ACg8ocKtjLeLnPxctEQHcn1SLOj-g5Onewy1zKdmHWv1WWAi0jo=s96-c'} width={500} height={500} alt="Profile" className='rounded-full' />
            </div>
            <div>
              <h2>Name:</h2>
              <p>Email:</p>
            </div>
        </div>
    </div>
  )
}

export default page
