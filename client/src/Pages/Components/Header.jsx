"use client"
import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const Header = ({toogle}) => {
  const id = Cookies.get("id")
  const [userDetail,setUserDetail]=useState([])
  const fetchData = async () => {
    const user = await axios.get("https://profile-hzdh.onrender.com?_id=64dd1254f3fb733b406728d8",)
    setUserDetail(user.data.name)
}
useEffect(() => { fetchData() }, [])
  return (
    <div className='bg-slate-50 w-full h-16  flex items-center justify-between  flex-wrap md:flex-nowrap border-b-2'>
        <h1 className='text-xl font-bold border-2 rounded-xl py-3 px-6 block xl:invisible' onClick={()=>toogle()} ><i className="fa fa-bars"></i></h1>
        {id && <div className='flex justify-around gap-3 items-center'>
            <button className='text-3xl'><i className="fa fa-bell text-blue-500 "></i></button>
            <div className='relative xs:border-none md:border-2 rounded-xl border-gray-400 py-7 px-3 w-auto h-12 flex gap-4 items-center'>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1024px-User_icon_2.svg.png" alt="" className='w-11 h-11 bg-orange-500 rounded-xl'/>
<div className="md:flex flex-col gap-1 hidden ">
    <h1 className='text-lg font-semibold'>Welcome back,</h1>
    <h1 className='text-xl font-bold'>{userDetail}</h1>
</div>
<button className='text-3xl text-gray-500 hidden md:block'><i className="fa fa-angle-down hover:text-black"></i></button>
            </div>
        </div>}
    </div>
  )
}

export default Header