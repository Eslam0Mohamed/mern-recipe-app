import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { instance } from '../config/config'
export const AuthContext = createContext("")

const AuthContextProvider = ({children}) => {
    const [token,setToken] = useState(localStorage.getItem("token"))
// & Login function that sends data to the backend and receives a token
async function sendDataToLogin(values) {
  try {
    const {data} = await instance.post("/auth/login",values)
    return data
  } catch (error) {
    throw error            
  }
}
// & signup function that sends data to the backend and receives a token
async function sendDataToSignup(values) {
        try {
          // console.log("signed up",values);
          // console.log("signed up",values);
          
          const {data} = await instance.post("/auth/register",values)
          console.log("signed up",data);
         return data
        } catch (error) {
            throw error
        }
    }
function handleLogout() {
    setToken(null)
    localStorage.removeItem("token")
    localStorage.removeItem("name")
}

  return (
    <AuthContext.Provider value={{ sendDataToLogin, sendDataToSignup, handleLogout, token,setToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
