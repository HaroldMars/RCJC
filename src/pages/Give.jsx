import React from "react";
import Header from "../components/Header";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

export default function Give() {
  return (
    <div className="bg-white w-screen font-DmSans-Bold h-fit text-black">
      <Header />
      <div className="bg-white w-screen h-fit text-black text-center pt-30">
        <div className=" text-[500%] font-DmSans-Bold mt-10px text-center" data-aos="fade-up" data-aos-delay="300">
          Give
        </div>
      </div>
    </div>
  );
}
