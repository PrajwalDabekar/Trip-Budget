import React, { useState  } from "react";
import { useNavigate } from "react-router-dom";

function Card({data}) {
    const [tripname , setTripName] = useState(data.tripname)
    const history = useNavigate();
    const handleSubmit = ()=>{
      history('/tripdetails',{state : data})

    }
    return(
      <button
      type="button"
      onClick={handleSubmit}
    >
        <div class="w-[200px] h-[] rounded-xl border">
  <img
    src="https://icon-library.com/images/trip-icon/trip-icon-22.jpg"
    alt="Laptop"
    class="h-[200px] w-full rounded-t-md object-cover p-5"
  />
  <div class="p-4">
    <h1 class="inline-flex items-center text-lg font-semibold">
      {tripname}  {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="h-4 w-4"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    </h1>
    {/* <p class="mt-3 text-sm text-gray-600">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
      debitis?
    </p> */}
    
    
      
  </div>
</div>
</button>

    )
}
export default Card