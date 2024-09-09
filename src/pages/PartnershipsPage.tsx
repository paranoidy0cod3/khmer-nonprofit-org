import React from 'react';
import { FaHandshake, FaGlobe, FaUsers } from 'react-icons/fa';

const PartnerCard = ({ name, description, imageUrl }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
    <img src={imageUrl} alt={name} className="w-32 h-32 object-cover rounded-full mb-4" />
    <h3 className="text-xl font-semibold mb-2">{name}</h3>
    <p className="text-gray-600 text-center">{description}</p>
  </div>
);

const PartnershipsPage = () => {
  return (
    <div className="bg-sky-100 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-slate-800 mb-8 text-center">Our Partnerships</h1>

        {/* Localization Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaGlobe className="text-4xl text-sky-600 mr-4" />
            <h2 className="text-3xl font-semibold text-slate-700">Localization</h2>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            Our localization efforts ensure that our services and impact reach every corner of Cambodia, 
            respecting local cultures and addressing specific community needs.
          </p>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-4 text-slate-700">Our Localization Approach:</h3>
            <ul className="list-disc pl-6 text-slate-600">
              <li>Collaborating with local leaders and community representatives</li>
              <li>Adapting our programs to suit regional contexts and languages</li>
              <li>Empowering local staff and volunteers to lead initiatives</li>
              <li>Conducting regular community feedback sessions to improve our services</li>
            </ul>
          </div>
        </section>

        {/* Local Partners Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaUsers className="text-4xl text-sky-600 mr-4" />
            <h2 className="text-3xl font-semibold text-slate-700">Local Partners</h2>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            We're proud to work alongside these dedicated local organizations to create lasting change in our communities.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PartnerCard 
              name="Cambodian Youth Network"
              description="Empowering young leaders to drive positive change in their communities."
              imageUrl="https://picsum.photos/200"
            />
            <PartnerCard 
              name="Siem Reap Women's Empowerment Group"
              description="Providing skills training and support for women entrepreneurs."
              imageUrl="https://picsum.photos/201"
            />
            <PartnerCard 
              name="Battambang Environmental Coalition"
              description="Working to preserve natural resources and promote sustainable practices."
              imageUrl="https://picsum.photos/202"
            />
          </div>
        </section>

        {/* International Partners Section */}
        <section className="mb-16">
          <div className="flex items-center mb-6">
            <FaHandshake className="text-4xl text-sky-600 mr-4" />
            <h2 className="text-3xl font-semibold text-slate-700">International Partners</h2>
          </div>
          <p className="text-lg text-slate-600 mb-6">
            Our global partnerships allow us to bring international expertise and resources to support our local initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PartnerCard 
              name="Global Education Fund"
              description="Supporting our educational programs with resources and best practices."
              imageUrl="https://picsum.photos/203"
            />
            <PartnerCard 
              name="International Climate Action Network"
              description="Collaborating on climate resilience projects in vulnerable communities."
              imageUrl="https://picsum.photos/204"
            />
            <PartnerCard 
              name="Worldwide Health Initiative"
              description="Providing medical supplies and training for our healthcare programs."
              imageUrl="https://picsum.photos/205"
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-sky-600 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Partner</h2>
          <p className="text-lg mb-6">Join us in our mission to create positive change in Cambodia. We're always looking for new partners who share our vision.</p>
          <button className="bg-white text-sky-600 font-semibold py-2 px-6 rounded-full hover:bg-sky-100 transition duration-300">
            Contact Us
          </button>
        </section>
      </div>
    </div>
  );
};

export default PartnershipsPage;