import React, { useState,useContext } from "react";
import { useNavigate, Link } from "react-router-dom"
import UserContext from "../../contexts/userContext";
import axios from 'axios'

function AddTrip() {
    var details ={}
    const {data} = useContext(UserContext)

    const [tripName , setTripName] = useState("")
    const [budget , setBudget] = useState("")
    const [date , setDate] = useState("")
    const [location , setLocation] = useState("")
    const [days , setDays] = useState("")
    const history = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        details = {
            user : data.username,
            tripName : tripName,
            budget : budget,
            date : date,
            location : location,
            days : days,
            total_expense : 0 
        }
        await axios.post('http://localhost/addtrip',details).then((res)=>{
            if (res.status == 201){
                alert("Details Added Succesfully")
                history('/home')

            }else{
                alert("Something Went Wrong")
            }
        }).catch(()=>{
            alert("Something Went Wrong")
        })
        //console.log(details,data)

    }

    return(
        <section>
  <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div class="sm:w-[450px] xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
    <div class="mb-2 flex justify-center">
        <img src="https://cdn.icon-icons.com/icons2/1975/PNG/512/tent_122925.png" width="50" height="50"/>
      </div>
      <h2 class="text-center text-2xl font-bold leading-tight text-black">
        Add Your Next Trip Details
      </h2>
      
      <form onSubmit={handleSubmit} method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Trip Name{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={tripName}
                onChange={(e) => setTripName(e.target.value)}
                placeholder="Trip Name"
                required
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Budget{" "}
              </label>
              
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                value={budget}
                onChange={(e)=> setBudget(e.target.value)}
                placeholder="Budget"
                required
              />
            </div>
            
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Date Of Trip{" "}
              </label>
              
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder="Date"
                required
              />
            </div>
            
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Location{" "}
              </label>
              
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                required
              />
            </div>
            
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Number Of Days{" "}
              </label>
              
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                value={days}
                onChange={(e)=> setDays(e.target.value)}
                placeholder="Days"
                required
              />
            </div>
            
          </div>
          <div>
            <button
              type="submit"
            //   onClick={handleSubmit}
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Add{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </form>
      
    </div>
  </div>
</section>
    )
}
export default AddTrip