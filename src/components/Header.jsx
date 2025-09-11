import React from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header () {
    return( 
        <div className=" grid grid-cols-6 bg-white text-black p-8 shadow-md">
      <div
        className="flex items-center w-fit col-span-3"
        onClick={() => (location.href = "/")}
        title="Home"
      >
        <img className="w-20 h-20 " src={Logo} />
      </div>

        <div className="grid grid-cols-6">
            <NavLink 
            to="Home" 
            className={({ isActive }) => {
                if (isActive) return "px-4 cursor-pointer truncate text-blue-300";
                else "px- cursor-pointer truncate";
            }}
            >
                <div className="flex items-center cols-span-3 p-3">
                    <i className="fa-solid fa-right-to-bracket"></i>
                </div>{""}
                <span className="hidden md:block">Home</span>
            </NavLink>
            
        </div>
      </div>
    );

}

export default Header;
