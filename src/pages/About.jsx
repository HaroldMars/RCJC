import React from "react";
import Header from '../components/Header';


export default function About(){
    return (
        <div className="bg-white w-screen h-fit text-black">
          <Header />
          <div className="bg-white w-screen h-fit text-black p-70">
            <div className="dmSans text-[500%] font-bold mt-10px font text-center">About Us</div>
          </div>
        </div>
    );
}