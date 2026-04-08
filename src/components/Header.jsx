import React from 'react'
import ai from "../assets/AI.mp4"

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4 md:px-8 py-2'>
        <div>
            <h1 className='text-2xl font-semibold text-[#D9D9D9]'>OpenPrompt</h1>
        </div>
        <div className=''>
            <div className='h-15 w-15 rounded-full overflow-hidden'>
                <video className='object-cover h-full w-full scale-212' autoPlay loop muted playsInline>
                    <source src={ai} type="video/mp4" />
                </video>
            </div>
        </div>
    </div>
  )
}

export default Header