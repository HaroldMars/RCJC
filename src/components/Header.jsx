import React from "react";
import Logo from "../assets/Logo.png";
import { NavLink } from "react-router-dom";

function Header({ className }) {
  return (
    <div className={`mt-5 grid grid-cols-6 ${className}`}>
      <div
        className={"flex items-center w-fit col-span-3 cursor-pointer"}
        onClick={() => (location.href = "/")}
        title="Home"
      >
        <img className="w-20 h-20 ml-8" src={Logo} />
      </div>
      <div className="flex ml-100 items-center col-span-3">
        <NavLink
          to="/"
          className={({ isActive }) => {
            if (isActive) return "px-4 cursor-pointer truncate";
            else "px-4 cursor-pointer truncate";
          }}
        ></NavLink>

        <a className="px-4 cursor-pointer truncate" href="About">
          <div className="md:hidden">
            <i className="fa-solid fa-address-card"></i>
          </div>{" "}
          <span className="hidden md:block">
            <b>ABOUT US</b>
          </span>
        </a>
        <a className="px-4 cursor-pointer truncate" href="Locations">
          <div className="md:hidden">
            <i className="fa-solid fa-question"></i>
          </div>{" "}
          <span className="hidden md:block">
            <b>LOCATIONS</b>
          </span>
        </a>
        <a className="px-4 cursor-pointer truncate" href="Events">
          <div className="md:hidden">
            <i className="fa-solid fa-question"></i>
          </div>{" "}
          <span className="hidden md:block">
            <b>EVENTS</b>
          </span>
        </a>
        <a className="px-4 cursor-pointer truncate" href="Contact">
          <div className="md:hidden">
            <i className="fa-solid fa-question"></i>
          </div>{" "}
          <span className="hidden md:block">
            <b>CANTACT</b>
          </span>
        </a>
        <a className="px-4 cursor-pointer truncate" href="Give">
          <div className="md:hidden">
            <i className="fa-solid fa-question"></i>
          </div>{" "}
          <span className="hidden md:block">
            <b>GIVE</b>
          </span>
        </a>
      </div>
    </div>
  );
}

export default Header;
