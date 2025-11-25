import React from "react";
import Header from "../components/Header";
import Background from "../assets/eventslogo.jpg";
import Logo from "../assets/logo.png";
import "aos/dist/aos.css";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
import Youth from "../assets/Youth.jfif";
import Community from "../assets/Community.jfif";
import AOS from "aos";
AOS.init();

export default function Events() {
  return (
    <div className="nav-text bg-white w-screen h-fit font-Roboto text-black">
      <Header />
      <div className="relative h-220 w-screen">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={Background}
          alt=""
        />
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div
            className=" md:text-6xl font-Roboto text-center "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h1 className="homee text-7xl font-bold">Events</h1>
          </div>
        </div>
      </div>
      {/* Container
      <div>
        <div class="event-container">
          <div className="child"> */}
            {/* Left side */}
            {/* <div className="content-child">
              <h2 class="event-title">Upcoming Events</h2>
              <p>Photo or Vid</p>
            </div> */}
            {/* Right side */}
            {/* <div className="context">
              <h2 class="event-title">Event Details</h2>
              <p className="text-[20px]">
                This is the content area where event details will be displayed.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div class="slider mt-10 mb-10" data-aos="fade-in">
         
  <div class="slides">
   
    <div class="slide">
      <img src={Youth} alt="Slide 1" />
    </div>
    <div class="slide">
      <img src={Community} alt="Slide 2" />
    </div>
  </div>
</div>
<div className="container-give">
          <div className="give-parent">
            <div className="give-child">
              <h1>Launching Soon</h1>
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
