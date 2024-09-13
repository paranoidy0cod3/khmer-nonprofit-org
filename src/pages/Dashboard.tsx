import React, { useState, useEffect, useRef } from 'react'
// import { Bell, ChevronDown, ChevronLeft, ChevronRight, Menu, Pencil, Plus, Search, Share2, Trash2 } from 'lucide-react'

// Define types for our data
interface User {
  id: number;
  name: string;
  role: string;
  email: string;
}

interface NewsItem {
  id: number;
  title: string;
  date: string;
  content: string;
}

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
}

// Mock data (replace with actual data from your backend)
const mockUsers: User[] = [
  { id: 1, name: 'John Doe', role: 'Admin', email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', role: 'Editor', email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', role: 'Viewer', email: 'bob@example.com' },
]

const mockNews: NewsItem[] = [
  { id: 1, title: 'New Feature Launch', date: '2023-06-01', content: 'We are excited to announce...' },
  { id: 2, title: 'Company Milestone Achieved', date: '2023-05-28', content: 'Today, we celebrate...' },
  { id: 3, title: 'Industry Award Won', date: '2023-05-15', content: 'We are proud to share...' },
]

const mockEvents: Event[] = [
  { id: 1, title: 'Annual Conference', date: '2023-09-15', description: 'Join us for our annual...' },
  { id: 2, title: 'Product Workshop', date: '2023-07-22', description: 'Learn about our latest...' },
  { id: 3, title: 'Team Building Event', date: '2023-08-05', description: 'A day of fun and...' },
]

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const sidebarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node) && isOpen) {
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

interface HeaderProps {
  onMenuClick: () => void;
  user: {
    name: string;
    avatar: string;
  };
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, user }) => (
  <header onClick={onMenuClick} className="bg-white shadow-sm lg:static lg:overflow-y-visible">
    {/* Header content */} {user.name}
  </header>
)

// interface TabButtonProps {
//   active: boolean;
//   onClick: () => void;
//   children: React.ReactNode;
// }

// const TabButton: React.FC<TabButtonProps> = ({ active, onClick, children }) => (
//   <button
//     className={`px-4 py-2 font-medium text-sm rounded-md ${
//       active ? 'bg-gray-100 text-gray-700' : 'text-gray-500 hover:text-gray-700'
//     }`}
//     onClick={onClick}
//   >
//     {children}
//   </button>
// )

// interface CardProps {
//   title: string;
//   children: React.ReactNode;
// }

// const Card: React.FC<CardProps> = ({ title, children }) => (
//   <div className="bg-white overflow-hidden shadow rounded-lg">
//     <div className="px-4 py-5 sm:p-6">{children}</div>
//   </div>
// )

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   className?: string;
//   children: React.ReactNode;
// }

// const Button: React.FC<ButtonProps> = ({ onClick, className, children, ...props }) => (
//   <button
//     type="button"
//     className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
//     onClick={onClick}
//     {...props}
//   >
//     {children}
//   </button>
// )

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Modal content */}
      <h2>{title}</h2>
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  )
}

// interface PaginationProps {
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
// }

// const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => (
//   <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
//     {/* Pagination content */}
//   </div>
// )

interface UserFormProps {
  user: User | null;
  onSave: (user: User) => void;
  onCancel: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSave, onCancel }) => {
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [role, setRole] = useState(user?.role || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ id: user?.id || 0, name, email, role })
    setName('')
    setEmail('')
    setRole('')
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
    </form>
  )
}

interface NewsFormProps {
  news: NewsItem | null;
  onSave: (news: NewsItem) => void;
  onCancel: () => void;
}

const NewsForm: React.FC<NewsFormProps> = ({ news, onSave, onCancel }) => {
  const [title, setTitle] = useState(news?.title || '')
  const [date, setDate] = useState(news?.date || '')
  const [content, setContent] = useState(news?.content || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ id: news?.id || 0, title, date, content })
    setTitle('')
    setDate('')
    setContent('')
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
    </form>
  )
}

interface EventFormProps {
  event: Event | null;
  onSave: (event: Event) => void;
  onCancel: () => void;
}

const EventForm: React.FC<EventFormProps> = ({ event, onSave, onCancel }) => {
  const [title, setTitle] = useState(event?.title || '')
  const [date, setDate] = useState(event?.date || '')
  const [description, setDescription] = useState(event?.description || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({ id: event?.id || 0, title, date, description })
    setTitle('')
    setDate('')
    setDescription('')
    onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Form fields */}
    </form>
  )
}

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [users, setUsers] = useState<User[]>(mockUsers)
  const [news, setNews] = useState<NewsItem[]>(mockNews)
  const [events, setEvents] = useState<Event[]>(mockEvents)
  const [editingUser, setEditingUser] = useState<User | null>(null)
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  // const [currentPage, setCurrentPage] = useState({ users: 1, news: 1, events: 1 })
  // const [activeTab, setActiveTab] = useState('users')
  // const itemsPerPage = 10

  // Mock logged-in user
  const loggedInUser = {
    name: 'Jane Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }

  // const paginatedData = <T extends User | NewsItem | Event>(data: T[], page: number): T[] => {
  //   const start = (page - 1) * itemsPerPage
  //   const end = start + itemsPerPage
  //   return data.slice(start, end)
  // }

  // const handlePageChange = (type: string, page: number) => {
  //   setCurrentPage(prev => ({ ...prev, [type]: page }))
  // }

  const handleCreateUser = (newUser: User) => {
    setUsers([...users, { ...newUser, id: users.length + 1 }])
    setEditingUser(null)
  }

  const handleEditUser = (updatedUser: User) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user))
    setEditingUser(null)
  }

  // const handleDeleteUser = (userId: number) => {
  //   setUsers(users.filter(user => user.id !== userId))
  // }

  const handleCreateNews = (newNews: NewsItem) => {
    setNews([...news, { ...newNews, id: news.length + 1 }])
    setEditingNews(null)
  }

  const handleEditNews = (updatedNews: NewsItem) => {
    setNews(news.map(item => item.id === updatedNews.id ? updatedNews : item))
    setEditingNews(null)
  }

  // const handleDeleteNews = (newsId: number) => {
  //   setNews(news.filter(item => item.id !== newsId))
  // }

  const handleCreateEvent = (newEvent: Event) => {
    setEvents([...events, { ...newEvent, id: events.length + 1 }])
    setEditingEvent(null)
  }

  const handleEditEvent = (updatedEvent: Event) => {
    setEvents(events.map(event => event.id === updatedEvent.id ? updatedEvent : event))
    setEditingEvent(null)
  }

  // const handleDeleteEvent = (eventId: number) => {
  //   setEvents(events.filter(event => event.id !== eventId))
  // }

  // const handleShare = (item: User | NewsItem | Event) => {
  //   // Implement sharing functionality here
  //   console.log('Sharing:', item)
  // }

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 overflow-auto focus:outline-none">
        <Header onMenuClick={() => setSidebarOpen(true)} user={loggedInUser} />
        <main className="flex-1 relative z-0 overflow-y-auto py-6 focus:outline-none">
          {/* Main content */}
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

export default Dashboard