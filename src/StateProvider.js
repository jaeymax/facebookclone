import React, {useContext, createContext,useEffect, useState} from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from './firebase';

export const StateContext = createContext();


export const StateProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    useEffect(()=>{
       const unsub = onAuthStateChanged(auth, user=>{
             setUser(user);
        }) 

        return () => unsub();
    }, [])
    
   return <StateContext.Provider value={{user}} >{children}</StateContext.Provider>
}

export const useGlobalContext=()=>{
    useContext(StateContext);
}

