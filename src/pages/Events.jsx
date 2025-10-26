import React from "react";
import Header from "../components/Header";
import Background from "../assets/eventslogo.jpg";
import Logo from "../assets/newlogo.png";
import "aos/dist/aos.css";
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
      <div className=" w-full text-black ">
                <footer className="foot text-white h-auto  py-4">
                  <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4">
                    {/* Logo */}
                    <img src={Logo} alt="Church Logo" className="w-50 " />
                  </div>
                </footer>
                </div>
    </div>
  );
}
