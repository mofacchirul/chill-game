
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { AuthContext } from '../Authcontext/Authcontext';
import auth from '../../Firebase/Firebase';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loding,setloding]=useState(true);
    const provider = new GoogleAuthProvider();
    const singup= (email,password)=>{
        setloding(true)
        return createUserWithEmailAndPassword(auth,email,password)
     }
    
    const login=(email,password)=>{
        setloding(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    const signOutUser = () => {
        setloding(true)
        return signOut(auth);
    };

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setloding(false)
         
        })
        return ()=>unsubscribe();
    })
  
    const googleSignIn = () => {
        return signInWithPopup(auth, provider);
    };

    const AuthInfo={
        singup,
        loding,
        user ,
        login,
        signOutUser,
        googleSignIn,
   

    }

     return  (
        <AuthContext.Provider value={AuthInfo}>
                   {children}
        </AuthContext.Provider>
     )
};

export default AuthProvider;