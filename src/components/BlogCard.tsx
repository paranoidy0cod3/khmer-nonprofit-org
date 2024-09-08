import React from 'react'
import { Link } from 'react-router-dom'
import { LuClock9 } from "react-icons/lu";
import { FaPen } from 'react-icons/fa';

const BlogCard = ({detailLink, image, title, description, donateLink}) => {
  return (
    <div className="block">
      <div className="max-w-md mx-auto rounded-lg  md:p-4 p-2">
        <img
          src={image}
          alt="Cause Image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 md:p-6">
          <h2 className="text-xl font-bold ">{title}</h2>
          <div className='flex gap-2 items-center justify-center'>
            <LuClock9 className='text-orange-500 text-sm inline-block mt-[-15px]' />
            <p className=" mb-4 text-sm">03 Dec, 2024</p>
            <FaPen className='text-orange-500 text-sm inline-block mt-[-15px]' />
            <p className="text-sm mb-4">Admin</p>
          </div>
          <p className="text-sm my-4">{description}</p>
          
          </div>
        </div>
      </div>
      
    
  )
}

export default BlogCard