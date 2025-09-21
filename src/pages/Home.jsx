import React from "react";
import Header from "../components/Header";
import Logo from "../assets/Logo.png";
import { videoBanner } from "../utils/config";

export default function Home() {
  return (
    <div className="w-full min-h-screen text-black mb-0">
      <Header className={"text-white"} />

      {/* Hero Section with Video Background */}
      <div className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          type="video/mp4"
          src={videoBanner}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-50 bg-white/50">
          <div className="text-green-700 dmSans text-4xl md:text-6xl font-bold mt-4 text-center font-sans">
            Welcome Home
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="w-full max-w-5xl mx-auto mt-16 px-4 py-12 text-black">
        <div className="dmSans text-4xl md:text-6xl font-bold text-center font-sans mb-6 text-green-500">
          Welcome To The Family
        </div>
        <div className="dmSans text-lg md:text-2xl text-center text-green-400">
          <p>
            We're so glad you're here!
            <br />
            Wherever life has brought you, know that God's love is reaching out
            to you today.
            <br />
            You are treasured by Him, and there's a place for you in this
            family.
            <br />
            Welcome home!
          </p>
        </div>
      </div>

      {/* Message Section */}
      <div className="bg-white w-full py-10 px-4">
        <div className="text-black text-center p-5 pb-2 font-sans text-base md:text-lg text-blue-300">
          LOOKING FOR ANSWER? THINK YOUR VISITING THIS SITE IS A COINCIDENCE?
          <br />
          YOUR BEING HERE TODAY IS NO COINCIDENT!
        </div>
        <div className="text-black text-2xl md:text-4xl text-center p-5 pt-2 font-sans font-bold text-blue-700">
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
        <footer className="bg-green-400 text-white py-6 mt-10 h-100">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
            {/* Logo */}
            <img src={Logo} alt="Church Logo" className="w-16 h-16" />

            {/* Text */}
            <p className="text-center text-sm md:text-base">
              Rise of Church of Jesus Christ Int&apos;l. Min. Inc.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
