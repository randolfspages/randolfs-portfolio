import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Portfolio from './pages/Portfolio/Portfolio.jsx';
import Blogs from './pages/Blogs/Blogs.jsx';
import Resume from './pages/Resume/Resume.jsx';
import About from './pages/About/About.jsx';
import Contact from './pages/Contact/Contact.jsx';

const router = createHashRouter([
  { path: "/", element: <App />, 
    children: [
      {
        path: "/",
        element: <About/>,
      },
      {
        path: "/resume",
        element: <Resume/>,
      },
      {
        path: "/portfolio",
        element: <Portfolio/>,
      },
      {
        path: "blogs",
        element: <Blogs/>
      },
      {
        path: "contact",
        element: <Contact/>
      }
    ]
   }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
