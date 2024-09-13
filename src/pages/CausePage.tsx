import React, { useState, useRef, useEffect } from 'react'
import {  Users,  Globe, Droplet,  ChevronDown } from 'lucide-react'

interface Cause {
  id: string
  title: string
  description: string
  image: string
  goal: number
  raised: number
  supporters: number
  category: string
}

const causes: Cause[] = [
  {
    id: '1',
    title: 'Clean Water for All',
    description: 'Provide clean, safe drinking water to communities in need around the world.',
    image: 'https://picsum.photos/seed/edu1/800/600',
    goal: 500000,
    raised: 350000,
    supporters: 2500,
    category: 'Health'
  },
  {
    id: '2',
    title: 'Education for Every Child',
    description: 'Ensure every child has access to quality education, regardless of their background.',
    image: 'https://picsum.photos/seed/edu2/800/600',
    goal: 1000000,
    raised: 750000,
    supporters: 5000,
    category: 'Education'
  },
  {
    id: '3',
    title: 'Reforestation Project',
    description: 'Plant trees and restore forests to combat climate change and protect biodiversity.',
    image: 'https://picsum.photos/seed/edu3/800/600',
    goal: 250000,
    raised: 100000,
    supporters: 1500,
    category: 'Environment'
  },
  {
    id: '4',
    title: 'Hunger Relief Program',
    description: 'Provide nutritious meals to those facing food insecurity in urban and rural areas.',
    image: 'https://picsum.photos/seed/edu4/800/600',
    goal: 750000,
    raised: 500000,
    supporters: 3500,
    category: 'Food'
  },
]

const CauseCard: React.FC<{ cause: Cause }> = ({ cause }) => {
  const progress = (cause.raised / cause.goal) * 100

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
      <img src={cause.image} alt={cause.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{cause.title}</h3>
        <p className="text-gray-600 mb-4">{cause.description}</p>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-500 mb-1">
            <span>Raised: ${cause.raised.toLocaleString()}</span>
            <span>Goal: ${cause.goal.toLocaleString()}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-2 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{cause.supporters} supporters</span>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default function CausesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const filteredCauses = selectedCategory === 'All' 
    ? causes 
    : causes.filter(cause => cause.category === selectedCategory)

  const categories = ['All', ...new Set(causes.map(cause => cause.category))]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Make a Difference Today</h1>
            <p className="text-xl mb-8">Support our causes and help us create positive change in the world.</p>
            <button className="bg-white text-blue-600 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300">
              Explore Our Causes
            </button>
          </div>
        </div>
      </section>

      {/* Causes Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Causes</h2>
          
          {/* Category Filter */}
          <div className="flex justify-center mb-8">
            <div className="relative inline-block text-left" ref={dropdownRef}>
              <div>
                <button 
                  type="button" 
                  className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500" 
                  id="options-menu" 
                  aria-haspopup="true" 
                  aria-expanded="true"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  {selectedCategory}
                  <ChevronDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                </button>
              </div>

              {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setIsOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                        role="menuitem"
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Causes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCauses.map((cause) => (
              <CauseCard key={cause.id} cause={cause} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <Droplet className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">1,000,000+</h3>
              <p>People Helped</p>
            </div>
            <div>
              <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">50+</h3>
              <p>Countries Impacted</p>
            </div>
            <div>
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-4xl font-bold mb-2">10,000+</h3>
              <p>Volunteers Worldwide</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-8">Join us in our mission to create positive change. Every contribution counts.</p>
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