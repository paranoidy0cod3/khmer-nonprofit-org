// import React from 'react';
import { FaGraduationCap, FaHandHoldingHeart, FaTree, FaUsers, FaChevronRight } from 'react-icons/fa';

const OurWorkPage = () => {
  const projects = [
    {
      title: "Rural Education Initiative",
      category: "Education",
      description: "Improving access to quality education in remote areas of Cambodia.",
      icon: <FaGraduationCap className="text-4xl text-sky-500 mb-4" />,
      status: "Ongoing",
    },
    {
      title: "Community Health Program",
      category: "Healthcare",
      description: "Providing essential healthcare services and education to underserved communities.",
      icon: <FaHandHoldingHeart className="text-4xl text-sky-500 mb-4" />,
      status: "Ongoing",
    },
    {
      title: "Sustainable Agriculture Project",
      category: "Environment",
      description: "Promoting sustainable farming practices to improve food security and environmental conservation.",
      icon: <FaTree className="text-4xl text-sky-500 mb-4" />,
      status: "Completed",
    },
    {
      title: "Women's Empowerment Program",
      category: "Social Development",
      description: "Empowering women through skills training and microfinance initiatives.",
      icon: <FaUsers className="text-4xl text-sky-500 mb-4" />,
      status: "Ongoing",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-sky-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Work</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover the projects and initiatives that are making a difference in Cambodian communities.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Focus Areas</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Education', 'Healthcare', 'Environment', 'Social Development'].map((category, index) => (
              <div key={index} className="bg-sky-100 p-4 rounded-lg text-center hover:bg-sky-200 transition duration-300">
                <p className="font-semibold">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                {project.icon}
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{project.category}</p>
                <p className="mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <span className={`px-2 py-1 rounded-full text-sm ${project.status === 'Ongoing' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>
                    {project.status}
                  </span>
                  <a href={`/projects/${index}`} className="text-sky-500 hover:text-sky-700 flex items-center">
                    Learn More <FaChevronRight className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-sky-500">50+</p>
              <p className="text-xl">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-500">100,000+</p>
              <p className="text-xl">Lives Impacted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-500">25</p>
              <p className="text-xl">Provinces Reached</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-sky-500">15</p>
              <p className="text-xl">Years of Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-sky-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">What Our Beneficiaries Say</h2>
          <blockquote className="text-xl italic max-w-3xl mx-auto">
            "The Rural Education Initiative has transformed our village. Our children now have access to quality education and resources we never thought possible. Thank you, Khmer Organization!"
          </blockquote>
          <p className="mt-4 font-semibold">- Sopheap, Village Elder in Kampong Cham</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sky-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Work</h2>
          <p className="text-xl mb-8">Your contribution can help us expand our impact and reach more communities in need</p>
          <div className="space-x-4">
            <a href="/donate" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition duration-300">
              Donate Now
            </a>
            <a href="/volunteer" className="bg-white text-sky-500 hover:bg-gray-100 font-bold py-2 px-4 rounded-full transition duration-300">
              Volunteer With Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurWorkPage;