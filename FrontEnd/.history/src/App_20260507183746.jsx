import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Layout />,children:[
      {path:"/",element}
    ]  },
    // { path: '/', element: <Contact />  },
    // { path: '/', element: <Home />  }
  ])
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  )
}

export default App
