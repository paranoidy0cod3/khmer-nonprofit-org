import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import {HomePage, About, AboutUsPage, ContactPage, Home, NewsEventsPage, OurWorkPage, PartnershipsPage, SingleNewsEventPage, Dashboard, LoginPage} from "./pages/index.ts"
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
        path:"/news-events/:id",
        element: <SingleNewsEventPage />
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
