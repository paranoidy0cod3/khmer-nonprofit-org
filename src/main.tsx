import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import {HomePage, About, AboutUsPage, ContactPage, Home, NewsEventsPage, OurWorkPage, PartnershipsPage, SingleNewsEventPage} from "./pages/index.ts"
// import HomePage from './pages/HomePage.tsx'
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

  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

    
  </StrictMode>,
)
