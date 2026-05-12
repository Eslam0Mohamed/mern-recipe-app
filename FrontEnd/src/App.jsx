import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Signup'

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Layout />,children:[
      {path:"/",element:<Home/>},
      {path:"/auth/login",element:<Login/>},
      {path:"/auth/signup",element:<Register/>},
    ]  },

  ])
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
