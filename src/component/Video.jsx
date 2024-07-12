import React, { useEffect, useRef } from "react";
import video from "../assets/video.mp4";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center ">
      <video className="w-full mt-5" controls muted ref={videoRef} autoPlay>
        <source src={video} type="video/mp4" />
        
      </video>
    </div>
  );
}

export default Video;
