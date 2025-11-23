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

      <div className="container-contact"data-aos="fade-up"
            data-aos-delay="200">
  <div className="contact-box">
    <h1 className="contact-heading">We're Here for You!</h1>
    <p className="contact-text">
      We are delighted you stopped by. If you have a prayer request, want to learn more about our ministries, or reaching out as a first-time visitor, we are here to listen and respond. We look forward to connecting with you. 
    </p>
    <div className="contact-info">
      <h2 className="section-title">Get in touch
</h2>
<div class="container-contactt">
  <button class="option">I'd like more information about the church.</button>
  <button class="option">I have questions about how to get involved.</button>
  <button class="option">I need prayer.</button>
  <button class="option">Other...</button>
</div>
    </div>
<div class="cards-container mt-5"data-aos="fade-in">
  <div class="info-card">
    <div class="icon">📞</div>
    <h3>Phone Number</h3>
    <p>+63 905 825 0594</p>
  </div>
  <div class="info-card">
    <div class="icon">✉️</div>
    <h3>Email Address</h3>
    <p>rcjcim2003@gmail.com</p>
  </div>
  <div class="info-card">
    <div class="icon">📍</div>
    <h3>Main Church Address</h3>
    <p>A.C. Cortes Ave. (Interior), Looc, Mandaue City, Cebu, Philippines, 6014
    </p>
  </div>
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
