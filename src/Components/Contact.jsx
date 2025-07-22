import React, { useState } from 'react'
import { AiFillHome } from "react-icons/ai";
import { LuMail } from "react-icons/lu";
import { FaPhone } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Footer from "./Footer";

const Contact = () => {
    
    const [fromData,setFormData]=useState({name:"",email:"",mobileNumber:"",coursePreference:"",})
    const navigate = useNavigate();
    
    const handleChange = (e) =>{
        setFormData({...fromData,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(fromData);

        toast.success("Form Submitted Successfully!",{
          position:"top-right",
          autoClose:3000,
        });

        setFormData ({
          name: '',
          email: '',
          mobileNumber: '',
          coursePreference: '',
        });

        setTimeout(()=>{
            navigate("/thankyou")
        },2500)

        
        
    }
    const courses = [
      "Frontend (ReactJS)",
      "Node.js",
      "DevOps and Cloud Computing",
      "Software QA (Testing)",
      "Core Java",
      "UI / UX",
    ];

 

    const Contact =[
        {
            name:"phone",
            Auth:"+91 73059 71619",
            logo: <FaPhone />
        },
        {
            name:"Mail address",
            Auth:"hello@purpleacademy.tech",
            logo:<LuMail />
        },
        {
            name:"Address",
            Auth:"2nd Floor, 6/1, Mohamed Sathak Trust, Pycrofts Garden Rd, Chennai, Tamil Nadu 600006",
            logo:<AiFillHome />
        },
    ]

  return (
    <section>
        <div>
            <div>
                <h2 className='text-[#7c269b] font-bold text-5xl font-ubuntu text-center mt-5'>Contact Us</h2>
                <h4 className='font-bold text-center text-2xl'>We’d love to hear from you</h4>
            </div>
            <div className='grid grid-cols-1 p-14 px-24 gap-5 md:grid-cols-3'>
                 {Contact.map((d,i)=>(
                    <div key={i} className=' border w-full p-10 text-center flex flex-col justify-center items-center py-14 rounded-lg shadow-lg'>
                        <p className='text-[#7c269b] font-bold text-4xl'>{d.logo}</p>
                        <h3 className='text-[#7c269b] font-bold text-4xl mt-4'>{d.name}</h3>
                        <h4 className='mt-4'>{d.Auth}</h4>
                    </div>
                 ))}
            </div>

            <div>
                
            </div>
            
        </div>
        {/* Form */}
        <div className="pb-14 flex justify-center  ">
            <form 
            id="apply-form"
              onSubmit={handleSubmit}
              className='border w-[700px] flex flex-col gap-5 p-2  bg-white py-6 shadow-lg rounded-lg mt-10 justify-center   px-5 '
              > 
              <h1 className='font-bold text-3xl font-ubuntu '>Start Your Career Now</h1>
              <label htmlFor='name' className='font-medium'>
              Name
              </label>
                  <input 
                  type="name"
                  id='name'
                  name='name'
                  value= {fromData.name}
                  onChange={handleChange}
                  placeholder='Enter here...'
                  required
                  className='border-2 border-purple-200 w-full p-3 rounded'
                  /> 
                  <label htmlFor='email' className='font-medium'>
                    Email Address
                  </label>
                    <input 
                  type="text"
                  id='name'
                  name='email'
                  value={fromData.email}
                  onChange={handleChange}
                  placeholder='Enter here...'
                  required
                  className='border-2 border-purple-200 w-full p-3 rounded'
                  
                  />
                    <label htmlFor='mobileNumber' className='font-medium'>
                    Mobile Number
                    </label>
                    <input 
                  type="mobileNumber"
                  id='name'
                  name='mobileNumber'
                  value={fromData.mobileNumber}
                  onChange={handleChange}
                  placeholder='Enter here...'
                  pattern='[0-9]{10}'
                  required
                  className='border-2 border-purple-200 w-full p-3 rounded'
                  />
                    
            <label htmlFor='coursePreference' className='font-medium'>
              Course Preference
            </label>
            <select
              name='coursePreference'
              id='coursePreference'
              value={fromData.coursePreference}
              onChange={handleChange}
              className='border-2 border-purple-200 w-full p-3 rounded'
              required
            >
              <option value=''>Select Course Preferences</option>
              {courses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
                  
                  <button 
                  type='submit'
                  className='font-code text-lg bg-[#7c269b] text-white px-4 py-2 rounded-lg hover:bg-[#692084] w-56'>
                    Join our Courses
                    </button>
              </form>
            <ToastContainer/>
            </div>

        <Footer />
    </section>
  )
}

export default Contact