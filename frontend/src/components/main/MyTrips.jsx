import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import UserContext from "../../contexts/userContext";
import Header from "./Header";

function MyTrips() {
    const {data , auth , setAuth} = useContext(UserContext)
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
        <div className="flex flex-col mx-10 sm:grid gap-x-2 gap-y-4 grid-cols-3 p-4 justify-center content-center justify-items-center ml-12">
        {tripdata.reverse().map((data)=>(
          <div  key={data._id}className='w-full justify-self-center'>
            {/* <Link to='/tripdetails' params = {{tripdata:data}}> */}
            <Card data={data}/>
            {/* </Link> */}
          </div>
         ))} 
          
      </div>
        </>
    )
}
export default MyTrips