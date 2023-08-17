import axios from 'axios'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'

const Detail = ({ toogle, props }) => {
    const {detail}=props
    const id = Cookies.get("id")
    const [userDetails, setUserDetail] = useState({
        name: detail?.name ? detail.name : "",
        email: detail?.email ? detail.email : "",
        phone: detail?.phone ? detail.phone : "",
        image: detail?.image ? detail.image : "",
        about: detail?.about ? detail.about : "",
        certificate: detail?.certificate ? detail.certificate : "",
        skill: detail?.skill ? detail.skill : "",
        _id:  detail?._id ? detail._id : id,
        course: detail?.course ? detail.course : "",
        university: detail?.university ? detail.university : "",
        esession: detail?.esession ? detail.esession : "",
        detail: detail?.detail ? detail.detail : "",
        company: detail?.company ? detail.company : "",
        csession: detail?.csession? detail.csession: "",
        year: detail?.year ? detail.year : "",
        role: detail?.role ? detail.role : "",
        type: detail?.type ? detail.type : "",
        id : detail?.id ? detail.id : "",
    })
    

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name
        setUserDetail({ ...userDetails, [name]: value })
    }
    const handleUpdate = async () => {
        const { name, email, phone,  about, certificate, skill, _id, course, university, esession, detail, company, csession, year, role, type,id ,image} = userDetails
        if (props.type == "personel") {
            const update = await axios.post(`https://profile-hzdh.onrender.com/update`, { name, email,image, phone, _id: _id })
            if (update.data.success) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "about") {
            const update = await axios.post(`https://profile-hzdh.onrender.com/about`, { about, _id: _id })
            if (update.data.about) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "skills") {
            const update = await axios.post(`https://profile-hzdh.onrender.com/skill`, { skill, _id: _id })
            if (update.data.skill) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "certification") {
            const update = await axios.post(`https://profile-hzdh.onrender.com/certificate`, { certificate, _id: _id })
            if (update.data.certificate) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "experiance") {
            const session = csession
            const update = await axios.post(`https://profile-hzdh.onrender.com/experiance`, { company, session, year, role, type, _id: _id })
            if (update.data.experiance) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "education") {
            const session = esession
            const update = await axios.post(`https://profile-hzdh.onrender.com/education`, { university, course, session, detail, _id: _id })
            if (update.data.education) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "editEducation") {
            const session = esession
            const update = await axios.post(`https://profile-hzdh.onrender.com/editeducation`, { university, course, session, detail, _id,id })
            if (update.data.education) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
                } else if (props.type == "editExperiance") {
            const session = csession
            const update = await axios.post(`https://profile-hzdh.onrender.com/editexperiance`, {  company, session, year, role, type, _id,id })
            if (update.data.experiance) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "editSkills") {
            const update = await axios.post(`https://profile-hzdh.onrender.com/editskill`, { skill, _id,id })
            if (update.data.skill) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        } else if (props.type == "editCertification") {
            const session = esession
            const update = await axios.post(`https://profile-hzdh.onrender.com/editcertificate`, { certificate,_id,id })
            if (update.data.certificate) {
                toogle()
            } else {
                window.alert(update.data.alert)
            }
        }
    }
    return (
        <div className='fixed top-1/2 bottom-1/2 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2  w-max h-fit bg-white border-2 shadow-2xl p-3 z-50 px-12' >
        <h1 className='text-2xl font-semibold text-center my-8'>Update Personel Details</h1>
        {props.type == "personel" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Name : </h1>
                <input type="text" onChange={handleChange} value={userDetails.name} name="name" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Email : </h1>
                <input type="email" onChange={handleChange} value={userDetails.email} name="email" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Phone : </h1>
                <input type="phone" onChange={handleChange} value={userDetails.phone} name="phone" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Image : </h1>
                <input type="url" onChange={handleChange} value={userDetails.image} name="image" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Phone : </h1>
                <input type="phone" onChange={handleChange} value={userDetails.phone} name="phone" id="" className='border-2' />
            </div>
        </>}
        {props.type == "about" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>About </h1>
                <textarea onChange={handleChange} value={userDetails.about} name='about' className='border-2'></textarea>
            </div>
        </>}
        {props.type == "photo" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Dp </h1>
                <input type="file" name="image" accept='Image/*' onChange={handleImageChange} id="" />
            </div>
        </>}
        {props.type == "skills"  && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Skill </h1>
                <input type="text" onChange={handleChange} value={userDetails.skill} name="skill" id="" className='border-2' />
            </div>
        </>}
        {props.type == "certification" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Certification </h1>
                <input type="text" onChange={handleChange} value={userDetails.certificate} name="certificate" id="" className='border-2' />
            </div>
        </>}
        {props.type == "experiance" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Years</h1>
                <input type="number" onChange={handleChange} value={userDetails.year} name="year" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>From Which Year to which year</h1>
                <input type="text" onChange={handleChange} value={userDetails.csession} name="csession" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Type </h1>
                <input type="text" onChange={handleChange} value={userDetails.type} name="type" id="" placeholder='Full Time Or Internship' className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Company Name </h1>
                <input type="text" onChange={handleChange} value={userDetails.company} name="company" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Job Role </h1>
                <input type="text" onChange={handleChange} value={userDetails.role} name="role" id="" className='border-2' />
            </div>
        </>}
        {props.type == "education" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>University</h1>
                <input type="text" onChange={handleChange} value={userDetails.university} name="university" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Session</h1>
                <input type="text" onChange={handleChange} value={userDetails.Esession} name="esession" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Course </h1>
                <input type="text" onChange={handleChange} value={userDetails.course} name="course" id="" placeholder='Full Time Or Internship' className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Details </h1>
                <input type="text" onChange={handleChange} value={userDetails.detail} name="detail" id="" className='border-2' />
            </div>
        </>}
        {props.type == "editSkills"  && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Skill </h1>
                <input type="text" onChange={handleChange} value={userDetails.skill} name="skill" id="" className='border-2' />
            </div>
        </>}
        {props.type == "editCertification" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Certification </h1>
                <input type="text" onChange={handleChange} value={userDetails.certificate} name="certificate" id="" className='border-2' />
            </div>
        </>}
        {props.type == "editExperiance" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Years</h1>
                <input type="number" onChange={handleChange} value={userDetails.year} name="year" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>From Which Year to which year</h1>
                <input type="text" onChange={handleChange} value={userDetails.csession} name="csession" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Type </h1>
                <input type="text" onChange={handleChange} value={userDetails.type} name="type" id="" placeholder='Full Time Or Internship' className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Company Name </h1>
                <input type="text" onChange={handleChange} value={userDetails.company} name="company" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Job Role </h1>
                <input type="text" onChange={handleChange} value={userDetails.role} name="role" id="" className='border-2' />
            </div>
        </>}
        {props.type == "editEducation" && <>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>University</h1>
                <input type="text" onChange={handleChange} value={userDetails.university} name="university" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Session</h1>
                <input type="text" onChange={handleChange} value={userDetails.esession} name="esession" id="" className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Course </h1>
                <input type="text" onChange={handleChange} value={userDetails.course} name="course" id="" placeholder='Full Time Or Internship' className='border-2' />
            </div>
            <div className="flex items-center justify-center gap-12 mt-3">
                <h1 className='text-lg font-medium'>Details </h1>
                <input type="text" onChange={handleChange} value={userDetails.detail} name="detail" id="" className='border-2' />
            </div>
        </>}
        <div className="flex items-center justify-center gap-5 pt-2">
            <button className='text-white bg-blue-500 p-3 rounded-xl' onClick={handleUpdate}>Update</button>
            <button className='text-white bg-red-500 p-3 rounded-xl' onClick={() => toogle()}>Cancel</button>
        </div>
    </div>
    )
}

export default Detail