import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from '../context/AuthContext'
import PrivateRoute from '../components/PrivateRoute'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Dashboard from '../components/templates/Dashboard'

const Router = () => {
  return (
    <BrowserRouter>
        <AuthProvider>
            <Routes>
            <Route path="/" element={
                <PrivateRoute>
                    <Dashboard/>
                </PrivateRoute>
                }/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                </Routes>
        </AuthProvider>
    </BrowserRouter>
  )
}

export default Router
