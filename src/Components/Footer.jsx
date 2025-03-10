import React from 'react';
import logo from '../Asstes/applogo.svg';
import { FaFacebookF, FaInstagram, FaPhoneAlt } from 'react-icons/fa';
import { TbBrandLinkedinFilled } from 'react-icons/tb';
import { MdOutlineMail } from 'react-icons/md';

const Footer = () => {
  const config = [
    {
      img: logo,
      content: 'Your New Career Path Awaits!',
      cont1: 'Rise to your true potential through Purple Academy',
      fb: <FaFacebookF />,
      insta: <FaInstagram />,
      in: <TbBrandLinkedinFilled className='rounded-full' />
    }
  ];

  return (
    <section className='bg-white shadow'>
      <div className='container mx-auto px-4 py-10'>
        <div className='flex flex-wrap justify-between text-black px-8'>
          {config.map((d, index) => (
            <div key={index} className='w-full md:w-1/2 lg:w-1/3 mb-6 md:mb-0'>
              <img src={d.img} alt='logo' className='w-32' />
              <p className='mt-5 text-start'>{d.content}</p>
              <p className='text-start'>{d.cont1}</p>
              <div className='flex gap-10 mt-5 text-2xl '>
                <a href='#'>{d.fb}</a>
                <a href='#'>{d.insta}</a>
                <a href='#'>{d.in}</a>
              </div>
            </div>
          ))}
          <div className='w-full md:w-1/2 lg:w-2/3 flex flex-wrap justify-between text-start'>
            <div className='w-1/2 md:w-1/3 mb-6'>
              <h4 className='text-xl font-bold text-[#7c269b]'>Know Purple Academy</h4>
              <a href='/' className='block mt-4 font-semibold'>Home</a>
              <a href='#' className='block mt-2 font-semibold'>Why Us</a>
            </div>
            <div className='w-1/2 md:w-1/3 mb-6 '>
              <h4 className='text-xl font-bold text-[#7c269b]'>Useful Links</h4>
              <a href='/' className='block mt-4 font-semibold'>Contact us</a>
              <a href='#' className='block mt-2 font-semibold'>Terms & Conditions</a>
            </div>
            <div className='w-full md:w-1/3'>
              <h4 className='text-xl font-bold text-[#7c269b]'>Get in Touch</h4>
              <a href='tel:+917305971619' className='flex items-center gap-2 mt-4 font-semibold'>
                <FaPhoneAlt className='text-[#7c269b] text-xl' /> +91 73059 71619
              </a>
              <a href='mailto:hello@thepurpleacademy.in' className='flex items-center gap-2 mt-2 font-semibold'>
                <MdOutlineMail className='text-[#7c269b] text-xl' /> hello@thepurpleacademy.in
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-[#7c269b]'>
        <p className='text-white text-center py-2'>Copyright © 2025 Purple Academy</p>
      </div>
    </section>
  );
};

export default Footer;
