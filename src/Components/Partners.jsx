import React from 'react'
import PartnerImg from '../Asstes/partner_one.706059f7.jpg'
import PartnerImg1 from '../Asstes/partner_two.cc640688.jpg'
import Footer from '../Components/Footer'

const Partners = () => {

const parnerName=[
    {
      name:"MEASI Institute Of Information Technology",
      img:PartnerImg
    },
    {
        name:"Mohamed Sathak Group of Educational Institutions",
        img:PartnerImg1
      }
]

  return (
    <section>
       <div className='mt-5'>
       <h2 className='font-ubuntu font-extrabold text-5xl text-center text-[#7c269b] '> Partners</h2>
       <div className='flex flex-col gap-3 justify-center items-center'>
        {
            parnerName.map((d,i)=>(
                <div key={i} className='p-10 mt-10'>
                    <h3 className='text-black font-bold text-3xl'>{d.name}</h3>
                    <img src={d.img} alt="PartnerImage" className='mt-5' />
                </div>
            ))
        }
       </div>
       </div>
       <Footer />
    </section>
  )
}

export default Partners