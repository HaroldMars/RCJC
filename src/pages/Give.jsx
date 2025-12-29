import React from "react";
import Header from "../components/Header";
import "aos/dist/aos.css";
import AOS from "aos";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
AOS.init();

export default function Give() {
  return (
    <div className="nav-text bg-white w-screen font-Roboto h-fit text-black">
      <Header />
      <div className="bg-white w-screen h-fit text-black text-center pt-30">
        <div className="container-give">
          <div className="give-parent">
            <div className="give-child">
              {/* lesterlines: added give tab information*/}
              <h1>Launching Soon Test</h1>
            </div>
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
