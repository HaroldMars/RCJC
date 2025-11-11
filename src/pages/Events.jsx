import React from "react";
import Header from "../components/Header";
import Background from "../assets/eventslogo.jpg";
import Logo from "../assets/logo.png";
import "aos/dist/aos.css";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
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
                  <div className=" md:text-6xl font-Roboto text-center " data-aos="fade-up" data-aos-delay="300">
                    <h1 className="homee text-7xl">Events</h1>
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
