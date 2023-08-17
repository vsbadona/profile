"use client";
import React, { useState } from 'react'
import Header from './Components/Header'
import SideNav from './Components/SideNav'
import Profile from '../app/profile/page'
import MyConnections from '../app/connection/page';

const Dashboard = () => {
    const [display,setDisplay]=React.useState("hidden");
    const toogleSideNav = () => {
        if(display == "hidden"){
            setDisplay("block")
        }else{
            setDisplay("hidden")
        }
    }
  return (
    <div className='flex px-2  pt-2 w-screen'>
        <div className={`w-[18vw] ${display} lg:inline-block`}><SideNav toogle={toogleSideNav}/></div>
      <div className='w-screen xl:w-[82vw] xl:pr-12'>
        <Header toogle={toogleSideNav}/>
      {/* <Profile/> */}
      <MyConnections/>
      </div> 
    </div>
  )
}

export default Dashboard