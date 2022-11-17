import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import React  from 'react'

export default function PrivateRoute({children}) {
    const {currentUser} = useAuth();

   if (!currentUser) {
        return <Navigate to="/login"/>
   }

   return children;
}
