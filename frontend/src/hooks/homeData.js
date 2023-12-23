import { useState , useEffect } from "react";

function homeData(user) {
    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost/home').then((res)=>{
            
        })
    },[])

}