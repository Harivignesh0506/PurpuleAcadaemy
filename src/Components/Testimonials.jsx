import React, { useRef, useState } from 'react'
import cardimg from "../Asstes/Jothy Krishnan.webp";
import cardimg2 from "../Asstes/Prakash.webp";
import cardimg3 from "../Asstes/Santhosh.webp";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import Footer from '../Components/Footer'


const Testimonials = () => {

  const[playIndex,setPlayIndex]=useState(null);

  
  const videoRefs =useRef([]);

  const videoData = [
    {
      name: "Jyothi Krishna",
      course: "Front End Engineering",
      img: cardimg,
      videoUrl: "https://purpleacademy-be.s3.ap-south-1.amazonaws.com/testimonials/Jothy+Krishnan.mp4",
    },
    {
      name: "Prakash",
      course: "Front End Engineering",
      img: cardimg2,
      videoUrl: "https://purpleacademy-be.s3.ap-south-1.amazonaws.com/testimonials/Prakash+(1).mp4",
    },
    {
      name: "Santhosh",
      course: "Front End Engineering",
      img: cardimg3,
      videoUrl: "https://purpleacademy-be.s3.ap-south-1.amazonaws.com/testimonials/Santhosh+M+(1).mp4",
    },
  ];
  
  const handlePlayPause=(index)=>{
    const video = videoRefs.current[index];

    if(playIndex === index){
      video.pause();
      setPlayIndex(null);
    }else{
      if(playIndex !== null){
        videoRefs.current[playIndex].pause();
      }
      video.play();
      setPlayIndex(index);
    }
  }
  


  return (
       <section className=''>
        <div>
            <h2 className='font-ubuntu text-center text-5xl mt-10 font-bold text-[#7c269b]'>Testimonials</h2>
        </div>
      {/* video div */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-[100px]">
              {videoData.map((d,i)=>(
                <div className="relative group overflow-hidden rounded-lg shadow-lg ">
                    <video
              ref={(el) => (videoRefs.current[i] = el)}
              src={d.videoUrl}
              className="w-full rounded-lg shadow-lg"
            />
                 
                   <button className="absolute inset-0 flex items-center justify-center text-white text-3xl bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
                   onClick={()=>handlePlayPause(i)}
                   >
                    {playIndex === i ? <FaPlay />:<FaPause />}
                   </button>
                    
                    
                


                

                <div className='absolute bottom-0 left-0 w-full bg-gradient-to-t from-black p-5 text-white font-bold text-2xl '>
                  <h3>{d.name}</h3>
                  <h3>{d.course}</h3>
                </div>

                </div>
              ))}
          </div>
          <div>
            <Footer />
          </div>
       </section>
  )
}

export default Testimonials