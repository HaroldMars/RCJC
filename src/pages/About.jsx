import React, { useState } from "react";
import Header from "../components/Header";
import Background from "../assets/footerpic.jpg";
import ExpandableSection from "../components/ExpandableSection";
import OurMission from "./about_sections/OurMission";
import OurVision from "./about_sections/OurVision";
import StateMent from "./about_sections/StateMent";
import StatementofFaith from "./about_sections/StatemenofFaith";
import Logo from "../assets/newlogo.png";

export default function About() {
  const [expandSection, setExpandSection] = useState({
    stateMent: false,
    ourMission: false,
    ourVision: false,
    statementofFaith: false,
  });

  // Toggle a section and close others
  const toggleSection = (section) => {
    setExpandSection((prev) => ({
      ...Object.keys(prev).reduce((acc, k) => ({ ...acc, [k]: false }), {}),
      [section]: !prev[section],
    }));
  };

  return (
    <div className="bg-gray-100 w-screen h-fit text-black">
      <Header />

      {/* Background Image Section */}
      <div className="relative w-screen h-220">
        <img
          className="w-full h-full object-cover"
          src={Background}
          alt="Background"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="text-green-500 font-bold text-center text-6xl ">
            About Us
          </div>
        </div>
      </div>

      {/* Placeholder Text */}
      <div className="h-auto p-4">
        <p className="text-center mt-10 md:text-2xl sm:text-10px text-green-500">
          This is a temporary text block designed to serve as a placeholder.{" "}
          <br />
          It is not meant to be used for any final content and
          <br /> should be replaced once the actual information is ready.
          <br />
          The text here can help you visualize how your design <br />
          will look once populated with real content.
        </p>

        {/* Expandable Sections */}
        <div className="max-w-2xl mx-auto bg-green-200 p-4 rounded-lg shadow-lg mb-8 mt-5">
          <ul className="space-y-4 ">
            {[
              { title: "4S", component: <StateMent />, key: "stateMent" },
              {
                title: "OUR MISSION",
                component: <OurMission />,
                key: "ourMission",
              },
              {
                title: "OUR VISION",
                component: <OurVision />,
                key: "ourVision",
              },
              {
                title: "STATEMENT OF FAITH",
                component: <StatementofFaith />,
                key: "statementofFaith",
              },
            ].map(({ title, component, key }) => (
              <React.Fragment key={key}>
                <hr className="border-gray-300" />
                <li
                  onClick={() => toggleSection(key)}
                  className="flex items-center justify-between cursor-pointer px-4 py-2 rounded hover:bg-green-300 transition duration-300"
                >
                  <span className="text-gray-700 font-medium ">{title}</span>
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
                <ExpandableSection show={expandSection[key]}>
                  <div
                    className="p-4 bg-gray-50 rounded-lg text-left shadow-inner transition-max-height duration-500 overflow-hidden"
                    style={{
                      maxHeight: expandSection[key] ? "5000px" : "0",
                      transition: "max-height 0.5s ease",
                    }}
                  >
                    {component}
                  </div>
                </ExpandableSection>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>

      {/* Staff & Area Leaders Section (optional placeholder) */}
      <div>
        <div className=" w-full text-black ">
          <footer className="foot text-white h-auto  py-4">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 px-4">
              {/* Logo */}
              <img src={Logo} alt="Church Logo" className="w-50 " />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
