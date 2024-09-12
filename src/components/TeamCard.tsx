import React from 'react'
import { Link } from 'react-router-dom'
import { LuClock9 } from "react-icons/lu";
import { FaPen } from 'react-icons/fa';

interface TeamCardProps {
  detailLink: string;
  image: string;
  title: string;
  description: string;
}
const TeamCard = ({detailLink, image, title, description, }: TeamCardProps) => {
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
          
          <p className="text-sm my-4">{description}</p>
          
          </div>
        </div>
      </div>
      
    
  )
}

export default TeamCard