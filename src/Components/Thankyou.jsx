import React from 'react'
import logo from '../Asstes/applogo.svg'
import thank from '../Asstes/thankyou.webp'
const Thankyou = () => {
  return (
    <section>
        <div className='flex justify-center'>
        <img src={logo} alt="logo" className='p-5 ' />
        </div>
         
        <div className='flex  justify-center'>
        <img src={thank} alt="" className='h-500px[] w-[750px]' />  
        </div>
        <h3 className='font-ubuntu text-4xl text-center w-[680px] h-[104px] ml-[430px]'>Our program coordinators will be in
        touch with you soon</h3>
    </section>
  )
}

export default Thankyou