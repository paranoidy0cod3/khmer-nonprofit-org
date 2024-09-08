import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import {About, Home} from "./pages/index.ts"
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
        element: <About />
      },
      {
        path:"/contact",
        element: <div> contact us</div>
      },
    ],

  },

  
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

    
  </StrictMode>,
)
