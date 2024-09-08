import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowCircleRight } from 'react-icons/fa';

const CauseCard = ({
  image = "https://cdn.pixabay.com/photo/2013/04/02/19/53/children-99507_1280.jpg",
  title = "Help children to go School",
  description = "this is the cause description. it should work on mobile. and should be less than 100 characters",
  progress = 70,
  targetAmount = 5000,
  donateLink = "/donate",
  detailLink = "/cause/id"
}) => {
  return (
    <div className="block">
      <Link to={detailLink} className="max-w-md mx-auto rounded-lg  md:p-4 p-2">
        <img
          src={image}
          alt="Cause Image"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="p-4 md:p-6">
          <h2 className="text-xl font-bold mb-2">{title}</h2>
          <p className="text-lg mb-4">{description}</p>
          <div className="flex justify-between mb-4">
            <div className="flex-1 ">
              <div className="bg-slate-400 min-h-2 mt-4 flex items-center">
                <div
                  className="min-h-2 bg-orange-500 rounded-md"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <h4 className="text-orange-500 font-semibold">
                {progress}% Donated / ${targetAmount} To Go
              </h4>
            </div>
          </div>
        </div>
      </Link>
      <Link to={donateLink} className="bg-sky-400 hover:bg-sky-500 text-white text-center py-4 w-full block rounded-b-lg">
        Donate
      </Link>
    </div>
  );
};

export default CauseCard;