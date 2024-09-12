import React, { useState } from 'react'
import { Heart, Users, DollarSign, ArrowRight, Globe, Droplet, Sun, ChevronDown, Calendar, MapPin } from 'lucide-react'

interface Cause {
  id: string
  title: string
  description: string
  longDescription: string
  image: string
  goal: number
  raised: number
  supporters: number
  category: string
  location: string
  startDate: string
  endDate: string
  updates: Update[]
}

interface Update {
  id: string
  date: string
  title: string
  content: string
}

interface Milestone {
  id: string
  title: string
  description: string
  achieved: boolean
}

const cause: Cause = {
  id: '1',
  title: 'Clean Water for All',
  description: 'Provide clean, safe drinking water to communities in need around the world.',
  longDescription: `Access to clean water is a fundamental human right, yet millions around the world struggle daily to find safe drinking water. Our Clean Water Initiative aims to address this critical issue by building sustainable water systems in underserved communities, providing education on water sanitation and hygiene, empowering local communities to maintain their water sources, and advocating for global water policies and increased funding.

  This project will directly impact over 100,000 people in rural areas, dramatically improving their health, education, and economic opportunities. By providing clean water, we can reduce waterborne diseases, allow children (especially girls) to attend school instead of fetching water, and give communities more time to focus on economic activities.
  
  Your support will help us:
  1. Construct wells and water purification systems
  2. Train local technicians in system maintenance
  3. Educate communities on proper sanitation and hygiene practices
  4. Advocate for policy changes to ensure long-term access to clean water`,
  image: 'https://picsum.photos/seed/edu1/1200/600',
  goal: 500000,
  raised: 350000,
  supporters: 2500,
  category: 'Health',
  location: 'Global',
  startDate: '2023-01-01',
  endDate: '2023-12-31',
  updates: [
    {
      id: '1',
      date: '2023-06-15',
      title: 'Milestone Reached: 50 Wells Constructed',
      content: 'We\'re excited to announce that we\'ve completed the construction of our 50th well! This milestone means that approximately 25,000 people now have access to clean, safe drinking water.'
    },
    {
      id: '2',
      date: '2023-05-01',
      title: 'New Partnership Announced',
      content: 'We\'ve partnered with TechForGood to implement IoT devices in our wells, allowing for real-time monitoring of water quality and usage.'
    }
  ]
}

const milestones: Milestone[] = [
  { id: '1', title: "Launch Campaign", description: "Kickoff our clean water initiative", achieved: true },
  { id: '2', title: "Raise $100,000", description: "Reach our initial funding goal", achieved: true },
  { id: '3', title: "Build 50 Wells", description: "Construct wells in 50 communities", achieved: true },
  { id: '4', title: "Educate 10,000 People", description: "Provide water sanitation education", achieved: false },
  { id: '5', title: "Expand to 5 Countries", description: "Broaden our impact across borders", achieved: false },
]

export default function SingleCausePage() {
  const [donationAmount, setDonationAmount] = useState<number>(50)
  const progress = (cause.raised / cause.goal) * 100

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96">
        <img src={cause.image} alt={cause.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{cause.title}</h1>
            <p className="text-xl mb-8">{cause.description}</p>
            <button className="bg-blue-600 text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-300">
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Cause Details */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About This Cause</h2>
              <div className="prose max-w-none mb-12">
                {cause.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Milestones</h3>
              <div className="space-y-4 mb-12">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="flex items-center">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full ${milestone.achieved ? 'bg-green-500' : 'bg-gray-300'} flex items-center justify-center`}>
                      {milestone.achieved && <Heart className="w-4 h-4 text-white" />}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-800">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">Recent Updates</h3>
              <div className="space-y-8">
                {cause.updates.map((update) => (
                  <div key={update.id} className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                      <span className="text-gray-600">{update.date}</span>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">{update.title}</h4>
                    <p className="text-gray-600">{update.content}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Donation Box */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Make a Donation</h3>
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Raised: ${cause.raised.toLocaleString()}</span>
                    <span>Goal: ${cause.goal.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{cause.supporters} supporters</span>
                    <span>{Math.round(progress)}% of goal</span>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">Select Amount</label>
                  <div className="grid grid-cols-3 gap-2 mb-2">
                    {[50, 100, 250].map((amount) => (
                      <button
                        key={amount}
                        className={`py-2 px-4 rounded-md text-sm font-medium ${
                          donationAmount === amount
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                        }`}
                        onClick={() => setDonationAmount(amount)}
                      >
                        ${amount}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={donationAmount}
                    onChange={(e) => setDonationAmount(Number(e.target.value))}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
                <button className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                  Donate Now
                </button>
                <p className="text-sm text-gray-500 mt-4 text-center">
                  Your donation is tax-deductible. You will receive a receipt via email.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Help Us Make a Difference</h2>
          <p className="text-xl mb-8">Your support can change lives. Join us in our mission to provide clean water for all.</p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
              Donate Now
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}