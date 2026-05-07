import React from 'react'
import Home from './pages/Home'

const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Home />  },
    // { path: '/', element: <Contact />  },
    // { path: '/', element: <Home />  }
  ])
  return (
    <main>
      <Home />
    </main>
  )
}

export default App

function name(params) {
  
}