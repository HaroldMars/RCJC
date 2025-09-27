import React, { useState, useEffect } from "react";
import Logo from "../assets/newlogo.png";
import { NavLink } from "react-router-dom";

function Header({ className }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change or window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    {
      to: "/About",
      icon: "fa-address-card",
      label: "ABOUT US",
    },
    {
      to: "/Locations",
      icon: "fa-map-marker-alt",
      label: "LOCATIONS",
    },
    {
      to: "/Events",
      icon: "fa-calendar-alt",
      label: "EVENTS",
    },
    {
      to: "/Contact",
      icon: "fa-envelope",
      label: "CONTACT",
    },
    {
      to: "/Give",
      icon: "fa-hand-holding-heart",
      label: "GIVE",
    },
  ];

  return (
    <div
      className={`bg-blue-100/50 absolute w-screen z-1 mt-0 h-20 grid grid-cols-2 md:grid-cols-6  items-center ${className} ${
        scrolled
          ? "fixed top-0 left-0 w-full shadow-lg text-white z-50"
          : "text-white"
      }`}
    >
      {/* Logo */}
      <div
        className="flex items-center w-fit col-span-1 md:col-span-3 cursor-pointer flex-row gap-x-2 justify-evenly"
        onClick={() => (location.href = "/")}
        title="Home"
      >
        <img
          className="w-50 h-16 ml-4 sm:w-50  md:w-60 md:h-20 md:ml-50"
          src={Logo}
          alt="Logo"
        />
      </div>

      {/* Hamburger menu for mobile */}
      <div className="flex justify-end items-center md:hidden col-span-1">
        <button
          className="p-2 focus:outline-none cursor-pointer pr-5 text-green-700"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? (
            <i className={`fa-solid fa-xmark text-2xl pr-3`} />
          ) : (
            <i className={`fa-solid fa-bars text-2xl pr-3`} />
          )}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`
          ${menuOpen ? "block" : "hidden"}
           bg-blue-100/50 absolute top-20 left-0 w-full  shadow-md z-40 
          md:static md:block md:bg-transparent md:shadow-none md:col-span-3
        `}
      >
        <nav className="  flex flex-col md:flex-row md:items-center md:justify-end">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `  px-4 py-3 md:py-0 cursor-pointer truncate flex items-center text-white ${
                  isActive ? "font-bold" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              <span className=" md:hidden mr-2">
                <i className={`fa-solid ${link.icon}`}></i>
              </span>
              <span className=" md:block">
                <b>{link.label}</b>
              </span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
