import React, { useEffect, useState } from 'react'
import { AuthContext } from './AuthContext'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebase.init'

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

      const [loading, setLoading] = useState(true);
      const [user, setUser] = useState(null);


    // create user  
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in user
    const singInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSingIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    // sing out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {     
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside useEffect on auth state change', currentUser);
            setUser(currentUser);
            setLoading(false);
        })

        return () => {
            unSubscribe();
        }


    }, [])
    
 
    const authInfo = {
        loading,
        user,
        createUser,
        singInUser,
        signOutUser,
        googleSingIn
    } 

  return (
    <AuthContext value={authInfo}>
        { children }
    </AuthContext>
  )
}

export default AuthProvider
