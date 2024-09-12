import React, { useState } from 'react'
import { CreditCard, DollarSign, Heart, Users, Book, Home } from 'lucide-react'

const donationAmounts = [5, 10, 20, 50]

type DonationAmount = typeof donationAmounts[number] | number

const impactStats = [
  { icon: Users, label: 'People Helped', value: '10,000+' },
  { icon: Book, label: 'Education Programs', value: '50+' },
  { icon: Home, label: 'Communities Served', value: '100+' },
]

const testimonials = [
  { name: 'Sarah M.', quote: 'Your organization has made a real difference in my community. Thank you!' },
  { name: 'John D.', quote: 'I\'ve seen firsthand how my donations have helped. It\'s truly inspiring.' },
]

export default function DonationPage() {
  const [selectedAmount, setSelectedAmount] = useState<DonationAmount | null>(null)
  const [customAmount, setCustomAmount] = useState<string>('')

  const handleAmountSelect = (amount: DonationAmount) => {
    setSelectedAmount(amount)
    setCustomAmount('')
  }

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value === '' || /^\d+(\.\d{0,2})?$/.test(value)) {
      setCustomAmount(value)
      setSelectedAmount(null)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const amount = selectedAmount || parseFloat(customAmount)
    alert(`Thank you for your donation of $${amount.toFixed(2)}!`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-300 to-indigo-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            Make a Difference Today
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Your donation helps us create positive change in communities around the world. Together, we can build a brighter future for all.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-red-500 w-10 h-10 mr-2" />
              <h2 className="text-3xl font-bold text-gray-800">Donate Now</h2>
            </div>
            <p className="text-gray-600 text-center mb-8">
              Your generosity makes a difference. Choose an amount to donate:
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {donationAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`py-3 px-4 rounded-lg text-lg font-semibold transition-colors ${
                    selectedAmount === amount
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  ${amount}
                </button>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="customAmount" className="block text-sm font-medium text-gray-700 mb-1">
                  Custom Amount
                </label>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <DollarSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    name="customAmount"
                    id="customAmount"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
                    placeholder="0.00"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Donate Now
              </button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Impact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="mx-auto h-8 w-8 text-indigo-600" />
                  <p className="mt-2 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Testimonials</h3>
              {testimonials.map((testimonial, index) => (
                <blockquote key={index} className="mt-4">
                  <p className="text-sm text-gray-600 italic">"{testimonial.quote}"</p>
                  <footer className="mt-1 text-sm text-gray-500">- {testimonial.name}</footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 bg-white rounded-lg shadow-xl p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            We are committed to creating lasting change in communities around the world. Through education, healthcare, and sustainable development initiatives, we strive to empower individuals and build stronger, more resilient communities. Your donation directly supports our mission and helps us reach more people in need.
          </p>
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">How Your Donation Helps</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Provides access to quality education for underprivileged children</li>
            <li>Supports healthcare programs in underserved areas</li>
            <li>Funds sustainable development projects to improve local economies</li>
            <li>Enables disaster relief efforts in times of crisis</li>
          </ul>
        </div>
      </div>
    </div>
  )
}