import React, { useState } from 'react';
import { FaCalendarAlt, FaNewspaper, FaChevronRight } from 'react-icons/fa';

const NewsEventsPage = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems = [
    {
      title: "New Education Center Opens in Siem Reap",
      date: "June 15, 2024",
      summary: "We're excited to announce the opening of our new education center, providing resources to over 500 students.",
      image: "https://picsum.photos/seed/edu1/400/300",
    },
    {
      title: "Partnership Announcement with Local Health Ministry",
      date: "May 28, 2024",
      summary: "Khmer Organization has partnered with the Health Ministry to expand our community health initiatives.",
      image: "https://picsum.photos/seed/health1/400/300",
    },
    {
      title: "Annual Report: 2023 Impact and Achievements",
      date: "April 10, 2024",
      summary: "Our 2023 Annual Report is now available, highlighting our key achievements and impact over the past year.",
      image: "https://picsum.photos/seed/report1/400/300",
    },
  ];

  const events = [
    {
      title: "Community Health Fair",
      date: "July 20, 2024",
      location: "Phnom Penh City Center",
      description: "Join us for a day of free health screenings, workshops, and family activities.",
    },
    {
      title: "Volunteer Orientation Webinar",
      date: "August 5, 2024",
      location: "Online Event",
      description: "Learn about volunteer opportunities and how you can make a difference with Khmer Organization.",
    },
    {
      title: "Annual Fundraising Gala",
      date: "September 15, 2024",
      location: "Sofitel Phnom Penh Phokeethra",
      description: "Our biggest fundraising event of the year, featuring dinner, entertainment, and a silent auction.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-sky-400 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">News & Events</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Stay updated with our latest news, press releases, and upcoming events.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={() => setActiveTab('news')}
              className={`py-2 px-4 font-semibold rounded-full ${
                activeTab === 'news' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-2 px-4 font-semibold rounded-full ${
                activeTab === 'events' ? 'bg-sky-500 text-white' : 'bg-gray-200 text-gray-700'
              }`}
            >
              Events
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      {activeTab === 'news' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Latest News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{item.date}</p>
                    <p className="mb-4">{item.summary}</p>
                    <a href={`/news/${index}`} className="text-sky-500 hover:text-sky-700 flex items-center">
                      Read More <FaChevronRight className="ml-1" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Section */}
      {activeTab === 'events' && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
            <div className="space-y-8">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-2">
                        <FaCalendarAlt className="inline-block mr-2" />
                        {event.date}
                      </p>
                      <p className="text-gray-600 mb-4">{event.location}</p>
                    </div>
                    <a
                      href={`/events/${index}`}
                      className="bg-sky-500 text-white py-2 px-4 rounded-full hover:bg-sky-600 transition duration-300 inline-block"
                    >
                      Learn More
                    </a>
                  </div>
                  <p>{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter Signup */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Informed</h2>
          <p className="mb-8">Subscribe to our newsletter for the latest updates and news.</p>
          <form className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button
                type="submit"
                className="bg-sky-500 text-white px-6 py-2 rounded-r-full hover:bg-sky-600 transition duration-300"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default NewsEventsPage;