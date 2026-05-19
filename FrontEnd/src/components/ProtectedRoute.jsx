import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext';
import Loading from './Loading';

const ProtectedRoute = ({children}) => {
    const {auth,loading} = useContext(AuthContext)
    
    if (loading) {
        return <Loading/>
    }
if (!auth) {
return <Navigate to={"/auth/login"}/>     
}

return children
}

export default ProtectedRoute
