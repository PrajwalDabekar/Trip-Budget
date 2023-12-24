import axios from "axios";
import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/userContext";
function AddExp() {
    const history = useNavigate()
    const {data} = useContext(UserContext)
    const location = useLocation()
    const resData = location.state
    const [amt , setAmt] = useState()
    const [pur , setPur] = useState()
    let expData = {}
    const handleSubmit = async (e)=>{
        e.preventDefault()
        expData = {
            user: data.username,
            tripname: resData.tripname,
            amount : amt,
            purpose : pur
        }
        
        console.log(expData)
        await axios.post('http://localhost:80/addexp',expData).then((res)=>{
            if(res.data.message == 'done'){
                alert('Expense Added Successfully')
                history('/mytrips')
            }
            else{
                alert('Something went wrong')
            }
        })
    }
    return(
        <section>
  <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      
      <h2 class="text-center text-2xl font-bold leading-tight text-black">
        Add Your Expense
      </h2>
      
      <form onSubmit={handleSubmit} method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Enter Amount{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="number"
                value={amt}
                onChange={(e)=> setAmt(e.target.value)}
                placeholder="Amount"
                required
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Purpose{" "}
              </label>
              
            </div>
            <div class="mt-2">
              
              <select className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
              value={pur}
              onChange={(e)=> setPur(e.target.value)}
              required
              >
                <option value="">Select..</option>
                <option value="travel/commute">Travel/Commute</option>
                <option value="lunch/dinner">Lunch/Dinner</option>
                <option value="accommodation">Accommodation</option>
                <option value="snacks">Snacks</option>
                <option value="water">Water</option>
                <option value="shopping">Shopping</option>
                <option value="miscellaneous">Miscellaneous</option>
              </select>
            </div>
          </div>
          <div>
            <button
              type="submit"
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

export default AddExp