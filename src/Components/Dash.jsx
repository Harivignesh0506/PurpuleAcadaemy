import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Header from './Header'
import { useLocation, useNavigate } from "react-router-dom";
import courseimg from '../Asstes/courseBg.svg'
import { FaCalendarAlt } from "react-icons/fa";
import imgApprochu from '../Asstes/training.webp'
import logoi from '../Asstes/bullet.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import cardimg from '../Asstes/Jothy Krishnan.webp';
// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import VideoSlider from './VideoSlider';
import Frequency from './Frequency';
import Footer from './Footer'
import Course from "../Course.json";
// import homeimg from '../Asstes/homeBannerBg.png'


const Dash = ({courseName}) => {

  const navigate = useNavigate();
  const location = useLocation();
    const [fromData,setFormData]=useState({name:"",email:"",mobileNumber:"",coursePreference:"",});
    
    const isActive =(path)=> location.pathname === path
    
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

  const config = {
   upcoming: [
        {
          name:"Backend (Node js)",
          date:"30th September 2024",
          link:"#",
          img:{courseimg},
        },
        {
          name:"Frontend (React js)",
          date:"22th September 2024",
          link:"#",
          img:{courseimg},
        },
       

   ],
    
  };

  const training ={
    content: [
      {
        logo:logoi ,
        detail:"Solve the lack of technical training covered in most colleges by providing hands-on training in the latest software and programming",
      },
      {
        logo:logoi ,
        detail:"Face the global nature of the tech industry by shaping top coders that have great communication and social skills to truly excel",
      },
      {
        logo:logoi ,
        detail:"Prepare candidates for the full industry experience through numerous practical exercises and real-time use cases",
      },
      {
        logo:logoi ,
        detail:"Accelerated courses where seasoned senior software engineers in the industry train studentsg",
      },
      {
        logo:logoi ,
        detail:"Guided career path with dedicated career counselor",
      },
      {
        logo:logoi ,
        detail:"End to end support through personalized placement assistance",
      },
    ]
  }

  // Card slider
 
  

  return (
    <section className=' font-sans text-lg w-full h-screen  bg-homeimg  bg-center bg-no-repeat  '>

       
      
     <div className='flex justify-center mt-5 relative'> 
     <div className='flex flex-col md:flex-row   items-center gap-10 '>
      <div className=' w-full md:w-[600px] text-center md:text-left leading-4.125'>
            <h3 className= 'font-bold  font-ubuntu text-3xl md:text-5xl '>Set yourself apart by learning the skills that actually matter!</h3>
            <p>Boost your <span className='font-bold'> IT journey </span> by joining our comprehensive courses</p>
            <div className='flex gap-3flex flex-col sm:flex-row gap-3 mt-6'>
            <button 
                type='submit'
                 className='font-code text-lg bg-[#7c269b] text-white px-4 py-2 rounded-lg hover:bg-[#692084]  hover:text-white w-full sm:w-auto'>
                  Join our Courses
                  </button>
                  <button 
                  onClick={()=>navigate("/all-courses")}
                type='submit'
                 className='font-code text-lg border-2 border-[#7c269b]  text-black px-4 py-2 rounded-lg hover:bg-[#692084] hover:text-white hover:border-none sm:w-auto'>
                  See all Courses
                  </button>
            </div>
        </div>
        <div className='w-full max-w-lg flex justify-end  ml-20 '>

            <form 
            onSubmit={handleSubmit}
            className='border w-[500px] flex flex-col gap-5 p-2  bg-white py-6 shadow-lg rounded-lg mt-10 justify-center   px-5 '
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
        </div>
        <ToastContainer />
      </div>
     </div>

     {/* UPCOMING COURSES */}
     <div className='px-4 md:px-10 lg:px-20'>
     <h2 className='font-ubuntu text-3xl md:text-4xl leading-10 py-4 text-center font-bold mt-12'>Upcoming Courses</h2> 
     <div className='flex flex-wrap gap-5 justify-center '>
      {config.upcoming.map((upcoming,index)=>(

       <div className='border w-full sm:w-[400px] p-5 leading-10 rounded-xl shadow-lg '>
         <h4 className='font-ubuntu font-bold text-2xl'>{upcoming.name}</h4>
         <p className='flex gap-1 items-center' ><FaCalendarAlt className='text-[#7c269b]' />{upcoming.date}</p>
         <button
    type='button'
    onClick={() => navigate(`/course/${upcoming.name.toLowerCase().replace(/\s+/g, '-')}`)}
    className='font-code bg-[#7c269b] text-white px-4 mt-2 rounded-lg hover:bg-[#692084] w-full sm:w-44'
>
    View details
</button>

          {/* <img src={upcoming.img} alt="" className='' /> */}
       </div>
      ))}
       
       <div
       onClick={()=>navigate("/all-courses")}
       className='border w-full sm:w-[400px] p-5 rounded-xl shadow-lg flex justify-center items-center '>
         <h4 className='font-ubuntu font-bold text-2x text-[#7c269b] border-b-2 border-[#7c269b] cursor-pointer'>View All Courses</h4>
         
       </div>

    </div>
     </div>

    {/* Approach Training Section */}

    <div className='mt-24 px-4 md:px-10 lg:px-24 flex flex-col md:flex-row gap-10'>
      <div>
        <img src={imgApprochu} alt="img Approach" className='w-[500px] h-[600px]' />
      </div>
      <div className='text-center  md:text-left'>
        <h3 className='mb-5 font-ubuntu font-bold text-2xl md:text-3xl max-w-full md:max-w-[500px]'>The 

          <span className='bg-[#7c269b] text-white px-2 '> Purple Academy</span> 

             Approach to Training  </h3>
        
          {training.content.map((content,index)=>(
            <div className='flex flex-col md:flex-row items-center md:items-start mt-4 gap-5 w-full md:w-[800px] border-b pb-4'>
              <img src={content.logo} alt="" className='w-12 h-12'  />
            <p className='text-lg  '>{content.detail}</p>
            
              
            </div>
          ))}
      

      </div>
      
    </div>


    {/* video slider */}
    <div className='mt-20'>
       <VideoSlider />
      </div>

  
  {/* Faqs */}
    <div>
    <Frequency />
    </div>



{/* Contact footer */}

<div className='bg-[#7c269b] w-full h-auto leading-10 py-10 mt-20'>

 <div className='flex flex-col justify-center text-center gap-5'> 
 <h3 className='font-ubuntu text-5xl text-white font-bold'>Still have questions?</h3>
  <p className='text-white font-normal text-lg'>Can't find the answers you're looking for? Please feel free to chat with our team</p>

<button className=' m-auto w-[160px] text-[#7c269b]  bg-white px-4 py-2 rounded  text-lg font-code '>
  Contact Us
</button>

 </div>

</div>


{/* footer */}


<div>
<Footer />
</div>

    </section>
  )
}

export default Dash