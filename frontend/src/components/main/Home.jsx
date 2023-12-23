import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom"
import axios from "axios";
import UserContext from "../../contexts/userContext";
import Header from "./Header";
import Card from "./Card";
import Hero from "./Hero";
function Home(){
    const {data , auth , setAuth} = useContext(UserContext)
    const history = useNavigate()

    
    console.log(auth)
    const [homedata , setHomeData] = useState([])
    console.log(data.username)
    useEffect(()=>{
        axios.post('http://localhost/home',data).then((res)=>{
          //console.log(res.data.trip)
          setHomeData(res.data.trip)

        })
    },[])
    const tripdata = homedata.reverse()
    console.log(tripdata)
    return(
      <>
      <Header/>
      <Hero/>
      </>
    )
}

export default Home