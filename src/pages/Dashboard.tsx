import React, { useState, useEffect, useRef } from 'react'
import { Bell, ChevronDown, ChevronLeft, ChevronRight, Menu, Pencil, Plus, Search, Share2, Trash2 } from 'lucide-react'

// Mock data (replace with actual data from your backend)
const mockUsers = [
  { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', role: 'Editor', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', role: 'Viewer', email: 'bob@example.com' },
]

const mockNews = [
  { id: 1, title: 'New Feature Launch', date: '2023-06-01', content: 'We are excited to announce...' },
  { id: 2, title: 'Company Milestone Achieved', date: '2023-05-28', content: 'Today, we celebrate...' },
  { id: 3, title: 'Industry Award Won', date: '2023-05-15', content: 'We are proud to share...' },
]

const mockEvents = [
  { id: 1, title: 'Annual Conference', date: '2023-09-15', description: 'Join us for our annual...' },
  { id: 2, title: 'Product Workshop', date: '2023-07-22', description: 'Learn about our latest...' },
  { id: 3, title: 'Team Building Event', date: '2023-08-05', description: 'A day of fun and...' },
]

const Sidebar = ({ isOpen, onClose }) => {
  const sidebarRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target) && isOpen) {
        onClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  return (
    <div ref={sidebarRef} className={`bg-white fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex items-center justify-center h-16 border-b">
        <span className="text-2xl font-semibold">CMS Dashboard</span>
      </div>
      <nav className="mt-6">
        <a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100" href="#users">Users</a>
        <a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100" href="#news">News</a>
        <a className="flex items-center px-6 py-2 text-gray-700 hover:bg-gray-100" href="#events">Events</a>
      </nav>
    </div>
  )
}

const Header = ({ onMenuClick, user }) => (
  <header className="bg-white shadow-sm lg:static lg:overflow-y-visible">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex justify-between xl:grid xl:grid-cols-12 lg:gap-8">
        <div className="flex md:absolute md:left-0 md:inset-y-0 lg:static xl:col-span-2">
          <div className="flex-shrink-0 flex items-center">
            <button onClick={onMenuClick} className="lg:hidden -ml-2 p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
          <div className="flex items-center px-6 py-4 md:max-w-3xl md:mx-auto lg:max-w-none lg:mx-0 xl:px-0">
            <div className="w-full">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input id="search" name="search" className="block w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center md:absolute md:right-0 md:inset-y-0 lg:hidden">
          <button type="button" className="-mx-2 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <Bell className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
          <button type="button" className="ml-5 flex-shrink-0 rounded-full p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <Bell className="h-6 w-6" />
          </button>
          <div className="ml-4 relative flex-shrink-0">
            <div>
              <button type="button" className="bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                <span className="sr-only">Open user menu</span>
                <img className="h-8 w-8 rounded-full" src={user.avatar} alt="" />
              </button>
            </div>
          </div>
          <span className="ml-4 text-sm font-medium text-gray-700">{user.name}</span>
        </div>
      </div>
    </div>
  </header>
)

const TabButton = ({ active, onClick, children }) => (
  <button
    className={`px-4 py-2 font-medium text-sm rounded-md ${
      active ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700'
    }`}
    onClick={onClick}
  >
    {children}
  </button>
)

const Card = ({ title, children }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="px-4 py-5 sm:p-6">{children}</div>
  </div>
)

const Button = ({ onClick, className, children }) => (
  <button
    type="button"
    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
)

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
          <div className="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
            <button type="button" className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={onClose}>
              <span className="sr-only">Close</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="sm:flex sm:items-start">
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
              <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
                {title}
              </h3>
              <div className="mt-2">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div className="flex-1 flex justify-between sm:hidden">
      <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Previous
      </Button>
      <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </Button>
    </div>
    <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p className="text-sm text-gray-700">
          Showing page <span className="font-medium">{currentPage}</span> of <span className="font-medium">{totalPages}</span>
        </p>
      </div>
      <div>
        <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
          <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Previous</span>
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </Button>
          <Button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
            <span className="sr-only">Next</span>
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </nav>
      </div>
    </div>
  </div>
)

const UserForm = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [role, setRole] = useState(user?.role || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ id: user?.id, name, email, role })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)} className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
          <option value="">Select a role</option>
          <option value="Admin">Admin</option>
          <option value="Editor">Editor</option>
          <option value="Viewer">Viewer</option>
        </select>
      </div>
      <div className="flex justify-end space-x-2">
        <Button onClick={onCancel} className="bg-gray-200 text-gray-700 hover:bg-gray-300">Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}

const NewsForm = ({ news, onSave, onCancel }) => {
  const [title, setTitle] = useState(news?.title || '')
  const [date, setDate] = useState(news?.date || '')
  const [content, setContent] = useState(news?.content || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ id: news?.id, title, date, content })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
        <textarea id="content" name="content" rows={3} value={content} onChange={(e) => setContent(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="flex justify-end space-x-2">
        <Button onClick={onCancel} className="bg-gray-200 text-gray-700 hover:bg-gray-300">Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}

const EventForm = ({ event, onSave, onCancel }) => {
  const [title, setTitle] = useState(event?.title || '')
  const [date, setDate] = useState(event?.date || '')
  const [description, setDescription] = useState(event?.description || '')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave({ id: event?.id, title, date, description })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
        <input type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <textarea id="description" name="description" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
      </div>
      <div className="flex justify-end space-x-2">
        <Button onClick={onCancel} className="bg-gray-200 text-gray-700 hover:bg-gray-300">Cancel</Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  )
}

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [users, setUsers] = useState(mockUsers)
  const [news, setNews] = useState(mockNews)
  const [events, setEvents] = useState(mockEvents)
  const [editingUser, setEditingUser] = useState(null)
  const [editingNews, setEditingNews] = useState(null)
  const [editingEvent, setEditingEvent] = useState(null)
  const [currentPage, setCurrentPage] = useState({ users: 1, news: 1, events: 1 })
  const [activeTab, setActiveTab] = useState('users')
  const itemsPerPage = 10

  // Mock logged-in user
  const loggedInUser = {
    name: 'Jane Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }

  const paginatedData = (data, page) => {
    const start = (page - 1) * itemsPerPage
    const end = start + itemsPerPage
    return data.slice(start, end)
  }

  const handlePageChange = (type, page) => {
    setCurrentPage(prev => ({ ...prev, [type]: page }))
  }

  const handleCreateUser = (newUser) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
    setEditingUser(null)
  }

  const handleEditUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user))
    setEditingUser(null)
  }

  const handleDeleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId))
  }

  const handleCreateNews = (newNews) => {
    setNews([...news, { ...newNews, id: news.length + 1 }])
    setEditingNews(null)
  }

  const handleEditNews = (updatedNews) => {
    setNews(news.map(item => item.id === updatedNews.id ? updatedNews : item))
    setEditingNews(null)
  }

  const handleDeleteNews = (newsId) => {
    setNews(news.filter(item => item.id !== newsId))
  }

  const handleCreateEvent = (newEvent) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }])
    setEditingEvent(null)
  }

  const handleEditEvent = (updatedEvent) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event))
    setEditingEvent(null)
  }

  const handleDeleteEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId))
  }

  const handleShare = (item) => {
    // Implement sharing functionality here
    console.log('Sharing:', item)
  }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Header onMenuClick={() => setSidebarOpen(true)} user={loggedInUser} />
        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="flex space-x-4 mb-4">
                <TabButton active={activeTab === 'users'} onClick={() => setActiveTab('users')}>Users</TabButton>
                <TabButton active={activeTab === 'news'} onClick={() => setActiveTab('news')}>News</TabButton>
                <TabButton active={activeTab === 'events'} onClick={() => setActiveTab('events')}>Events</TabButton>
              </div>
              <Card>
                {activeTab === 'users' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-900">User Management</h2>
                      <Button onClick={() => setEditingUser({ id: 0, name: '', email: '', role: '' })}>
                        <Plus className="h-5 w-5 mr-2" />
                        Add User
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {paginatedData(users, currentPage.users).map((user) => (
                        <div key={user.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{user.name}</h3>
                            <p className="text-sm text-gray-500">{user.email}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button onClick={() => setEditingUser(user)} className="p-2">
                              <Pencil className="h-5 w-5" />
                            </Button>
                            <Button onClick={() => handleDeleteUser(user.id)} className="p-2 bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Pagination
                      currentPage={currentPage.users}
                      totalPages={Math.ceil(users.length / itemsPerPage)}
                      onPageChange={(page) => handlePageChange('users', page)}
                    />
                  </div>
                )}
                {activeTab === 'news' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-900">News Management</h2>
                      <Button onClick={() => setEditingNews({ id: 0, title: '', date: '', content: '' })}>
                        <Plus className="h-5 w-5 mr-2" />
                        Add News
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {paginatedData(news, currentPage.news).map((item) => (
                        <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.date}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button onClick={() => setEditingNews(item)} className="p-2">
                              <Pencil className="h-5 w-5" />
                            </Button>
                            <Button onClick={() => handleDeleteNews(item.id)} className="p-2 bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-5 w-5" />
                            </Button>
                            <Button onClick={() => handleShare(item)} className="p-2 bg-green-600 hover:bg-green-700">
                              <Share2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Pagination
                      currentPage={currentPage.news}
                      totalPages={Math.ceil(news.length / itemsPerPage)}
                      onPageChange={(page) => handlePageChange('news', page)}
                    />
                  </div>
                )}
                {activeTab === 'events' && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-medium text-gray-900">Event Management</h2>
                      <Button onClick={() => setEditingEvent({ id: 0, title: '', date: '', description: '' })}>
                        <Plus className="h-5 w-5 mr-2" />
                        Add Event
                      </Button>
                    </div>
                    <div className="space-y-4">
                      {paginatedData(events, currentPage.events).map((event) => (
                        <div key={event.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow">
                          <div>
                            <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                            <p className="text-sm text-gray-500">{event.date}</p>
                          </div>
                          <div className="flex space-x-2">
                            <Button onClick={() => setEditingEvent(event)} className="p-2">
                              <Pencil className="h-5 w-5" />
                            </Button>
                            <Button onClick={() => handleDeleteEvent(event.id)} className="p-2 bg-red-600 hover:bg-red-700">
                              <Trash2 className="h-5 w-5" />
                            </Button>
                            <Button onClick={() => handleShare(event)} className="p-2 bg-green-600 hover:bg-green-700">
                              <Share2 className="h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Pagination
                      currentPage={currentPage.events}
                      totalPages={Math.ceil(events.length / itemsPerPage)}
                      onPageChange={(page) => handlePageChange('events', page)}
                    />
                  </div>
                )}
              </Card>
            </div>
          </div>
        </main>
      </div>
      <Modal isOpen={!!editingUser} onClose={() => setEditingUser(null)} title={editingUser?.id ? "Edit User" : "Create User"}>
        <UserForm user={editingUser} onSave={editingUser?.id ? handleEditUser : handleCreateUser} onCancel={() => setEditingUser(null)} />
      </Modal>
      <Modal isOpen={!!editingNews} onClose={() => setEditingNews(null)} title={editingNews?.id ? "Edit News" : "Create News"}>
        <NewsForm news={editingNews} onSave={editingNews?.id ? handleEditNews : handleCreateNews} onCancel={() => setEditingNews(null)} />
      </Modal>
      <Modal isOpen={!!editingEvent} onClose={() => setEditingEvent(null)} title={editingEvent?.id ? "Edit Event" : "Create Event"}>
        <EventForm event={editingEvent} onSave={editingEvent?.id ? handleEditEvent : handleCreateEvent} onCancel={() => setEditingEvent(null)} />
      </Modal>
    </div>
  )
}