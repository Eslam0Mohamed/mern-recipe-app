import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Signup'
import AuthContextProvider from './Context/AuthContext'
import { Toaster } from 'react-hot-toast'
const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Layout />,children:[
      {path:"/",element:<Home/>},
      {path:"/auth/login",element:<Login/>},
      {path:"/auth/signup",element:<Register/>},
    ]  },

  ])
  return (
  <>
    <main>
      <AuthContextProvider>
      <RouterProvider router={router} />
    <Toaster position='top-center'/>
    </AuthContextProvider>
    </main>
    </>
  )
}

export default App
