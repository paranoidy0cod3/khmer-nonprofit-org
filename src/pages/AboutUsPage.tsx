
import { FaUsers, FaLightbulb, FaHandHoldingHeart } from 'react-icons/fa';

const AboutUsPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-sky-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Empowering Cambodian communities through compassion, dedication, and sustainable development.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-sky-100 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaLightbulb className="text-sky-500 mr-2" /> Our Mission
              </h2>
              <p className="text-lg">
                To empower Cambodian communities by providing resources, education, and support that enable sustainable development and improve quality of life.
              </p>
            </div>
            <div className="bg-sky-100 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 flex items-center">
                <FaUsers className="text-sky-500 mr-2" /> Our Vision
              </h2>
              <p className="text-lg">
                A Cambodia where every individual has the opportunity to thrive, communities are resilient, and cultural heritage is preserved and celebrated.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaHandHoldingHeart className="text-5xl text-sky-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Compassion</h3>
              <p>We act with empathy and kindness, putting the needs of the communities we serve first.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaUsers className="text-5xl text-sky-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Collaboration</h3>
              <p>We believe in the power of partnership and work closely with local communities and organizations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <FaLightbulb className="text-5xl text-sky-500 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2">Innovation</h3>
              <p>We seek creative solutions and adapt our approaches to meet evolving challenges.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Founded in 2009, Khmer Organization began as a small group of dedicated volunteers committed to improving education in rural Cambodia. Over the years, our mission has expanded to address broader community needs.
            </p>
            <p className="text-lg mb-4">
              Today, we work across multiple provinces, partnering with local leaders and organizations to implement sustainable development projects. Our holistic approach focuses on education, healthcare, economic empowerment, and cultural preservation.
            </p>
            <p className="text-lg">
              With the support of our donors, partners, and volunteers, we continue to strive towards our vision of a thriving Cambodia where every individual has the opportunity to reach their full potential.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-sky-400 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8">Be a part of our story and help us create lasting change in Cambodia</p>
          <div className="space-x-4 flex flex-wrap md:flex-nowrap items-center justify-center gap-4 text-center">
            <a href="/volunteer" className="bg-white text-sky-500 hover:bg-gray-100 font-bold py-2 px-4 rounded-full transition duration-300">
              Volunteer With Us
            </a>
            <a href="/donate" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded-full transition duration-300">
              Support Our Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;