"use client";
import SideNav from '@/Pages/Components/SideNav'
import { useState } from 'react';
import Header from '@/Pages/Components/Header';

export default function Home() {
  const [display,setDisplay]=useState("hidden");
  const toogleSideNav = () => {
      if(display == "hidden"){
          setDisplay("block")
      }else{
          setDisplay("hidden")
      }
  }
  return (
    <main>
   
    </main>
  )
}
