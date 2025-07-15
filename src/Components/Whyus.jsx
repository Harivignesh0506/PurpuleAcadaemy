import React, { useState } from 'react'
import Banner from '../Asstes/aboutBanner.webp'
import PurpuleLogo from '../Asstes/purpleLogo.png'
import dood from '../Asstes/doodleblueLogo.png'
import whyus1 from '../Asstes/why-us-1.png'
import whyus2 from '../Asstes/why-us-2.png'
import whyus3 from '../Asstes/why-us-3.png'
import whyus4 from '../Asstes/why-us-4.png'
import whyus5 from '../Asstes/why-us-5.png'
import Footer from "./Footer";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Whyus = () => {

  const[currIndex,setCurrIndex]=useState(0);
const whyDetails =[
  {
    logo: whyus1,
    Detail:"You get the benefit of a classroom setting that allows you to get hands-on training from senior developers who teach more than just outdated theories."
  },
  {
    logo: whyus2,
    Detail:"We train you to be job-ready through live assessments that challenge you and help you build an impressive CV"
  },
  {
    logo: whyus3,
    Detail:"We prepare you for the global nature of the Tech industry by including sessions on corporate communication and etiquette"
  },
  {
    logo: whyus4,
    Detail:"We help inspire our students through guest lectures from Business Leader who share valuable industry insights"
  },
  {
    logo: whyus5,
    Detail:"Most importantly, we provide placement assistance to all our students. Many past students now work for international agencies and get global exposure despite having no prior tech background or experience.View their testimonials here"
  },
]

const images =[
  require("../Asstes/project-details-1.webp"),
  require("../Asstes/project-details-2.webp"),
  require("../Asstes/project-details-3.webp")
]


  

const nextSilde =()=>{
  setCurrIndex((prevIndex)=>(prevIndex +1)% images.length)
}

const PrevSilde =()=>{
  setCurrIndex((prevIndex)=>(prevIndex -1 + images.length)% images.length)
}

  return (
    <section>
        <div>
            <h2 className='font-ubuntu font-extrabold text-4xl py-5 text-[#7c269b] text-center my-5'>Why Us?</h2>
            
      {/* Image */}
      <img src={Banner} alt="IT Experts Learning" className=" px-40 absolute h-auto rounded-lg" />

      {/* Overlay Text */}
      <div className="bg-[#7c269b] text-white h-[250px] text-2xl font-bold pt-[200px] text-center mt-[400px] w-full bottom-3">
        Empowering the next generation of IT experts, one course at a time.
      </div>
       <div className='py-10 '>
        <p className='text-center text-lg font-medium leading-8 px-40'>Purple Academy helps you build and advance in your software engineering career. Our comprehensive program covers an unconventional course syllabus that includes hackathons, debates, pair programming, workshops, and lots of first principles thinking! This is a unique accelerated learning that gets you trained and ready for a career in the most happening industry.</p>
        <img src={PurpuleLogo} alt="" className='opacity-20 brightness-100 absolute mt-5'/>
          <div className='px-72 mt-16 '>
          {whyDetails.map((d,i)=>(
            <div
            key={i}
            className='flex items-center justify-center gap-10'
            >
              <img src={d.logo} alt="" className='border border-[#7c269b] p-3 rounded-lg mt-5 w-[90px] h-[88px]' />
              <p className='text-lg'>{d.Detail}</p>
            </div>
          ))}
          </div>
       </div>
       <div>
       <img src={PurpuleLogo} alt="" className='opacity-20 brightness-100 absolute mt-5'/>
       <img src={dood} alt="" className='opacity-50 brightness-80 absolute mt-5 ml-[1270px]'/>
       <div className=' leading-6 px-20 text-xl py-10'>
        <h3 className='font-ubuntu font-bold text-4xl text-center'>Purple Academy <span className='text-[#7c269b]'>x</span> doodleblue</h3>
        <p className='mt-5'>Starting out as the brainchild of doodleblue, we were able to leverage the 10+ years of experience to train the next generation of software engineers/product managers/product designers/QA
           automation Engineers to become successful in this highly competitive industry and build the best digital products.</p>
        <p className='mt-5'>doodleblue is a digital strategy consulting boutique that leads digital transformations for global brands, leading consultancies, famous startups, fortune 500s and governments.</p>   
       </div>
       </div>
       <div className='flex flex-col justify-center items-center'>
        <h3 className='font-ubuntu font-bold text-2xl text-center'>Brands our software engineering experts have consulted & worked with</h3>
        <div>
          <img src={images[currIndex]} alt="" className='shadow-lg mt-5' />
          <button
        onClick={PrevSilde}
        className=" ml-[300px] left-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg mt-10"
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSilde}
        className="ml-2 right-5 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-lg"
      >
        <FaArrowRight size={20} />
      </button>
        </div>
       </div>
        </div>
        <Footer />
    </section>  
  )
}

export default Whyus