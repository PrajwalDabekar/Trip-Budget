import {  useEffect, useState } from 'react'
import Login from './components/Login'
import axios from 'axios'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements, Navigate, Routes } from 'react-router-dom'
import Home from './components/main/Home'
import { useContext } from "react";

import AddTrip from './components/main/AddTrip'
import { useNavigate, Link } from "react-router-dom"
import UserContext from './contexts/userContext'
import TripDetails from './components/main/TripDetails'
import MyTrips from './components/main/MyTrips'
import AddExp from './components/main/AddExp'
import SeeExp from './components/main/SeeExp'
import Analyse from './components/main/Analyse'


function App() {
  const [token , setToken] = useState(localStorage.getItem('authToken') || '')
  // const navigate = useNavigate()
  const handleLogin = (token)=>{
    setToken(token);
    localStorage.setItem('authToken', token);
    // navigate('/dashboard');
  }
  //const {auth , setAuth} = useContext(UserContext)
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
      <Route path='addexp' element={<AddExp/>}/>
      <Route path='seeexp' element={<SeeExp/>}/>
      <Route path='analyse' element={<Analyse/>}/>
      </Route>

      )
  )

  return (
    //  <Router>
    //   <Routes>
    //     <Route exact path='/' element={<Login/>}/>
    //     <Route path='/home' element={<Home/>}/>
    //     <Route path='/addtrip' element={<AddTrip/>}/>
    //     <Route path='/mytrips' element={<MyTrips/>}/>
    //     <Route path='/tripdetails' element={<TripDetails/>} />
    //     <Route path='/addexp' element={<AddExp/>}/>
    //     <Route path='/seeexp' element={<SeeExp/>}/>

    //     </Routes>
    //  </Router>
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
