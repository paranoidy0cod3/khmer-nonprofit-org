import React from 'react'
import { User, Calendar, Tag, Facebook, Twitter, Linkedin, Mail } from 'lucide-react'

interface BlogPost {
  id: number
  title: string
  content: string
  author: string
  date: string
  category: string
  image: string
  readTime: number
}

// This would typically come from your API or database
const blogPost: BlogPost = {
  id: 1,
  title: "Empowering Communities Through Education: Our Latest Initiative",
  content: `
    <p>Education is the cornerstone of progress and the key to unlocking a brighter future for individuals and communities alike. At our non-profit organization, we firmly believe in the transformative power of learning, which is why we're thrilled to announce our latest initiative aimed at bringing quality education to underserved areas.</p>

    <h2>The Challenge</h2>
    <p>In many parts of the world, access to quality education remains a significant challenge. Factors such as poverty, lack of infrastructure, and shortage of qualified teachers create barriers that prevent children and young adults from receiving the education they deserve. This not only affects individuals but also hinders the overall development of communities and nations.</p>

    <h2>Our Approach</h2>
    <p>Our new initiative takes a holistic approach to address these challenges:</p>
    <ul>
      <li><strong>Infrastructure Development:</strong> We're partnering with local communities to build and renovate schools, ensuring safe and conducive learning environments.</li>
      <li><strong>Teacher Training:</strong> We're implementing comprehensive training programs to equip teachers with modern pedagogical skills and subject knowledge.</li>
      <li><strong>Technology Integration:</strong> By introducing digital learning tools and resources, we're bridging the digital divide and opening up new avenues for learning.</li>
      <li><strong>Community Engagement:</strong> We're involving parents and community leaders in the education process, fostering a culture that values and supports learning.</li>
    </ul>

    <h2>Impact and Future Plans</h2>
    <p>Since launching this initiative, we've already seen promising results. Enrollment rates have increased by 30% in participating communities, and early assessments show significant improvements in student performance across various subjects.</p>
    <p>Looking ahead, we plan to expand this program to reach even more communities. Our goal is to impact 100,000 students over the next five years, providing them with the tools and knowledge they need to build better lives for themselves and their communities.</p>

    <h2>How You Can Help</h2>
    <p>Education is a collective responsibility, and we invite you to join us in this crucial mission. Here are ways you can contribute:</p>
    <ul>
      <li>Donate to support our education initiatives</li>
      <li>Volunteer as a teacher or mentor</li>
      <li>Spread awareness about the importance of education in underserved areas</li>
    </ul>

    <p>Together, we can create a world where quality education is not a privilege, but a right accessible to all. Join us in empowering communities and shaping a brighter future through the power of learning.</p>
  `,
  author: "Jane Doe",
  date: "2023-06-15",
  category: "Education",
  image: "https://picsum.photos/seed/edu1/1200/600",
  readTime: 5
}

export default function SingleBlogPost() {
  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <article className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">{blogPost.title}</h1>
          <div className="flex flex-wrap items-center text-gray-600 mb-4">
            <span className="flex items-center mr-4 mb-2">
              <User className="h-5 w-5 mr-2" />
              {blogPost.author}
            </span>
            <span className="flex items-center mr-4 mb-2">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(blogPost.date).toLocaleDateString()}
            </span>
            <span className="flex items-center mr-4 mb-2">
              <Tag className="h-5 w-5 mr-2" />
              {blogPost.category}
            </span>
            <span className="flex items-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {blogPost.readTime} min read
            </span>
          </div>
        </header>

        <div className="mb-12">
          <img src={blogPost.image} alt={blogPost.title} className="w-full h-auto rounded-lg shadow-lg" />
        </div>

        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: blogPost.content }} />

        <div className="border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Share this post</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600 hover:text-blue-800">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-400 hover:text-blue-600">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="text-blue-700 hover:text-blue-900">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="#" className="text-red-600 hover:text-red-800">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}