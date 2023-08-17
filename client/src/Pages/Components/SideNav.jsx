import Cookies from 'js-cookie'
import Link from 'next/link'
import React from 'react'

const SideNav = ({toogle}) => {
  const id =  Cookies.get("id")
console.log(id);
  return (
    <div className='fixed xl:static z-50 bg-white h-[97vh] border-r-2 border-b-2 pt-5'>
        <div className="flex flex-col  justify-between items-center  h-[90%] ">
           <div className="pages pt-1 flex flex-col gap-8">
           <div className="flex items-center justify-around border-2  xl:border-none">
           <h1 className='text-2xl font-bold xl:border-2 rounded-xl py-3 px-6  '>Dashboard</h1>
           <h1 className='text-lg font-bold xl:border-2 rounded-xl py-3 px-6 block xl:invisible' onClick={()=>toogle()} ><i className="fa fa-bars"></i></h1>
           </div>
           {id ? <>
            <Link className='text-lg font-medium' href="/profile"> <i className="fa fa-angle-right"></i> <span className='hover:border-2 rounded-xl py-3 px-5 border-gray-400 '>My Profile </span></Link>
           <Link className='w-full text-lg font-medium ' href="/connection"> <i className="fa fa-angle-right"></i> <span className='hover:border-2 rounded-xl py-3 px-5 border-gray-400 '>My Connections </span></Link>

           </> :
          <>
                     <Link className='text-lg font-medium' href="/login"> <i className="fa fa-angle-right"></i> <span className='hover:border-2 rounded-xl py-3 px-5 border-gray-400 '>Login </span></Link>
           <Link className='w-full text-lg font-medium ' href="/signup"> <i className="fa fa-angle-right"></i> <span className='hover:border-2 rounded-xl py-3 px-5 border-gray-400 '>Signup </span></Link>

          </> 
          }
           </div>
           {id && <h1 className='text-lg font-medium hover:border-2 rounded-xl py-3 px-5 border-gray-400y' onClick={()=>{Cookies.remove("id");window.alert("Logged Out");window.location.replace('/login')}}><i className="fa fa-sign-out"></i> Log Out</h1>}
        </div>
    </div>
  )
}

export default SideNav