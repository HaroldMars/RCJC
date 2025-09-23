import React, { useState } from "react";
import Header from "../components/Header";
import Background from "../assets/bg.jpg";
import ExpandableSection from "../components/ExpandableSection";
import OurMission from "./about_sections/OurMission";
import OurVision from "./about_sections/OurVision";
import StateMent from "./about_sections/StateMent";
import StatementofFaith from "./about_sections/StatemenofFaith";

export default function About() {
  const [expandSection, setExpandSection] = useState({
    stateMent: false,
    ourMission: false,
    ourVision: false,
    statementofFaith: false
  })

  function hideSection(section){
    setExpandSection({[section]: false})
  }
  return (
    <div className="bg-gray-100 w-screen h-fit text-black">
      <Header />
      <div className="sm:items-stretch md:items-center  ">
        {/* Background picture */}
        <div className="">
        <img className="h-200 w-screen object-cover" src={Background} alt="" />
        </div>
      </div>
      <div className="h-300">
        <div>
          <div>
            <p className="text-center mt-10 md:text-2xl sm:text-10px text-green-500">
              This is a temporary text block designed to serve as a placeholder.{" "}
              <br />
              It is not meant to be used for any final content and
              <br /> should be replaced once the actual information is ready.
              <br />
              The text here can help you visualize how your design <br />
              will look once populated with real content.
            </p>
          </div>

          

          <div className="section md:text-2xl sm:text-10px ">
            <ul className="text-center  ">
              <hr className="ul-line mt-10"></hr>
              <li onClick={()=> {
                setExpandSection({stateMent: true})
              }} className="ul-text mt-3 mb-3 cursor-pointer">4S</li>
              <ExpandableSection onClick={()=>{hideSection("stateMent")}} show={expandSection.stateMent}>
                <StateMent />
              </ExpandableSection>
               <hr className="ul-line mt-3 mb-3"></hr>
              <li onClick={()=> {
                setExpandSection({ourMission: true})
              }} className="ul-text mt-3 mb-3 cursor-pointer">OUR MISSION</li>
              <ExpandableSection onClick={()=>{hideSection("ourMission")}} show={expandSection.ourMission}>
                <OurMission />
              </ExpandableSection>
              <hr className="ul-line mt-3 mb-3"></hr>
              <li onClick={()=> {
                setExpandSection({ourVision: true})
              }} className="ul-text mt-3 mb-3 cursor-pointer">OUR VISION</li>
              <ExpandableSection onClick={()=>{hideSection("ourVision")}} show={expandSection.ourVision}>
                <OurVision />
              </ExpandableSection>
              <hr className="ul-line mt-3 mb-3"></hr>
              <li onClick={()=> {
                setExpandSection({statementofFaith: true})
              }} className="ul-text mt-3 mb-3 cursor-pointer">STATEMENT OF FAITH</li>
              <ExpandableSection onClick={()=>{hideSection("statementofFaith")}} show={expandSection.statementofFaith}>
                <StatementofFaith />
              </ExpandableSection>
              <hr className="ul-line mt-3 mb-3"></hr>
            </ul>
          </div>

          {/* STAFF & AREA LEADERS */}

          <div>
            <image></image>
          </div>
        </div>
      </div>
    </div>
  );
}
