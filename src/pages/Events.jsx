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
         
  <div class="carousel-container">
  
  <button
  className="arrow left"
  onClick={nextSlide}
  style={{
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '20px',
    color: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.2s',
  }}
  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
>
  &#10094;
</button>
  
  
  <div className="slider mt-10 mb-10" data-aos="fade-in">
      <div className="carousel-container" style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
        {/* Left Arrow */}
        <button className="arrow left" onClick={prevSlide} style={{
          position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)', border: 'none', padding: '10px', cursor: 'pointer', zIndex: 10,
        }}>&#10094;</button>
        
        {/* Slides */}
        <div
          className="slides"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease',
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          <div className="slide" style={{ minWidth: '100%' }}>
            <img src={Youth} alt="Slide 1" style={{ width: '100%', display: 'block' }} />
          </div>
          <div className="slide" style={{ minWidth: '100%' }}>
            <img src={Community} alt="Slide 2" style={{ width: '100%', display: 'block' }} />
          </div>
        </div>
        {/* Right Arrow */}
        <button className="arrow right" onClick={nextSlide} style={{
          position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)', border: 'none', padding: '10px', cursor: 'pointer', zIndex: 10,
        }}>&#10095;</button>
      </div>
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
