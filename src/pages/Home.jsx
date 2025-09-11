import React from "react";
import Header from "../components/Header";

export default function Home() {
    return (
        <div className="bg-white w-screen h-fit text-black">
          <Header />
          <div className="bg-white w-screen h-fit text-black p-70">
            <div className="dmSans text-[500%] font-bold mt-10px font text-center">Welcome Home</div>
          </div>
        </div>
    );
}