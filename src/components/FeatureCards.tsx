// import React from 'react';
import { FaComment, FaHeart, FaInfoCircle, FaThumbsUp, FaTrophy, FaTruck } from 'react-icons/fa';

const FeatureCards = () => {
  const features = [
    {
      icon: <FaHeart  className='text-sky-500 mr-4' />,
      title: 'Pharetra Purus Quam',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      icon: <FaTruck  className='text-sky-500 mr-4'/>,
      title: 'Adipiscing Fermentum',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      icon: <FaThumbsUp className='text-sky-500 mr-4' />,
      title: 'Ornare Sollicitudin',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      icon: <FaInfoCircle className='text-sky-500 mr-4' />,
      title: 'Ridiculus Ullamcorper',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      icon: <FaTrophy className='text-sky-500 mr-4' />,
      title: 'Ultricies Ullamcorper',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere.',
    },
    {
      icon: <FaComment className='text-sky-500 mr-4' />,
      title: 'Lorem Condimentum',
      description: 'Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere.',
    },
  ];

  return (
    <div className='bg-slate-200 mt-8 py-8'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-200 md:max-w-7xl mx-auto ">
      {features.map((feature, index) => (
        <div key={index} className="bg-transparent p-6">
          <div className="flex items-center mb-4">
            {/* <i className={`fa ${feature.icon} text-blue-500 text-2xl mr-2`}></i> */}
            {feature.icon} 
            <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
          </div>
          <p className="text-gray-500 text-sm">{feature.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default FeatureCards;