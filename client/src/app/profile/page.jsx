"use client";
import Detail from '@/Pages/Components/Detail'
import axios from 'axios';
import Cookies from 'js-cookie';
import React, { useEffect, useState } from 'react'
const Profile = () => {
    const [userDetail, setUserDetail] = useState({})
    const [detail, setDetail] = useState({
        type: "", display: false, detail: {_id : userDetail?._id?userDetail._id : ""}
    })

    const detailUpdate = () => {
        if (detail.display == true) {
            setDetail({ display: false })
            fetchData();
        } else {
            setDetail({ display: true })
        }
    }
    const id = Cookies.get("id")
    const fetchData = async () => {
        const user = await axios.get("https://profile-hzdh.onrender.com?_id="+id,)
        setUserDetail(user.data)
        console.log(userDetail);
    }
    const props = {
        type: detail.type,
        detail: detail.detail
    }
    useEffect(() => { id && fetchData() }, [])
    return (

        <div className='w-[95%] relative'>
            {detail.display && <Detail toogle={detailUpdate} props={props} />}
            <div className='w-full xl:w-11/12 mt-8 h-48 hidden  md:block rounded-xl bg-blue-800'>
                <h1 className='text-white font-serif pt-5 pl-5'>My Profile</h1>
            </div>
            <div className=' mx-auto md:absolute border-2 w-full md:w-10/12  top-24 rounded-xl left-12 md:left-12 bg-white flex flex-col xl:flex-row items-center justify-center'>
                <div className='w-full xl:w-1/2 border-none h-full px-7 '>
                    <div className="flex items-center justify-between my-2">
                        <img src={userDetail?.image && userDetail.image} className='w-24 h-24' alt="" />
                    </div>
                    <div className='border-2 rounded-xl p-3 font-sans'>
                        <h1 className='text-base font-semibold py-1 text-gray-600 '>Your Name</h1>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-base font-semibold text-gray-700'>{userDetail.name}</h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "personel", display: true, detail: { name: userDetail.name, email: userDetail.email, image: userDetail.image, phone: userDetail.phone } })
                            }}>Edit</button>
                        </div>
                        <h1 className='text-base font-semibold py-1 text-gray-600 '>Email</h1>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-base font-semibold text-gray-700'>{userDetail.email}</h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "personel", display: true, detail: { name: userDetail.name, email: userDetail.email, image: userDetail.image, phone: userDetail.phone } })
                            }}>Edit</button>
                        </div>
                        <h1 className='text-base font-semibold py-1 text-gray-600 '>Phone Number</h1>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-base font-semibold text-gray-700'>{userDetail.phone}</h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "personel", display: true, detail: { name: userDetail.name, email: userDetail.email, image: userDetail.image, phone: userDetail.phone } })
                            }}>Edit</button>
                        </div>
                    </div>
                    <div className='border-2 rounded-xl p-3 my-3 font-sans '>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-xl font-semibold text-gray-700'>About <span className='text-blue-400'>{userDetail.name}</span></h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "about", display: true, detail: { about: userDetail.about } })
                            }}>Edit</button>
                        </div>
                        <p className='text-gray-400 py-2'>{userDetail?.about ? userDetail.about : "Add About Yourself"}</p>
                    </div>
                    <div className='border-2 rounded-xl p-3 my-3 font-sans '>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-xl font-semibold text-gray-700'>Skills </h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "skills", display: true })
                            }}>Add</button>
                        </div>
                        <ul className='font-bold'>
                            {userDetail?.skills?.length <= 0 && "Add Skills"}
                            {userDetail?.skills?.map((skill) => (
                                <div className='flex items-center justify-around'>
                                    <li className='py-2'>{skill.skill}</li>
                                    <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                        setDetail({ type: "editSkills", display: true, detail: { skill: skill.skill,id:skill._id } })
                                    }}>Edit</button>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full xl:w-1/2 border-none h-full px-7  '>
                    <div className="border-2 rounded-xl w-full h-auto">
                        <div className="flex items-center justify-between py-3 px-2">
                            <div>
                                <h1 className='text-xl font-semibold py-2'>Professional Details</h1>
                                <h1 className='text-lg font-medium text-gray-800'>This Show professtional details <br /> of the user</h1>
                            </div>
                            <h1 className='text-7xl  text-blue-500'><i className="fa fa-star "></i></h1>
                        </div>
                    </div>
                    <div className='my-5'>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-lg font-medium text-black'>Certifications </h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "certification", display: true })}}>Add</button>
                        </div>
                        {userDetail?.certificate?.length <= 0 && "Add Certificate"}
                        {userDetail?.certificate?.map((certificate) => (
                            <div className='border-2 rounded-full flex items-center justify-center gap-12 my-3'>
                                <h1 className='text-7xl  text-yellow-500'><i className="fa fa-star "></i></h1>
                                <h1 className='text-lg font-semibold w-1/3'>{certificate.certificate}</h1>
                                <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                    setDetail({
                                        type: "editCertification", display: true, detail: {
                                            certificate: certificate.certificate,id:certificate._id
                                        }
                                    })
                                }}>Edit</button>
                            </div>
                        ))}
                    </div>
                    <div className='my-5'>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-lg font-medium text-black'>Experiance </h1>
                            <button className='bg-slate-200 rounded-full  px-2 py-2' onClick={() => {
                                setDetail({ type: "experiance", display: true })
                            }}>Add</button>
                        </div>
                        {userDetail?.experiance?.length <= 0 && "Add experiance"}
                        {userDetail?.experiance?.map((exp) => (
                            <div className='border-2 rounded-xl  my-3'>
                                <div className="flex items-center justify-around">
                                    <div className='flex flex-col items-center justify-center '>
                                        <div className="flex w-full items-center gap-3 justify-around font-bold">
                                            <h1 >{exp.year} Years ({exp.session})</h1>
                                            <h1 >{exp.type}</h1>
                                        </div>
                                        <div className="flex w-full items-center gap-3 justify-around font-bold text-gray-400">
                                            <h1 >{exp.company}</h1>
                                            <h1 >--{exp.role}--</h1>
                                        </div>
                                    </div>
                                    <img src="https://play-lh.googleusercontent.com/DbPJM2-rgNze7cxL2Pfy3hNukeHxNaH-Y85cGmFQyyn8_cdnCDqsnV-zuC45x43JVXw" className='w-16 h-16' alt="" />
                                    <button className='bg-slate-200 rounded-full  px-2 py-2' onClick={() => {
                                        setDetail({ type: "editExperiance", display: true, detail: { year: exp.year, csession: exp.session, company: exp.company, role: exp.role, type: exp.type ,id:exp._id} })
                                    }}>Edit</button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='my-5'>
                        <div className='flex items-center justify-between '>
                            <h1 className='text-lg font-medium text-black'>Education </h1>
                            <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "education", display: true })
                            }}>Add</button>
                        </div>
                        {userDetail?.education?.length <= 0 && "Add education"}
                        {userDetail?.education?.map((edu) => (
                            <div className='flex items-center justify-around border-2 rounded-xl  my-3 px-3'>
                                <div className=''>
                                <h1 className='text-2xl font-semibold text-blue-400 py-3'>{edu.university}</h1>
                                <div className="flex items-center justify-between text-gray-500 font-bold text-lg">
                                    <h1>({edu.session})</h1>
                                    <h1>{edu.course}</h1>
                                </div>
                                <p className='text-gray-400 text-base font-medium pt-3'>{edu.detail}</p>
                            </div>
                                <button className='bg-slate-200 rounded-full  px-8 py-2' onClick={() => {
                                setDetail({ type: "editEducation", display: true,detail:{course:edu.course,esession:edu.session,detail:edu.detail,university:edu.university,id:edu._id} })
                            }}>Edit</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile