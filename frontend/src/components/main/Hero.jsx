import React, { useContext } from "react";
import { useNavigate, Link } from "react-router-dom"
import UserContext from "../../contexts/userContext";

function Hero() {
    const {data} = useContext(UserContext)
    const history = useNavigate()
    const goTotrips = ()=>{
        history('/mytrips')
    }
    return(
        <>
        <div class="relative w-full bg-white " >
  <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
    <div class="flex flex-col justify-center px-4 py-6 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
      <div className="font-bold md:hidden">Welcome {data.username}!</div>
      <h1 class="text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
      Your Journey, Simplified: <span className="text-purple-400">Plan</span>,<span className="text-green-400"> Explore</span>, <span className="text-blue-400">Enjoy</span>!</h1>
      
        <div className="mt-4 flex items-start space-x-2">
          <button
            type="button"
            onClick={goTotrips}
            class="rounded-md bg-black px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            My Trips
          </button>
        </div>

    </div>
    <div class="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
      <img
        class="sm: h-100  bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
        src="https://images.pexels.com/photos/917510/pexels-photo-917510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  </div>
</div>

        </>
    )
}

export default Hero