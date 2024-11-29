import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Provider } from 'react-redux'
import { store } from './app/store'
import UserPage from './pages/user/UserPage'
import UserDetailsPage from './pages/user/UserDetailsPage'
import AddUser from './pages/user/AddUser'
import PageNotFound from './pages/PageNotFound'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<UserPage/>

      },
      {
        path:'/user/:id',
        element:<UserDetailsPage/>

      },
      {
        path:'/add-user',
        element:<AddUser/>

      }
    ]
    
  },
  {
    path:'*',
    element:<PageNotFound/>,
    
  },
])

createRoot(document.getElementById('root')).render(
  <Provider store = {store}>
  <StrictMode >
   <RouterProvider router={router}/>
  </StrictMode>,
  </Provider>
    
)
