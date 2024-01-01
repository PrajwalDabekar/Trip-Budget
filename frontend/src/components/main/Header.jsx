import React, { useContext } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom"
import UserContext from "../../contexts/userContext";

function Header() {
    const {data} = useContext(UserContext)
    const history = useNavigate()

    const addTrip = ()=>{
      history('/addtrip')

    }

    return (
        <div class="relative w-full bg-white">
  <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
    <div class="inline-flex items-center space-x-2">
      <NavLink to='/home'>
        <div className="flex">
        <img src="https://cdn.icon-icons.com/icons2/1975/PNG/512/tent_122925.png" width="30" height="10"/>
        <div className="font-bold px-2">Trip Planner</div>
        </div>
      {/* <span class="mb-2 flex justify-center"> */}
      {/* </span> */}
      {/* <span className="font-bold"><img src="https://cdn.icon-icons.com/icons2/1975/PNG/512/tent_122925.png" width="10" height="10"/>
Trip Planner</span> */}
      </NavLink>
      <div className="hidden sm:block italic">{" "}Welcome {data.username}!</div>
    </div>
    
    <div class="hidden md:block mr-12">
      DashBoard
    </div>
    <div class="lg:block">
      <button
        type="button"
        onClick={addTrip}
        class="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        New Trip
      </button>
    </div>
    
  </div>
</div>
    )
}

export default Header