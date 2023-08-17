"use client"
import axios from 'axios'
import Cookies from 'js-cookie'
import Link from 'next/link'
import React, { useState } from 'react'

const page = () => {

    const [detail,setDetail]=useState({
        email:"",password:""
    })
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value
        setDetail({...detail,[name]:value})
    }

    const loginUser = async() => {
        const login = await axios.post("http://localhost:5000/login",{email:detail.email,password:detail.password})
        const response = login.data
        if(response.success){
            Cookies.set("id",response.data)
            window.alert(response.success)
            window.location.replace('/profile')
        }else{
            window.alert(response.alert)
        }
    }
    
  return (
    <section class="bg-gray-50 ">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                    Sign in to your account
                </h1>
                <form class="space-y-4 md:space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" onChange={handleChange} value={detail.email} />
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-white ">Password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleChange} value={detail.password}/>
                    </div>
                    <button  class="w-full text-gray-900 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none border-2 bg-gray-200 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center " onClick={loginUser}>Sign in</button>
                    <p class="text-sm font-light text-gray-900 ">
                        Don’t have an account yet? <Link href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</Link>
                    </p>
                </form>
            </div>
        </div>
    </div>
  </section>
  )
}

export default page