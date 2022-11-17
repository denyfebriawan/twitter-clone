import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {signOut} from 'firebase/auth';


const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
      return signInWithEmailAndPassword(auth, email, password);
    }

    function signup(email, password) {
       return createUserWithEmailAndPassword(auth, email, password);
    }

    function update(name) {
      return updateProfile(auth.currentUser, {displayName: name});
    }

    function logout() {
      return signOut(auth)
    }

    useEffect(() => {
            const unsubscribe = auth.onAuthStateChanged(user => {
              setCurrentUser(user)
              setLoading(false)
        })

        return unsubscribe;
    }, [])


    const value = {
        currentUser,
        login,
        signup,
        logout,
        update,
    }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )

}
