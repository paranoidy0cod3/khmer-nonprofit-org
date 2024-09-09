import React from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart, FaGraduationCap, FaTree, FaUsers } from 'react-icons/fa';

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
    <div className="text-4xl text-sky-600 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2 text-slate-700">{title}</h3>
    <p className="text-slate-600">{description}</p>
  </div>
);

const HomePage = () => {
  return (
    <div className="bg-sky-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-sky-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Khmer Organization</h1>
          <p className="text-xl mb-8">Empowering Communities, Transforming Lives</p>
          <Link to="/about" className="bg-white text-sky-600 font-semibold py-2 px-6 rounded-full hover:bg-sky-100 transition duration-300">
            Learn More
          </Link>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Our Mission</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            To empower Cambodian communities through education, sustainable development, and social initiatives, 
            fostering a brighter future for all.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-sky-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<FaHandHoldingHeart />}
              title="Community Support"
              description="Providing essential resources and support to underserved communities across Cambodia."
            />
            <FeatureCard 
              icon={<FaGraduationCap />}
              title="Education Initiatives"
              description="Enhancing access to quality education and skill development programs for all ages."
            />
            <FeatureCard 
              icon={<FaTree />}
              title="Environmental Conservation"
              description="Promoting sustainable practices and protecting Cambodia's rich natural heritage."
            />
            <FeatureCard 
              icon={<FaUsers />}
              title="Social Empowerment"
              description="Fostering inclusive communities and empowering marginalized groups."
            />
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-sky-600 mb-2">10,000+</p>
              <p className="text-slate-600">Lives Impacted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-600 mb-2">50+</p>
              <p className="text-slate-600">Communities Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-600 mb-2">100+</p>
              <p className="text-slate-600">Local Partners</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-600 mb-2">20+</p>
              <p className="text-slate-600">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sky-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8">Your support can help us create lasting change in Cambodia.</p>
          <div className="space-x-4">
            <Link to="/volunteer" className="bg-white text-sky-600 font-semibold py-2 px-6 rounded-full hover:bg-sky-100 transition duration-300">
              Volunteer
            </Link>
            <Link to="/donate" className="bg-sky-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-sky-400 transition duration-300">
              Donate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;