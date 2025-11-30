import React, { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesCount = 2;

  const showSlide = (index) => {
    if (index >= slidesCount) {
      setCurrentIndex(0);
    } else if (index < 0) {
      setCurrentIndex(slidesCount - 1);
    } else {
      setCurrentIndex(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentIndex + 1);
  };

  const prevSlide = () => {
    showSlide(currentIndex - 1);
  };


  return (
    <div className="nav-text bg-blue-100 w-screen h-fit font-Roboto text-black">
      <Header />
      {/* <div className="relative h-220 w-screen">
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
      </div> */}
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
        
         
  <div className="pt-20 carousel-wrapper" style={{ position: 'relative', width: '100%', maxWidth: '90%', margin: '0 auto' }}>
  {/* Horizontal lines and title */}
  <center><hr className="mt-10 text-blue-500 w-70" style={{ width: '70%' }} /></center>
  <h1 className="text-events font-bold text-center text-4xl md:text-6xl lg:text-8xl">EVENTS</h1>
  <center><hr className="mb-5 text-blue-300 w-70" style={{ width: '70%' }} /></center>
  
  {/* Left Arrow */}
  <button
    className="arrow left"
    onClick={prevSlide}
    style={{
      position: 'absolute',
      top: '70%',
      left: '2%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      borderRadius: '50%',
      width: '8vw',
      height: '8vw',
      maxWidth: '50px',
      maxHeight: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '4vw',
      maxFontSize: '24px',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s, transform 0.2s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
  >
    &#10094;
  </button>

  {/* Slider container */}
  <div className="slider" style={{ overflow: 'hidden', borderRadius: '8px' }}>
    {/* Slides wrapper */}
    <div
      className="slides"
      style={{
        display: 'flex',
        transition: 'transform 0.5s ease',
        transform: `translateX(-${currentIndex * 100}%)`,
      }}
    >
      {/* Slide 1 */}
      <div
        style={{
          minWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={Youth}
          alt="Youth"
          style={{ maxWidth: '90%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
      {/* Slide 2 */}
      <div
        style={{
          minWidth: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={Community}
          alt="Community"
          style={{ maxWidth: '90%', height: 'auto', objectFit: 'contain' }}
        />
      </div>
    </div>
  </div>

  {/* Right Arrow */}
  <button
    className="arrow right"
    onClick={nextSlide}
    style={{
      position: 'absolute',
      top: '70%',
      right: '2%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      border: 'none',
      borderRadius: '50%',
      width: '8vw',
      height: '8vw',
      maxWidth: '50px',
      maxHeight: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      fontSize: '4vw',
      maxFontSize: '24px',
      color: '#fff',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transition: 'background-color 0.3s, transform 0.2s',
    }}
    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
  >
    &#10095;
  </button>
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
