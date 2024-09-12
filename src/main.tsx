import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import {HomePage, About, AboutUsPage, ContactPage, Home, NewsEventsPage, OurWorkPage, PartnershipsPage, SingleNewsEventPage, Dashboard, LoginPage, DonationPage, ThankYouPage, BlogPage, SingleBlogPost, CausesPage, SingleCausePage} from "./pages/index.ts"
// import HomePage from './pages/HomePage.tsx'

const isAuthenticated = () => {
  // Your authentication logic here
  // Return true if user is logged in, false otherwise
  // localStorage.getItem('isLogin') === 'true';
  return localStorage.getItem('isLogin') === 'true';
};

const DashboardRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return <Dashboard />;
};
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:"/",
        element: <Home />
      },

      {
        path:"/about",
        element: <AboutUsPage />
      },
      {
        path:"/our-work",
        element: <OurWorkPage />
      },
      {
        path:"/news-events",
        element: <NewsEventsPage />
      },
      {
        path:"/partnerships",
        element: <PartnershipsPage />
      },
      {
        path:"/contact",
        element: <ContactPage />
      },
      {
        path:"/news/:id",
        element: <SingleNewsEventPage />
      },
      {
        path:"/events/:id",
        element: <SingleNewsEventPage />
      },
      {
        path:"/blog",
        element: <BlogPage />
      },
      {
        path:"/blog/:id",
        element: <SingleBlogPost />
      },
      {
        path:"/causes",
        element: <CausesPage />
      },
      {
        path:"/causes/:id",
        element: <SingleCausePage />
      },
      {
        path:"/donate",
        element: <DonationPage />
      },
      {
        path:"/success",
        element: <ThankYouPage donorName="John Doe" amount={100} donationId="12345"  />
      },
      
    ],
    
  },
  {
    path:"/login",
    element: <LoginPage />
    
  },
  {
    path:"/dashboard",
    element: <DashboardRoute />
    
  }
  
])
const root = createRoot(document.getElementById('root')!)
root.render(
  <StrictMode>
    <RouterProvider router={router} />

    
  </StrictMode>,
)
