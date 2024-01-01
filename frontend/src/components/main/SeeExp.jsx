import React, { useEffect, useState } from "react";
import ExpTable from "./ExpTable";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function SeeExp() {
  const history = useNavigate()
  const location = useLocation()
  const data = location.state
  const sendData = data.expense

   const handleAnalyse = ()=>{
    history('/analyse',{state:sendData})
  }

  const handleClick = () => {
    history('/tripdetails',{state : data})

  }
    return(
        <>
        <section class="mx-auto w-full max-w-7xl px-4 py-4">
  <div class="flex justify-between md:flex-row md:items-center md:justify-between md:space-y-0">
    <div><button
    onClick={handleClick}
    >
      <h2 class="text-lg font-semibold">{data.tripname} Trip</h2>
      </button>
    </div>
    <div className="">
        <button className="underline" onClick={handleAnalyse}>
      Analyse Expense</button>
      </div>
  </div>

  <div class="mt-6 flex flex-col">
    <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
        <div class="overflow-hidden border border-gray-200 md:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-100">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  <span>Purpose</span>
                </th>
                <th
                  scope="col"
                  class="px-12 py-3.5 text-left text-sm font-normal text-gray-700"
                >
                  Amount
                </th>
              </tr>
            </thead>
            {sendData.map((tableData)=>(
                // setAmt(tableData.price)


            <tbody class="divide-y divide-gray-200 bg-white">
              <tr>
                <td class="whitespace-nowrap px-4 py-4">
                  <div class="flex items-center">
                    
                    <div class="">
                      <div class="text-sm font-medium text-gray-900">
                        {tableData.purpose}
                      </div>
                    </div>
                  </div>
                </td>
                {/* <td class="whitespace-nowrap px-12 py-4">
                  <div class="text-sm text-gray-900 ">{tableData.price}</div>
                </td> */}
                <td class="whitespace-nowrap px-12 py-4">
                  <span class="inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800">
                    {tableData.price}
                  </span>
                </td>        
              </tr>
              
            </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  </div>
</section>

            
            
             
        </>

    )
}

export default SeeExp        