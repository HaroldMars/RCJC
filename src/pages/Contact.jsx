import React from "react";
import Header from "../components/Header";
import Background from "../assets/contact.jpg";
import Logo from "../assets/newlogo.png";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

export default function Contact() {
  return (
    <div className="nav-text bg-white w-screen font-Roboto h-fit text-black">
      <Header />
      <div className="relative h-220 w-screen">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={Background}
          alt=""
        />
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div
            className="homee font-Roboto text-6xl md:text-6xl font-bold text-center "
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Contact us
          </div>
        </div>
      </div>
      {/* <div className="footer-container">
        <footer className="footer">
          <div className="container-footer-media">
            <h1 className="footer-text ">Connect with us</h1>
            <div className="media-footer">
              <img className="footer-logo" src={fb} alt="" />
              <a
                className="absolute left-90 top-240 font-bold"
                href="https://www.facebook.com/rcjcim"
                target="_blank"
                rel="noopener noreferrer"
              >
                /rcjcim
              </a>
            </div>
            <div className="media-footer">
              <img className="footer-logo" src={Gmail} alt="" />
              <a href="">rcjcim2003@gmail.com</a>
            </div>
          </div>
        </footer>
      </div> */}

<div class="footer">
  <div class="footer-content">
    <div class="connect-text">connect with us</div>
    <div class="links">
      <a href="https://facebook.com/rcj cim" target="_blank" rel="noopener noreferrer" class="link">
        <img src={fb} alt="Facebook" class="icon" />
        <span class="link-text">/rcjcim</span>
      </a>
      <a href="mailto:rcjcm2003@gmail.com" class="link">
        <img src={Gmail} alt="Email" class="icon" />
        <span class="link-text">rcjcm2003@gmail.com</span>
      </a>
    </div>
  </div>
  <div class="copyright">
    RCJ CIM @ 2025
  </div>
</div>
    </div>
  );
}
