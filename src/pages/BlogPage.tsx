import React, { useState } from 'react'
import { Search, Calendar, User, Tag, ChevronLeft, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Empowering Communities Through Education",
    excerpt: "Learn about our latest initiative to bring quality education to underserved areas.",
    author: "Jane Doe",
    date: "2023-06-15",
    category: "Education",
    image: "https://picsum.photos/seed/edu2/800/600"
  },
  {
    id: 2,
    title: "Clean Water Project: Making a Difference",
    excerpt: "Discover how our clean water project is improving lives in rural communities.",
    author: "John Smith",
    date: "2023-06-10",
    category: "Health",
    image: "https://picsum.photos/seed/edu3/800/600"
  },
  {
    id: 3,
    title: "Volunteer Spotlight: Meet Our Heroes",
    excerpt: "Get to know the amazing volunteers who are the backbone of our organization.",
    author: "Emily Brown",
    date: "2023-06-05",
    category: "Community",
    image: "https://picsum.photos/seed/edu4/800/600"
  },
  {
    id: 4,
    title: "Sustainable Agriculture: Feeding the Future",
    excerpt: "Explore our sustainable farming practices that are helping to combat food insecurity.",
    author: "Michael Johnson",
    date: "2023-05-30",
    category: "Environment",
    image: "https://picsum.photos/seed/health2/800/600"
  },
  {
    id: 5,
    title: "Youth Leadership Program: Nurturing Tomorrow's Leaders",
    excerpt: "Learn about our program that's empowering young people to become community leaders.",
    author: "Sarah Lee",
    date: "2023-05-25",
    category: "Youth",
    image: "https://picsum.photos/seed/health3/800/600"
  }
]

const categories = ["All", "Education", "Health", "Community", "Environment", "Youth"]

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredPosts = blogPosts.filter(post => 
    (selectedCategory === "All" || post.category === selectedCategory) &&
    (post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Our Blog</h1>
        
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <div className="relative">
              <input
                type="text"
                placeholder="Search blog posts..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 text-gray-400" />
            </div>
          </div>
          <div className="w-full md:w-2/3 flex flex-wrap justify-end">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full mr-2 mb-2 ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-white text-blue-600 hover:bg-blue-100"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
              <Link to={`/blog/${post.id}`}>
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <User className="mr-2 h-4 w-4" />
                  <span className="mr-4">{post.author}</span>
                  <Calendar className="mr-2 h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="mr-2 h-4 w-4 text-blue-500" />
                  <span className="text-sm text-blue-500">{post.category}</span>
                </div>
              </div>
              </Link>
            </article>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-2xl text-gray-600">No blog posts found. Try adjusting your search or category selection.</p>
          </div>
        )}

        <div className="mt-12 flex justify-center">
          <button className="mx-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <ChevronLeft className="inline-block mr-2" />
            Previous
          </button>
          <button className="mx-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Next
            <ChevronRight className="inline-block ml-2" />
          </button>
        </div>
      </div>
    </div>
  )
}