import React, { useEffect } from "react";
import Header from "../components/Header";
import Logo from "../assets/logo.png";
import { videoBanner } from "../utils/config";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
import Background from "../assets/bg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1 second
  }, []);
  return (
    <div className="nav-text bg-white w-screen h-fit font-Roboto text-black">
      <Header />

      {/* Hero Section with Video Background */}
      <div
        className="relative h-screen w-full min-h-[60vh] flex items-center justify-center overflow-hidden select-none"
        data-aos="fade-in" // Animation for the hero section
      >
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          autoPlay
          loop
          muted
          controls={false}
          type="video/mp4"
          src={videoBanner}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-50 bg-white/50">
          <div
            className="homee font-Roboto text-6xl md:text-6xl font-bold mt-4 text-center"
            data-aos="fade-up"
          >
            Welcome Home
          </div>
        </div>
      </div>

      <div
        className="w-full max-w-100px md:h-200 mx-auto mt- px-4 py-12 bg-cover h-100 bg-center object-cover relative bg-gray-500"
        style={{ backgroundImage: `url(${Background})` }}
        data-aos="fade-in"
      >
        <div className=" absolute inset-0  bg-opacity-50 bg-gray-500/50"></div>

        <div className="relative z-10 text-center">
          <div
            className="family font-Montserrat text-4xl md:text-6xl font-bold mb-6 "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to the Family
          </div>
          <div
            className="description font-Roboto text-lg md:text-2xl "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p>
              We're so glad you're here!
              <br />
              Wherever life has brought you, know that God's love is reaching
              out to you today.
              <br />
              You are treasured by Him, and there's a place for you in this
              family.
              <br />
              Welcome home!
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white w-full py-10 px-4">
        
        <div class="home-discover">
  Discover the Good News
</div>
<div class="home-hope">
  Feeling lost or seeking something more? Watch this short message to understand God's simple plan for your life and experience genuine hope and a new beginning today.
</div>
       

        {/* Responsive YouTube Video */}
        <div
          className="flex justify-center pt-10 pb-10 mb-10"
          data-aos="fade-up"
        >
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden ">
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

      <div class="footer">
        <div class="footer-content">
          <div class="connect-text">connect with us</div>
          <div class="links">
            <a
              href="https://www.facebook.com/rcjcim"
              target="_blank"
              rel="noopener noreferrer"
              class="link"
            >
              <img src={fb} alt="Facebook" class="icon" />
              <span class="link-text">/rcjcim</span>
            </a>
            <a href="mailto:rcjcim2003@gmail.com" class="link">
              <img src={Gmail} alt="Email" class="icon" />
              <span class="link-text">rcjcim2003@gmail.com</span>
            </a>
          </div>
        </div>
        <div class="copyright">RCJCIM | 2025</div>
      </div>
    </div>
  );
}