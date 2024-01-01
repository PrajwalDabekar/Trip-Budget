import axios from "axios";
import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function TripDetails(){
    const history = useNavigate()
    const location = useLocation();
    const data = location.state;
    const tripId = data._id
    console.log(data)
    const date = data.date.slice(0,10)

    const handleAnalyse = ()=>{
      history('/analyse',{state:data.expense})
    }

    const addExpense = ()=>{
      history('/addexp',{state:data})
    }

    const seeExpense = ()=>{
      history('/seeExp',{state:data})
    }

    return(
        <>
        <section class="p-2">
          <div className="flex mr-8 sm:grid grid-cols-12 gap-4 w-full">
          <div className="sm:mt-4 col-start-1 col-end-4 xl:w-full mx-5 my-3">
            <button
              onClick={addExpense}
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-10 py-2  font-semibold leading-7 text-white hover:bg-black/80"
            >
              Add <span className="hidden sm:block">Expenses</span>{" "}
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
                class=" hidden sm:block ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
            <div className="sm:col-end-11 col-span-1 xl:w-full mx-5 ">
          <button className=" bg-black rounded-md mt-4 font-semibold text-white py-2 px-10 sm:mr-12 ">Edit</button>
          </div>
          </div>
  <div class="flex items-center justify-center bg-white  px-4 py-4 sm:px-6 sm:py-1 lg:px-8">
    <div class="  xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
    <div className=''><div className=''>
      <img src="https://sgtrekkers.in/wp-content/uploads/2023/10/Raigad-Parikrama-Route-H3.jpg" className="h-full rounded-md w-full sm:h-[300px] " />
</div></div>
      <div className="mt-4 border-y">
        <div className="font-bold">{data.tripname}</div>
        <div className="font-semibold"><span className="">{data.location}{" "}</span><span>[{date}]</span></div>
        <div>
          <span className="font-semibold">Budget: </span>
          {data.budget}<span> Rs.</span>
        </div>
        <div>
          <span className="font-semibold">No. of Days: </span>
          {data.days}
        </div>
        <div>
          <span className="font-semibold">Total Expense: </span>
          <span className="bg-red-100 text-md font-semibold rounded-md px-1 text-red-800">{data.total_expense}</span>
        </div>
      </div>
      <div className="flex justify-end mt-2 underline">
        <button onClick={handleAnalyse}>
      Analyse Expense</button>
      </div>
      <div className="mt-4">
            <button
              onClick={seeExpense}
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5  font-semibold leading-7 text-white hover:bg-black/80"
            >
              See Expense{" "}
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
  </div>
</section>


        </>
    )
}
export default TripDetails