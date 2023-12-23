import {  useEffect, useState } from 'react'
import Login from './components/Login'
import axios from 'axios'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements, redirect } from 'react-router-dom'
import Home from './components/main/Home'
import { useContext } from "react";

import AddTrip from './components/main/AddTrip'
import { useNavigate, Link } from "react-router-dom"
import UserContext from './contexts/userContext'
import TripDetails from './components/main/TripDetails'
import MyTrips from './components/main/MyTrips'


function App() {
  const {auth , setAuth} = useContext(UserContext)
  //const history = useNavigate()
  
  // const checksession = async()=>{
  //   const res = await axios.get('http://localhost/checksession')
  //   console.log(res.data)
  //   if (res.data == true) {
  //     setAuth(true)
  //     //history('/home')
  //     //<redirect to='/home'/>
  //   }
  //   else{
  //     setAuth(false)

  //     //history('/')
  //     //<redirect to='/'/>
  //   }
  // }
  // checksession()
  // useEffect(async()=>{
  //   // .then((res)=>{
      
  //   // if(res == true){
  //     //   setAuth(true)
  //     //   history('/home')
  //     // }
  //     // else{
  //     //   setAuth(false)
  //     // }
  //   // })
  // },[])

  const router = createBrowserRouter(
    createRoutesFromElements(
      
      <Route path='/'>
      <Route path='' element={<Login/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='addtrip' element={<AddTrip/>}/>
      <Route path='mytrips' element={<MyTrips/>}/>
      <Route path='tripdetails' element={<TripDetails/>} />
      </Route>

      )
  )

  return (
   
      <RouterProvider router={router} />
    // </UserContextProvider>
    
    // <Router>
    //   <UserContextProvider>
    //     <Route path='/'>
    //     <switch>
    //     <Route  path='' element={<Login/>}/>
    //     <Route  path='home' element={<Home/>}/>
    //     <Route path='addtrip' element={<AddTrip/>}/>
    //     </switch>
    //     </Route>
    //   </UserContextProvider>
    // </Router>
  )
}

export default App
