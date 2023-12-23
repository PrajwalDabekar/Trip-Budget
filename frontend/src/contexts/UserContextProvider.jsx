import React, { useState } from "react";
import UserContext from "./userContext";

const UserContextProvider = ({children})=>{
    const [data , setData] = useState({})
    const [auth , setAuth] = useState(false)
    return(
        <UserContext.Provider value={{data , setData,auth,setAuth}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserContextProvider