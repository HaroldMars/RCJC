import React from "react";
import Header from "../components/Header";
import Logo from "../assets/Logo.png";
import { videoBanner } from "../utils/config";


export default function Home() {
    return (
        <div className="w-screen h-fit text- mb-0">
          <Header className={"text-white"} />
          
          <div className="w-screen h-fit text-black p-70">
            <div className="absolute bg-black w-[100%] h-[100%] left-0 top-0 overflow-hidden z-[-999]">
              <video className="absolute w-full h-[100%] bg-gray-200 object-cover" autoPlay loop muted type="video/mp4" src={videoBanner} />
            </div>
            <div className="text-white dmSans text-[500%] font-bold mt-10px font text-center font-sans">Welcome Home</div>
            
          </div>
         
          <div className="w-150% h-[100%] mt-32 text-black p-70 pb-150">
            <div className="dmSans text-[500%] font-bold mt-10px font text-center font-sans">Welcome To Family</div>
            <div className="dmSans text-[150%] mt-10px text-center"> <p>We're so glad you're here!<br />

Wherever life has brought you, know that God's love is reaching out to you today.
<br />
You are treasured by Him, and there's a place for you in this family.
<br />
Welcome home!</p></div>
          </div>
          <div className="bg-white w-screen h-[100%]">
            <div className=" text-black text-center p-5 pb-2 font-sans">
              LOOKING FOR ANSWER? THINK YOUR VISITING THIS SITE IS A COINCIDENCE? 
              <br />
              YOUR BEING HERE TODAY IS NO COINCIDENT!
            </div>
            <div className=" text-black text-[200%] text-center p-5 pt-2 font-sans md-50">
              <b>God Brought you here for His purpose.</b>
            </div>
            {/* video youtube */}
            {/* For a responsive 16:9 aspect ratio */}
            <div className="relative flex justify-center pt-10 pb-10 mb-90 rounded-2xl ">
              <iframe
                className="absolute justify-center "
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/0dOHXPUGAvk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        <div className="bg-gray-700 w-screen y-100 text-black ">
            <footer className="bg-pink-300 text-white py-6 mt-100">
              <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
                {/* Logo */}
                <img src={Logo} alt="Church Logo" className="w-16 h-16" />

                {/* Text */}
                <p className="text-center text-sm md:text-base">
                  Rise of Church of Jesus Christ Int'l. Min. Inc.
                </p>
              </div>
            </footer>
            </div>
        </div>
    );
}