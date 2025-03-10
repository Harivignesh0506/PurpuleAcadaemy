import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaPlay } from "react-icons/fa";
import cardimg from "../Asstes/Jothy Krishnan.webp";
import cardimg2 from "../Asstes/Prakash.webp";
import cardimg3 from "../Asstes/Santhosh.webp";

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

const VideoSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20 mt-10">
      <h2 className="text-3xl font-bold text-center mb-6">Testimonials</h2>
      <Slider {...settings}>
        {videoData.map((video, index) => (
          <VideoCard key={index} video={video} />
        ))}
      </Slider>
    </div>
  );
};

const VideoCard = ({ video }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="relative group">
      <div className="relative w-[399px] h-[550px] bg-black rounded-lg overflow-hidden">
        {!isPlaying && (
          <img
            src={video.img}
            alt={video.name}
            className="absolute w-[400px] h-[550px] object-cover"
          />
        )}

        <video
          ref={videoRef}
          src={video.videoUrl}
          className="w-full h-full object-cover"
          onClick={handlePlayPause}
        />

        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer bg-black bg-opacity-40"
            onClick={handlePlayPause}
          >
            <FaPlay className="text-white text-5xl bg-gray-900 bg-opacity-50 p-4 rounded-full" />
          </div>
        )}
      </div>
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-lg font-bold">{video.name}</h3>
        <p className="text-sm">{video.course}</p>
      </div>
    </div>
  );
};

export default VideoSlider;
