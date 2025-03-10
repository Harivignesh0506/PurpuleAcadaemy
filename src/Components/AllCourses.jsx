import React, { useState } from "react";
import Course from '../Course.json'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";


const AllCourses = () => {

const[filter,setFilter]=useState("")

const navigate = useNavigate()



const filterCourse = Course.filter((data)=>

  data.name.toLowerCase().includes(filter.toLowerCase())
) 


  return (
    <section className=" text-center">
     
     <div className="py-6 px-2">

        
      <div className="">
      <h4 className="text-5xl font-bold text-[#7c269b]">
        Purple Academy Courses Library
      </h4>

     <div className="flex justify-center mt-10">
     <div className="bg-[#f2e9f5] rounded-full py-4 flex items-center justify-center  w-[400px]">
      <div className="flex items-center justify-center">
            
            <input
             type="text" 
             placeholder="Search for courses"
             value={filter}
             onChange={(e)=>setFilter(e.target.value)}
             className="p-2 flex-grow rounded-full outline-none text-[#696e7b] bg-white absolute text-xl w-[350px] "
             
             />
             <button className="bg-[#7c269b] rounded-full p-2 w-[100px] relative ml-64 text-white hover:bg-[#7c4192] text-xl">Search</button>
      </div>
     </div>
     </div>

      </div>

      <div className=" flex flex-wrap gap-10 mt-10 justify-center ">
         {filterCourse.length >0 ? (
          filterCourse.map((d,i)=>(
            <div key={i} className="px-2">
            <div className="relative w-[400px]">
              <div className="border w-full rounded-3xl">
                <img src={d.img}  className="rounded-3xl w-full h-[250px]" />
              </div>
              <div className="border w-full rounded-3xl h-[150px] bg-white mt-[-40px] relative z-10">
                <h3 className="font-bold font-ubuntu text-2xl p-5">{d.name}</h3>
                <button className="border bg-[#7c269b] w-full rounded-2xl mt-9 p-2 font-ubuntu text-white"
                onClick={() => navigate(`/course/${d.name.replace(/\s+/g, '-').toLowerCase()}`)}>View Course</button>
              </div>
            </div>
          </div>
          
            ))
         ):( <p  className=" font-bold p-14 text-2xl">No records found !!!</p> )
        }
      </div>

     </div>
     
<div className="w-full mt-3">

</div>

<Footer/>

    </section>
  );
};

export default AllCourses;
