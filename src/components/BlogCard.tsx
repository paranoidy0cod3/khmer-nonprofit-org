import React from 'react'
import { Link } from 'react-router-dom'
import { LuClock9 } from "react-icons/lu";
import { FaPen } from 'react-icons/fa';

interface BlogCardProps {
  detailLink: string;
  image: string;
  title: string;
  description: string;
  date?: string;
  author?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ detailLink, image, title, description, date, author }) => {
  return (
    <div className="max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
      <img
        src={image}
        alt={`${title} thumbnail`}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className='flex items-center text-sm text-gray-600 mb-4'>
          <LuClock9 className='text-orange-500 mr-1' />
          <span className="mr-4">{date}</span>
          <FaPen className='text-orange-500 mr-1' />
          <span>{author}</span>
        </div>
        <p className="text-gray-700 text-sm mb-4">{description}</p>
        <Link 
          to={detailLink} 
          className="inline-block bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition duration-300"
        >
          Read More
        </Link>
      </div>
    </div>
  )
}

export default BlogCard