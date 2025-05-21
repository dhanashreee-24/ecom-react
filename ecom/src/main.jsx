import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'



import'../node_modules/bootstrap/dist/css/bootstrap.min.css'
import'../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';


let routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:
    [
      {
        path:'',
        element:<Home/>
      },

      {
        path:'/about',
        element:<About/>
      },

      {
        path:'/contact',
        element:<Contact/>
      }
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} >
    <App />
    </RouterProvider>
  </StrictMode>,
)
