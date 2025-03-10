import React, { useState } from "react";
import logo from "../Asstes/applogo.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const isActive = (path)=> location.pathname === path


  

  return (
    <header className="flex items-center justify-between text-center  mt-3 md:px-20 py-3 text-2xl   ">
     
      <div className="flex items-center ">
        <a href="#" className="font-bold">
          <img src={logo} alt="Logo" className="" />
        </a>
      </div>

      
      <nav className="hidden  md:flex space-x-6 text-gray-800 text-2xl">
        <ul className="flex space-x-6 ps-10">
          <li>
          <button 
              onClick={() => navigate("/")} 
              className={`${
                isActive("/") ? "text-[#7c269b] border-b-2 border-[#7c269b] bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)]" : "hover:text-[#7c269b] hover:border-b-2 border-[#7c269b] hover:bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)]"
              } font-medium`}>
              Home
            </button>
          </li>
          <li>
          <button 
              onClick={() => navigate("/all-courses")} 
              className={`${
                isActive("/all-courses") ? "text-[#7c269b] border-b-2 border-[#7c269b] bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)]" : "hover:text-[#7c269b] hover:border-b-2 border-[#7c269b] hover:bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)]"
              } font-medium`}>
              All Courses
            </button>
          </li>
          <li>
          <button 
              onClick={() => navigate("/Testimonials")} 
              className={`${
                isActive("/Testimonials") ? "text-[#7c269b] border-b-2 border-[#7c269b] bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)]" : "hover:text-[#7c269b] hover:border-b-2 border-[#7c269b] hover:bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)]"
              } font-medium`}>
              Testimonials
            </button>
          </li>
          <li>
            <a href="#" className="hover:text-[#7c269b] hover:bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)] hover:border-b-2 border-[#7c269b]">
              Partners
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-[#7c269b] hover:bg-[radial-gradient(50%_50%_at_50%_50%,#f6dcff_0,rgba(246,220,255,0)_100%)] hover:border-b-2 border-[#7c269b]">
              Why Us?
            </a>
          </li>
        </ul>
      </nav>

      <button className="hidden md:block bg-[#7c269b]  text-white px-4 py-2 rounded hover:bg-[#692084]  font-code text-lg text-center  ">
        Contact Us
      </button>

     
      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "☰"}
      </button>

      
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <a href="/" className="text-[#7c269b] font-medium">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7c269b]">
                All Courses
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7c269b]">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7c269b]">
                Partners
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#7c269b]">
                Why Us?
              </a>
            </li>
            <li>
              <button className="bg-[#7c269b] text-white px-4 py-2 rounded-lg hover:bg-[#692084]">
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;

