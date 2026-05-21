import React from 'react'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Login from './pages/Login'
import Register from './pages/Signup'
import AuthContextProvider from './Context/AuthContext'
import { Toaster } from 'react-hot-toast'
import MyRecipes from './pages/MyRecipes'
import MyFavourites from './pages/MyFavourites'
import AddRecipe from './components/AddRecipe'
import ProtectedRoute from './components/ProtectedRoute'
import RecipeDetails from './pages/RecipeDetails'
import EditRecipe from './pages/EditRecipe'
const App = () => {
  const router = createBrowserRouter([
    { path: '/', element: <Layout />,children:[
      {path:"/",element:<Home/>},
      {path:"/recipe-details/:id",element:<RecipeDetails/>},
      {path:"/my-recipes",element:<ProtectedRoute><MyRecipes/></ProtectedRoute>},
      {path:"/my-favourites",element:<ProtectedRoute><MyFavourites/></ProtectedRoute>},
      {path:"/add-recipe",element:<ProtectedRoute><AddRecipe/></ProtectedRoute>},
      {path:"/edit-recipe/:id",element:<ProtectedRoute><EditRecipe/></ProtectedRoute>},
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
