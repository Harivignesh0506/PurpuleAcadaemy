    import React, {  useState } from "react";
    import { useParams} from "react-router-dom";
    import Course from "../Course.json";
    import { IoIosCheckmarkCircle } from "react-icons/io";
    import { FaRegCalendarAlt } from "react-icons/fa";
    import { useNavigate } from "react-router-dom";
    import { ToastContainer, toast } from 'react-toastify';
    import { Link } from "react-scroll";
    import projects from '../NestedPage.json'
    import { CgMenuLeft } from "react-icons/cg";
    import Footer from "./Footer";

    const CourseDetail = () => {
      const { name } = useParams();
      const decodedName = decodeURIComponent(name);

      const normalize = (str) => str.replace(/\s+/g, "-").replace(/[()]/g, "").toLowerCase();

      const navigate = useNavigate();
      const [fromData,setFormData]=useState({name:"",email:"",mobileNumber:"",coursePreference:"",})
      
      
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


      // Define topics BEFORE using them
      const topics = [
        { 
          name: "Node.js", 
          description: "Node.js is an open-source server environment. It is cross-platform and runs on Windows, Linux, Unix, and macOS."
        },
        { name: "NPM", description: "NPM (Node Package Manager) is used to manage JavaScript packages." },
        { name: "Asynchronous programming", description: "Asynchronous programming allows non-blocking execution using callbacks, promises, and async/await." },
        { name: "ES6/ES7", description: "Modern JavaScript features including arrow functions, classes, template literals, and more." },
        { name: "MongoDB", description: "MongoDB is a NoSQL database for storing data in JSON-like format." },
        { name: "Socket.IO", description: "Socket.IO enables real-time, bi-directional communication between web clients and servers." },
        { name: "JWT Authentication", description: "JSON Web Tokens (JWT) provide secure authentication and authorization for APIs." },
        { name: "Mongoose", description: "Mongoose is an ODM (Object Data Modeling) library for MongoDB in Node.js." },
        { name: "File and image uploads", description: "Handle file and image uploads using Multer in Node.js." },
        { name: "Email sending", description: "Send emails using Nodemailer in Node.js applications." },
        { name: "Application deployment with Heroku", description: "Deploy Node.js applications on Heroku with ease." },
        { name: "Version control with Git", description: "Track and manage code changes using Git." },
        { name: "GitHub", description: "Host and collaborate on code repositories with GitHub." },
        { name: "REST API Design", description: "Design RESTful APIs following best practices for scalability and maintainability." },
        { name: "Code testing and Debugging", description: "Use testing frameworks like Jest and Mocha for debugging and testing code." }
      ];


      const tasks = [
        "Building and maintaining web applications",
        "QA testing, Troubleshooting and debugging",
        "Assessing the efficiency and speed of current applications",
        "Keeping on top of new technologies",
        "Managing hosting environments"
      ];

      // ✅ Initialize state with the first topic instead of an empty object
      const [selectedTopic, setSelectedTopic] = useState(topics[0]); 

      // Find the course that matches the URL
      const selectedCourse = Course.find(
        (c) => normalize(c.name) === normalize(decodedName)
    );
      
      if (!selectedCourse) {
        return <p className="text-2xl text-center">Course not found!</p>;
      }

      return (
        <section className="container mx-auto">
        <div>
        <div>
            {/* Course Header */}
            <div className="bg-[#F2E9F5] font-ubuntu h-[500px] px-10 flex flex-col justify-center leading-10">
              <nav className="text-lg mb-5 font-ubuntu">
                <Link to="/" className="hover:underline">Home</Link> &gt;
                <Link to="/all-courses" className="hover:underline ml-2">All Courses</Link> &gt;
                <span className="ml-2 text-[#7c269b] font-semibold">{selectedCourse.name}</span>
              </nav>
              <h2 className="font-ubuntu text-7xl font-bold">{selectedCourse.name}</h2>
              <p className="mt-5 text-lg w-[650px] flex gap-2">
                <IoIosCheckmarkCircle className="text-3xl text-[#7c269b]" />
                {selectedCourse.para}
              </p>
            </div>


            <div className="">
              {/* Course Image & Details */}
            <div className="relative w-[400px] ml-[1000px] mt-[-250px]">
              <div className="border rounded-3xl w-[400px]">
                <img src={selectedCourse.img} className="rounded-3xl w-full h-[250px]" alt={selectedCourse.name} />
              </div>
              <div className="border w-full rounded-3xl h-[150px] bg-white mt-[-40px] relative z-10">
                <h3 className="font-bold font-ubuntu text-2xl p-5">{selectedCourse.name}</h3>
                <h4 className="font-ubuntu px-5 flex gap-2 items-center">
                  <FaRegCalendarAlt className="text-[#7c269b]" />
                  {selectedCourse.date}
                </h4>
                <Link to="apply-form" smooth={true} duration={500} offset={-50}>
    <button className="border bg-[#7c269b] w-full rounded-2xl mt-4 p-2 font-ubuntu text-white">
      Apply Now!!
    </button>
  </Link>

              </div>
            </div>

            {/* Sidebar Section */}
            <h4 className="text-3xl font-ubuntu font-semibold ml-8">{selectedCourse.skillstitile}</h4>
            <div className="flex flex-col md:flex-row  p-6 rounded-lg shadow-lg mt-10">
            
              {/* Sidebar - Topics List */}

              <ul className="bg-white shadow-lg rounded-lg p-5 w-full md:w-1/3">
                {topics.map((topic) => (
                  <li
                    key={topic.name}
                    className={`flex items-center gap-2 p-2 mb-2 rounded-md cursor-pointer ${
                      selectedTopic.name === topic.name ? "bg-[#eed6f6] text-white font-bold" : "hover:bg-[#eed6f6]"
                    }`}
                    onClick={() => setSelectedTopic(topic)} // Change selected topic on click
                  >
                      <IoIosCheckmarkCircle className="text-3xl text-[#7c269b]" /> {topic.name}
                  </li>
                ))}
              </ul>

              {/* Content Section - Details */}
              <div className="flex justify-center ">
              <div className="bg-[#F2E9F5] w-[400px] h-[300px] rounded p-2  ">
              <h2 className="text-2xl font-bold">{selectedTopic.name}</h2>
              <p className="mt-2">{selectedTopic.description}</p>
              </div>
                
              {/* form */}
              <div className="ml-10  ">
              <form 
              id="apply-form"
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
              <ToastContainer/>
              </div>

              </div>
            </div>
          </div>



        
            </div>

          {/* Projects you may build */}

          <div className="px-16 py-10 mt-20 flex flex-col gap-5 ">
            <h3 className="text-4xl font-ubuntu font-bold">Projects you may build</h3>
              {
                projects.map((d,i)=>(
                  <div className=" border bg-white rounded p-5 gap-10 shadow text-2xl border-none">
                    <h4 className=" ">{d.descreiption}v</h4>
                  </div>
                ) )
              }
          </div>


          <div className=" bg-purple-100 ">
          <h4 className="text-center py-10 font-ubuntu font-bold text-4xl"> Your role as a Backend (NodeJS) developer may include</h4>
          
          <div className="flex flex-wrap justify-center gap-6  py-5  px-28 ">
              
          
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white  rounded-2xl shadow-lg h-[200px]   border border-gray-200 w-1/3 p-4 "
          >
            <div className="text-purple-600 text-4xl mt-5 mb-2 "><CgMenuLeft /></div>
            <p className="text-gray-700 font-semibold">{task}</p>
          </div>
        ))}
      </div>
          </div>

          <Footer />

                </div>
        </section>
      );
    };

    export default CourseDetail;
