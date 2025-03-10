import React from 'react'
import cardimg from "../Asstes/Jothy Krishnan.webp";
import cardimg2 from "../Asstes/Prakash.webp";
import cardimg3 from "../Asstes/Santhosh.webp";

const Testimonials = () => {

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
  
  


  return (
       <section className='p-5'>
        <div>
            <h2 className='font-ubuntu text-center text-5xl mt-10 font-bold text-[#7c269b]'>Testimonials</h2>
        </div>
      {/* video div */}

          <div>
              {videoData.map((d,i)=>(
                <div>
                  
                </div>
              ))}
          </div>
       </section>
  )
}

export default Testimonials