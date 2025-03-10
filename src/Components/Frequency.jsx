import React, { useState } from 'react'
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import faqs from '../Asstes/faq.gif'



const Frequency = () => {

const [openFaq,setOpenfaq]=useState(null);


const faqList =[
    {
        title:"Are your courses beginner friendly?",
        detail:"Yes they are. The courses are created keeping in mind the basic requirements of the learners. The course is put together by industry leaders and covers the most essential aspects of the tech stack.",
    },
    {
        title:"How long are your courses?",
        detail:"Our course range from 3-4 months depending on the program selected.",
    },
    {
        title:"Do I get a certificate?",
        detail:"Yes you do, provided you complete the course and fulfil the course-related pre-requisites.",
    },
    {
        title:"Do I get in-person help from teachers?",
        detail:"Yes you do. We focus on 1 on 1 coaching to help the students learn and adapt to the requirements of the industry.",
    },
    {
        title:"I have more questions. Who do I reach out to?",
        detail:"You can reach us at +91-6381283007 +91-7305971619",
    },
    {
        title:"Do you help with placements",
        detail:"Yes, we do. Every student who gets certified with Purple Academy will be given placement assistance. Please speak to our academic counsellor to know more on this.",
    },
]

const toggleFaq =(index)=>{
    setOpenfaq(openFaq === index ? null : index)
}

  return (

    <div className='mt-20 px-4 '>
        <h1 className="text-center text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
        
        <div className='w-full md:w-1/2'>
    
    {faqList.map((faq, index) => (
      <div key={index} className="border-b py-3">
        <button
          onClick={() => toggleFaq(index)}
          className="flex justify-between items-center w-full text-left text-lg font-medium"
        >
          <span className='font-ubuntu'>{faq.title}</span>
          <span className="text-xl">
            {openFaq === index ? <IoIosRemoveCircleOutline className='text-[#7c269b]' /> : <IoIosAddCircleOutline className='text-[#7c269b]' />}
          </span>
        </button>
        {openFaq === index && (
          <div className="mt-2 text-gray-600">{faq.detail}</div>
        )}
      </div>
    ))}
</div>
<div>
    <img src={faqs} alt="" className='w-[400px] h-[350px] object-contain shadow-lg' />
</div>

  </div>
    </div>

  )
}

export default Frequency