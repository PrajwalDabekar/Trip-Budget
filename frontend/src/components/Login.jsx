import React, { useState } from "react";
import axios from 'axios'
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom"
import UserContext from "../contexts/userContext";
function Login({setToken}) {
    const [user , setUser] = useState("")
    const [pass , setPass] = useState("")
    const {setData,auth} = useContext(UserContext)
    const history = useNavigate()
    let data = {}

  console.log(auth)
    


    async function handleSubmit(e){
        e.preventDefault()
        data = {
            username : user,
            password : pass
        }
        await axios.post('http://localhost:80/login',data).then(
            (res) =>{
              // const {token} = res.data
              // setToken(token)
              // localStorage.setItem('authToken', token);
              console.log(res.data.message)
                if(res.data.message == 'Data Found'){
                    console.log("Login successfull")
                    setData(data)
                    history('/home')
                }
                else{
                  alert("User Not Found")
                }
            }
        ).catch((err)=>{
            console.log('error',err)
        })

    }
    return(
        <section>
  <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
      <div class="mb-2 flex justify-center">
        <img src="https://cdn.icon-icons.com/icons2/1975/PNG/512/tent_122925.png" width="50" height="50"/>
      </div>
      <h2 class="text-center text-2xl font-bold leading-tight text-black">
        Sign in to your account
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 ">
        Don&#x27;t have an account?{" "}
        <a
          href="#"
          title=""
          class="font-semibold text-black transition-all duration-200 hover:underline"
        >
          Create a free account
        </a>
      </p>
      <form onSubmit={handleSubmit} method="POST" class="mt-8">
        <div class="space-y-5">
          <div>
            <label for="" class="text-base font-medium text-gray-900">
              {" "}
              User Name{" "}
            </label>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="text"
                value={user}
                onChange={(e)=> setUser(e.target.value)}
                placeholder="User Name"
                required
              />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="" class="text-base font-medium text-gray-900">
                {" "}
                Password{" "}
              </label>
              
            </div>
            <div class="mt-2">
              <input
                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                type="password"
                value={pass}
                onChange={(e)=> setPass(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              //onClick={handleSubmit}
              class="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
            >
              Get started{" "}
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
    {/* <h1>{msg}</h1> */}
  </div>
</section>

    )
}

export default Login