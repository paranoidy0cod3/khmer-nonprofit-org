import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const TopBanner = () => {
  return (
    <div className='w-full h-60 mt-[-33px] ' style={{backgroundImage: "url('https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')"}}  >
        <div className='w-full h-full bg-black/50 flex flex-col justify-center items-center'>
            <h1 className='text-3xl text-center text-white font-semibold mt-6 underline'>About Us</h1>
            <p className='text-center text-white mt-4 px-4'> <FaQuoteLeft className='inline-block mx-2 mt-[-10px]' /> We put women and girls in the center because we know that we cannot overcome poverty 
            until all people have equal rights. <FaQuoteRight className='inline-block mx-2 mt-[-10px]' />

</p>
        </div>
        
    </div>
  )
}

export default TopBanner