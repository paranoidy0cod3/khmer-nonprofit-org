import React from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendar, FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';

// This would typically come from an API or props
const getDummyData = (id) => ({
  id,
  title: "Empowering Rural Youth Through Education",
  type: "news", // or "event"
  date: "2024-09-15",
  author: "Sophea Chhum",
  location: "Siem Reap Province, Cambodia",
  time: "10:00 AM - 2:00 PM",
  image: "https://picsum.photos/800/400",
  content: `
    <p>In a groundbreaking initiative, the Khmer Organization has launched a new program aimed at empowering rural youth through education in Siem Reap Province. This project, set to benefit over 500 young individuals, focuses on providing access to quality education and vocational training.</p>
    
    <p>The program includes:</p>
    <ul>
      <li>Establishment of mobile libraries</li>
      <li>Introduction of digital learning tools</li>
      <li>Workshops on sustainable agriculture practices</li>
      <li>Mentorship programs connecting urban professionals with rural youth</li>
    </ul>
    
    <p>"Education is the cornerstone of development," says Sophea Chhum, project lead. "By investing in our rural youth, we're investing in the future of Cambodia."</p>
    
    <p>Local community leaders have welcomed the initiative, seeing it as a crucial step towards reducing the urban-rural divide and creating opportunities for young people in their villages.</p>
    
    <p>The Khmer Organization plans to expand this program to other provinces in the coming years, with the goal of reaching 10,000 rural youths by 2030.</p>
  `
});

const SingleNewsEventPage = () => {
  const { id } = useParams();
  const data = getDummyData(id);

  return (
    <div className="bg-sky-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Header Image */}
          <img src={data.image} alt={data.title} className="w-full h-64 object-cover" />
          
          {/* Content */}
          <div className="p-6">
            <h1 className="text-3xl font-bold text-slate-800 mb-4">{data.title}</h1>
            
            {/* Meta Information */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center">
                <FaCalendar className="mr-2 text-sky-600" />
                {new Date(data.date).toLocaleDateString()}
              </div>
              {data.type === "event" && (
                <>
                  <div className="flex items-center">
                    <FaClock className="mr-2 text-sky-600" />
                    {data.time}
                  </div>
                  <div className="flex items-center">
                    <FaMapMarkerAlt className="mr-2 text-sky-600" />
                    {data.location}
                  </div>
                </>
              )}
              <div className="flex items-center">
                <FaUser className="mr-2 text-sky-600" />
                {data.author}
              </div>
            </div>
            
            {/* Main Content */}
            <div 
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
          </div>
        </div>

        {/* Related Items or Call to Action */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-4">
            {data.type === "news" ? "Related News" : "Upcoming Events"}
          </h2>
          {/* Add related news items or upcoming events here */}
          <p className="text-slate-600">No related items at this time.</p>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsEventPage;