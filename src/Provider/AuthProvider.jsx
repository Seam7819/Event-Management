import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loader,setLoader] = useState(true)

    const SignInUser = (email,password)=>{
        setLoader(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth,currentUser => {
            console.log(currentUser)
            setUser(currentUser)
            setLoader(false)
        });
        return ()=> {
            unSubscribe()
        }
    },[])

    const logOut = () => {
        setLoader(true)
        return signOut(auth)
        
    }

    const logInUser = (email,password)=> {
        setLoader(true)
        return signInWithEmailAndPassword(auth,email,password)
        
    }

    const authInfo = {
        user,
        loader,
        SignInUser,
        logInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;