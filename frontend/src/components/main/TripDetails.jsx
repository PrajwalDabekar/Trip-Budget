import React from "react";
import { useLocation } from "react-router-dom";

function TripDetails(){
    const location = useLocation();
    const data = location.state;
    const tripId = data._id
    console.log(data)
    const date = data.date.slice(0,10)

    return(
        <>
        <section class="p-2">
          <div className="sm:grid grid-cols-12 gap-4 ml-5 w-full xl:flex flex-col ">
          <div className="sm:mt-4 col-start-1 col-end-4 xl:w-full mx-5 my-3">
            <button
              //onClick={addExpense}
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-2.5 py-1  font-semibold leading-7 text-white hover:bg-black/80"
            >
              Add Expenses{" "}
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
            <div className="sm:col-end-11 col-span-1 xl:w-full mx-5 ">
          <button className=" bg-black rounded-md mt-4  text-white py-2 px-10 sm:mr-12 ">Edit</button>
          </div>
          </div>
  <div class="flex items-center justify-center bg-white  px-4 py-4 sm:px-6 sm:py-1 lg:px-8">
    <div class=" p-2 xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
    <div className=' max-w-lg mx-auto border-gray-60 rounded-xl p-5 backdrop-blur-md my-1 '><div className='px-2 rounded-lg text-white'>
      <img src="https://sgtrekkers.in/wp-content/uploads/2023/10/Raigad-Parikrama-Route-H3.jpg" className="h-64 rounded-xl w-full xl:h-50" />
</div></div>
      
      
      <form action="#" method="POST" class="mt-8">
        <div class="space-y-2">
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Trip Name{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2  text-base font-medium"
                type="text"
                value={data.tripname}
                readOnly
              />
            </div>
          </div>
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Trip Location{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2  text-base font-medium"
                type="text"
                value={data.location}
                readOnly
              />
            </div>
          </div>
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Days{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2  text-base font-medium"
                type="text"
                value={data.days}
                readOnly
              />
            </div>
          </div>
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Date{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2  text-base font-medium"
                type="text"
                value={date}
                readOnly
              />
            </div>
          </div>
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Budget{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2  text-base font-medium"
                type="text"
                value={data.budget}
                readOnly
              />
            </div>
          </div>
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              Total Expense Till Now:{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border-2 border-gray-300 bg-transparent px-3 py-2  text-base font-medium"
                type="text"
                value={data.total_expense}
                readOnly
              />
            </div>
          </div>
        </div>
      </form>
      <div className="mt-4">
            <button
              //onClick={seeExpense}
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