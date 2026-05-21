import React, { createContext, useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { instance } from '../config/config'
export const AuthContext = createContext("")

const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [auth, setAuth] = useState(null)

  // & Login function that sends data to the backend and receives a token
  async function sendDataToLogin(values) {
    console.log("verify start");
    
    try {
      const { data } = await instance.post("/auth/login", values)
      console.log(data);
      if (data.success) {
        return data
      }

    } catch (error) {
      console.log(error.response.data.message);
      throw error.response.data.message
    }
  }
  // & signup function that sends data to the backend and receives a token
  async function sendDataToSignup(values) {
    try {
      // console.log("signed up",values);
      // console.log("signed up",values);

      const { data } = await instance.post("/auth/register", values)
      console.log("signed up", data);
      return data
    } catch (error) {
      throw error.response.data.message
    }
  }
  // & verify Token function 
  async function verifyToken() {
    try {
      setLoading(true)
      const { data } = await instance.get("/auth/verify", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (data.success) {
        setAuth(true)
        
      }
    } catch (error) {
      console.log(error);
      
      setAuth(false)
      setToken(null)
      localStorage.removeItem("token")
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => {
    if (token) {
      verifyToken()
  } 
    else {
      setAuth(false)
      setLoading(false)
    }
  }, [token])

  function handleLogout() {
    setToken(null)
    localStorage.removeItem("token")
    localStorage.removeItem("userData")
    setAuth(false)
  }

  return (
    <AuthContext.Provider value={{ sendDataToLogin,loading ,sendDataToSignup, handleLogout, token, setToken, auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
