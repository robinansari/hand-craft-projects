import { GoogleAuthProvider, createUserWithEmailAndPassword, 
    getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const Authcontext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
 const [user,setUser]= useState(null);
 const [loading ,setLoading]=useState(true);

 const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
 }

 const signIn =(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
 }
 const googleLogin = ()=>{
    setLoading(true)
    return signInWithPopup(auth,provider)
 }

 

   useEffect(()=>{
    const unsuscriber = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        console.log('curentUser',currentUser)
        setLoading(false)
        return ()=>{
            return unsuscriber()
        }
     })
   },[])
   
   const logOut =()=>{
    setLoading(true)
    return signOut(auth)

 }

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        googleLogin,
        logOut


    }

    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;