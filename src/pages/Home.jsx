import React from "react";
import Header from "../components/Header";
import Logo from "../assets/newlogo.png";
import { videoBanner } from "../utils/config";
import Background from "../assets/bg.jpg";

export default function Home() {
  return (
    <div className=" w-full min-h-screen text-black mb-0">
      <Header className={"text-white"} />

      {/* Hero Section with Video Background */}
      <div className="relative h-screen w-full min-h-[60vh] flex items-center justify-center overflow-hidden select-none">
        <video
          className="absolute inset-0 w-full h-full object-cover  z-0 "
          autoPlay
          loop
          muted
          controls={false}
          type="video/mp4"
          src={videoBanner}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-50 bg-white/50">
          <div className="text-green-700 dmSans text-6xl md:text-6xl font-bold mt-4 text-center font-sans">
            Welcome Home
          </div>
        </div>
      </div>

      
      <div
  className="w-full max-w-100px md:h-200 mx-auto mt-16 px-4 py-12 bg-cover h-100 bg-center object-cover relative bg-gray-500"
  style={{ backgroundImage: `url(${Background})` }}
>
  
  <div className="absolute inset-0  bg-opacity-50 bg-gray-500/50"></div>

  
  <div className="relative z-10 text-center ">
    <div className="dmSans text-4xl md:text-6xl font-bold mb-6 text-blue-900">
      Welcome to the Family
    </div>
    <div className="dmSans text-lg md:text-2xl text-blue-100">
      <p>
        We're so glad you're here!
        <br />
        Wherever life has brought you, know that God's love is reaching out to you today.
        <br />
        You are treasured by Him, and there's a place for you in this family.
        <br />
        Welcome home!
      </p>
    </div>
  </div>
</div>

      
      <div className="bg-white w-full py-10 px-4">
        <div className="text-blue-300 text-center p-5 pb-2 font-sans text-base md:text-lg">
          LOOKING FOR ANSWER? THINK YOUR VISITING THIS SITE IS A COINCIDENCE?
          <br />
          YOUR BEING HERE TODAY IS NO COINCIDENT!
        </div>
        <div className=" text-2xl md:text-4xl text-center p-5 pt-2 font-sans font-bold text-blue-700">
          God Brought you here for His purpose.
        </div>

        {/* Responsive YouTube Video */}
        <div className="flex justify-center pt-10 pb-10 mb-10">
          <div className="w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/0dOHXPUGAvk"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-700 w-full text-black">
        <footer className="foot text-white py-6 mt-10 h-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Logo */}
            <img src={Logo} alt="Church Logo" className="w-50 h-16 pl--10" />
            
          </div>
        </footer>
      </div>
    </div>
  );
}
