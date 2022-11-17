import "./App.css";
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import Dashboard from "./components/templates/Dashboard"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth } from "./context/AuthContext";

 const App = () => {
  return(
    <div>
      <Router>
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
      </Router>
    </div>
  );
 }

 export default App;