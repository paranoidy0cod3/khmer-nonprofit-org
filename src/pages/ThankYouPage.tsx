import React from 'react'
import { CheckCircle, Share2, Mail, Twitter, Facebook } from 'lucide-react'

interface ThankYouPageProps {
  donorName: string
  amount: number
  donationId: string
}

export default function ThankYouPage({ donorName, amount, donationId }: ThankYouPageProps) {
  const shareMessage = `I just donated $${amount} to support a great cause! Join me in making a difference.`

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-teal-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="bg-green-500 p-6">
            <div className="flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-white mr-4" />
              <h1 className="text-3xl font-extrabold text-white">Thank You for Your Donation!</h1>
            </div>
          </div>
          
          <div className="p-8">
            <p className="text-xl text-gray-700 mb-6">
              Dear {donorName}, thank you for your generous donation of ${amount.toFixed(2)}. Your support means the world to us and will help make a real difference.
            </p>
            
            <div className="bg-gray-100 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Donation Summary</h2>
              <p className="text-gray-600">Amount: ${amount.toFixed(2)}</p>
              <p className="text-gray-600">Donation ID: {donationId}</p>
              <p className="text-gray-600">Date: {new Date().toLocaleDateString()}</p>
            </div>
            
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What's Next?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2 mb-8">
              <li>You'll receive a receipt for your donation via email shortly.</li>
              <li>We'll keep you updated on how your donation is making an impact.</li>
              <li>Consider sharing your support to inspire others!</li>
            </ul>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Share Your Support</h3>
              <div className="flex space-x-4">
                <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Twitter className="h-5 w-5 mr-2" />
                  Twitter
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                  <Facebook className="h-5 w-5 mr-2" />
                  Facebook
                </button>
                <button className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                  <Mail className="h-5 w-5 mr-2" />
                  Email
                </button>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 px-8 py-6">
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">
                Need assistance? Contact us at support@example.com
              </p>
              <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <Share2 className="h-5 w-5 mr-2" />
                Share Certificate
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}