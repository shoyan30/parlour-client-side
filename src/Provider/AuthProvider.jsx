import React, { Children, createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/firebase.config';

export const AuthContext = createContext(null)


const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])

    const createUser = (email, password) =>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    const signIn = (email, password) =>{
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider(); // Create an instance of GoogleAuthProvider
        return signInWithPopup(auth, provider); // Pass the provider instance
    };
    

    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleSignIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;