import React, { useState } from "react";
import Background from "../assets/locationpic.jpg";
import Header from "../components/Header";
import Logo from "../assets/logo.png";
import Bacagay from "./location_sections/Bacagay";

export default function Locations() {
  const [expandSection, setExpandSection] = useState({});

  const toggleSection = (key) => {
    setExpandSection((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const sections = [
    {
      title: "RCJCIM Bagacay",
      component: <Bacagay />,
      key: "bacagay",
    },
  ];

  return (
    <>
      <div className="bg-white w-screen font-DmSans-Bold h-fit text-black ">
        <Header />

        {/* Background section */}
        <div className="relative h-220 w-screen">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={Background}
            alt=""
          />
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
            <div className="text-green-700 font-DmSans-Bold text-6xl md:text-6xl font-bold text-center">
              Connect with us
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="h-auto bg-white">
          <div className="text-center text-4xl font-DmSans-Bold mt-10">
            <img src={Logo} alt="Church Logo" className="w-16 h-16 mx-auto" />
            <h1 className="">IN BOHOL</h1>
            <ul className="mt-4 mb-4">
              {sections.map(({ title, component, key }) => (
                <React.Fragment key={key}>
                  <hr className="border-gray-300" />
                  {/* Title row */}
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="text-gray-700 pl-5 font-DmSans">{title}</span>
                    {/* Arrow indicator */}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${
                        expandSection[key] ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </li>
                  {/* Expandable content */}
                  <div
                    className="overflow-hidden transition-max-height duration-500"
                    style={{
                      maxHeight: expandSection[key] ? "1000px" : "0",
                    }}
                  >
                    <div className="p-4 bg-gray-50 rounded-lg shadow-inner">
                      {component}
                    </div>
                  </div>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-700 w-full text-black">
          <footer className="foot text-white h-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 py-4">
              {/* Logo */}
              <img src={Logo} alt="Church Logo" className="w-16 h-16" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}