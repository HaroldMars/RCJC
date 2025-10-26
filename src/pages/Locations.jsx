import React, { useState, useEffect } from "react";
import Background from "../assets/Locations.jpg";
import Header from "../components/Header";
import Logo from "../assets/logo.png";
// import Bacagay from "./location_sections/Bacagay";
// import Cabul_an from "./location_sections/Cabulan";
// import Ubay from "./location_sections/Ubay";
import Bogo from "./location_sections/bogo";
import Camotes from "./location_sections/camotes";
import Compostela from "./location_sections/compostela";
import Cordova from "./location_sections/Cordova";
import Danao from "./location_sections/Danao";
import Dumanjug from "./location_sections/Damanjug";
import Harang from "./location_sections/Harang";
import Kawit from "./location_sections/Kawit";
import Liloan from "./location_sections/Liloan";
import Mandaue from "./location_sections/Mandaue";
import Medellin from "./location_sections/Medellin";
import Tabok from "./location_sections/Tabok";
import Talisay from "./location_sections/Talisay";
import Telecom from "./location_sections/Telecom";
import Matagob from "./location_sections/Matagob";
import Palompon from "./location_sections/Palompon";
import Tuno from "./location_sections/Tuno";
import Bahbah from "./location_sections/Bahbah";
import Biaknabato from "./location_sections/Biaknabato";
import Aligria from "./location_sections/Alegria";
import Cambagang from "./location_sections/Cambagang";
import Pasta from "./location_sections/Pasta";
import Unidad from "./location_sections/Unidad";
import Fatima from "./location_sections/Fatima";
import "aos/dist/aos.css";
import AOS from "aos";
import fatima from "../assets/Fatima.jpg";
import Jocelyn from "../assets/Jocelyn.jpg";
import Pfp from "../assets/pfp.jpg";
AOS.init();

export default function Locations() {
  const [expandSection, setExpandSection] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedProfiles, setExpandedProfiles] = useState({
    Fatima: false,
    Allan: false,
    Jocelyn: false,
  });

  const [arrowRotations, setArrowRotations] = useState({
    Fatima: false,
    Allan: false,
    Jocelyn: false,
  });

  const toggleProfile = (name) => {
    setExpandedProfiles((prev) => ({
      ...prev,
      [name]: !prev[name], // toggle the specific profile
    }));
  };

  const AreaOptions = [
    { value: "", label: "Select Area" },
    { value: "bohol", label: "Bohol" },
    { value: "cebu", label: "Cebu" },
    { value: "leyte", label: "Leyte" },
    { value: "mindanao", label: "Mindanao" },
    { value: "negros", label: "Negros" },
  ];

  // Optional: Close dropdown if clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".location-dropdown")) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSection = (key) => {
    setExpandSection((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // const boholsections = [
  //   {
  //     title: "RCJCIM Bagacay",
  //     component: <Bacagay />,
  //     key: "bacagay",
  //   },
  //   {
  //     title: "RCJCIM Cabul-an",
  //     component: <Cabul_an />,
  //     key: "cabulan",
  //   },
  //   {
  //     title: "RCJCIM Ubay",
  //     component: <Ubay />,
  //     key: "ubay",
  //   },
  // ];

  const cebuSections = [
    {
      title: "RCJCIM Bogo City",
      component: <Bogo />,
      key: "bogo",
    },
    {
      title: "RCJCIM Camotes",
      component: <Camotes />,
      key: "camotes",
    },
    {
      title: "RCJCIM Compostela",
      component: <Compostela />,
      key: "compostela",
    },
    {
      title: "RCJCIM Cordova",
      component: <Cordova />,
      key: "cordova",
    },
    {
      title: "RCJCIM Danao",
      component: <Danao />,
      key: "danao",
    },
    {
      title: "RCJCIM Dumanjug",
      component: <Dumanjug />,
      key: "dumanjug",
    },
    {
      title: "RCJCIM Harang",
      component: <Harang />,
      key: "harang",
    },
    {
      title: "RCJCIM Kawit",
      component: <Kawit />,
      key: "kawit",
    },
    {
      title: "RCJCIM Liloan",
      component: <Liloan />,
      key: "liloan",
    },
    {
      title: "RCJCIM Mandaue",
      component: <Mandaue />,
      key: "mandaue",
    },
    {
      title: "RCJCIM Medellin",
      component: <Medellin />,
      key: "medellin",
    },
    {
      title: "RCJCIM Tabok",
      component: <Tabok />,
      key: "tabok",
    },
    {
      title: "RCJCIM Talisay",
      component: <Talisay />,
      key: "talisay",
    },
    {
      title: "RCJCIM Telecom",
      component: <Telecom />,
      key: "telecom",
    },
  ];

  const leyteSections = [
    {
      title: "RCJCIM Matag-ob",
      component: <Matagob />,
      key: "matagob",
    },
    {
      title: "RCJCIM Palompon",
      component: <Palompon />,
      key: "palompon",
    },
    {
      title: "RCJCIM Tuno",
      component: <Tuno />,
      key: "tuno",
    },
  ];

  const mindanaoSections = [
    {
      title: "RCJCIM Alegria",
      component: <Aligria />,
      key: "alegria",
    },
    {
      title: "RCJCIM Bahbah",
      component: <Bahbah />,
      key: "bahbah",
    },
    {
      title: "RCJCIM Cambagang",
      component: <Cambagang />,
      key: "cambagang",
    },
    {
      title: "RCJCIM Pasta",
      component: <Pasta />,
      key: "pasta",
    },
    {
      title: "RCJCIM Unidad",
      component: <Unidad />,
      key: "unidad",
    },
  ];

  const negrosSections = [
    {
      title: "RCJCIM Biak na Bato",
      component: <Biaknabato />,
      key: "biaknabato",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleArrow = (name) => {
    setArrowRotations((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div className="nav-text bg-white w-screen font-Roboto h-fit text-black ">
        {showHeader && <Header />}

        {/* Background section */}
        <div className="relative h-220 w-screen">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={Background}
            alt=""
          />
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
            <div
              className="homee  text-6xl md:text-6xl font-bold text-center"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Connect with us
            </div>
          </div>
        </div>

        <div className="search location-dropdown font-Roboto">
          {/* Select button */}
          <button
            className="w-full px-4 py-2 border search-bar bg-white text-left flex justify-between items-center"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            aria-haspopup="listbox"
            aria-expanded={isDropdownOpen}
            data-aos="fade-up"
              data-aos-delay="500"
          >
            {selectedLocation
              ? AreaOptions.find((opt) => opt.value === selectedLocation)?.label
              : "Select Area..."}
            {/* Arrow icon */}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {/* Dropdown options */}
          {isDropdownOpen && (
            <div className="absolute top-full search-bar-glass left-0 w-full bg-white border border-gray-300 rounded shadow-lg z-10 max-h-60 overflow-y-auto">
              {AreaOptions.map((opt) => (
                <div
                  key={opt.value}
                  className="px-4 py-2 hover:bg-green-100 rounded-2xl cursor-pointer"
                  onClick={() => {
                    setSelectedLocation(opt.value);
                    setIsDropdownOpen(false);
                  }}
                  role="option"
                  aria-selected={selectedLocation === opt.value}
                >
                  {opt.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main content */}
        <div className="h-auto bg-white mt-50">
          {/*<div className="text-center text-4xl font-DmSans-Bold mt-10" data-aos="fade-right" data-aos-delay="300">
            <h1 className="homee">IN BOHOL</h1>
            <ul className="mt-4 mb-10">
              {boholsections.map(({ title, component, key }) => (
                <React.Fragment key={key}> */}

          {/* Title row */}
          {/* <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">{title}</span> */}
          {/* Arrow indicator */}
          {/* <svg
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
                  </li> */}
          {/* Expandable content */}
          {/* <div
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
          </div> */}
          <div className="font-Roboto">
            <h1 
            data-aos="fade-up"
              data-aos-delay="500"
              className="text-center font-bold text-2xl">BOHOL</h1>
            <div 
            data-aos="fade-right"
              data-aos-delay="500"
              className="profile-image" >
              {/* Fatima Profile */}
              <div className="profilee">
                <img
                  className="pic"
                  src={fatima}
                  alt="Fatima"
                  onClick={() => {
                    toggleProfile("Fatima");
                    toggleArrow("Fatima");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container"
                  onClick={() => {
                    toggleProfile("Fatima");
                    toggleArrow("Fatima");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor, Fatima Banas
                  <span
                    className={`arrow-down ${
                      arrowRotations.Fatima ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                {expandedProfiles.Fatima && (
                  <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                    <p> Purok 4 Bagacay Talibon Bohol</p>
                    <hr className="text-gray-400" />
                    <p className="mt-5">Sunday Service: 8:30 am -12:00 nn</p>
                    <p className="mt-5">
                      Wednesday Outpouring Service: 6:30 pm - 8:30 pm
                    </p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 6:30 pm - 8:30 pm
                    </p>
                  </div>
                )}
                <hr className="mt-2" />
              </div>

              {/* Allan Profile */}
              <div className="profilee">
                <img
                  className="pic"
                  src={Pfp}
                  alt="Allan"
                  onClick={() => {
                    toggleProfile("Allan");
                    toggleArrow("Allan");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container"
                  onClick={() => {
                    toggleProfile("Allan");
                    toggleArrow("Allan");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor, Allan Cabiso
                  <span
                    className={`arrow-down ${
                      arrowRotations.Allan ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                {expandedProfiles.Allan && (
                  <div className="details p-4 bg-gray-100 mt-2  shadow-inner">
                    <p>Purok 6 Eastern Cabul-an Buenavista Bohol</p>
                    <hr className="text-gray-400" />
                    <p className="mt-5">Here's an early look at the current progress. Final details are pending your instructions, and I will update accordingly.</p>
                  </div>
                )}
                <hr className="mt-2" />
              </div>

              {/* Jocelyn Profile */}
              <div className="profilee">
                <img
                  className="pic"
                  src={Jocelyn}
                  alt="Jocelyn"
                  onClick={() => {
                    toggleProfile("Jocelyn");
                    toggleArrow("Jocelyn");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container"
                  onClick={() => {
                    toggleProfile("Jocelyn");
                    toggleArrow("Jocelyn");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor, Jocelyn Pogoy
                  <span
                    className={`arrow-down ${
                      arrowRotations.Jocelyn ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                {expandedProfiles.Jocelyn && (
                  <div className="details p-4  mt-2  shadow-inner">
                    <p>Purok 2 Poblacion Ubay Bohol</p>
                    <hr className="text-gray-400" />
                    <p className="mt-5">
                      Friday Prayer Meeting: 7:00 pm - 9:00 pm
                    </p>
                    <p className="mt-5">
                      Wednesday Outpouring Service: 7:00 pm - 9:00 pm
                    </p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 7:00 pm - 9:00 pm
                    </p>
                  </div>
                )}
                <hr className="mt-2" />
              </div>
            </div>
          </div>

          <div
            className="text-center text-4xl font-DmSans-Bold mb-10"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="homee">IN CEBU</h1>
            <ul className="mt-4 mb-10">
              {cebuSections.map(({ title, component, key }) => (
                <React.Fragment key={key}>
                  {/* Title row */}
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
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
          <div
            className="text-center text-4xl font-DmSans-Bold mb-10"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="homee">IN LEYTE</h1>
            <ul className="mt-4 mb-10">
              {leyteSections.map(({ title, component, key }) => (
                <React.Fragment key={key}>
                  {/* Title row */}
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
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
          <div
            className="text-center text-4xl font-DmSans-Bold mb-10"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="homee">IN MINDANAO</h1>
            <ul className="mt-4 mb-10">
              {mindanaoSections.map(({ title, component, key }) => (
                <React.Fragment key={key}>
                  {/* Title row */}
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
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
          <div
            className="text-center text-4xl font-DmSans-Bold mb-10"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="homee">IN NEGROS</h1>
            <ul className="mt-4 mb-4">
              {negrosSections.map(({ title, component, key }) => (
                <React.Fragment key={key}>
                  {/* Title row */}
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
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
        <div
          className="bg-gray-700 w-full text-black"
          data-aos="fade-up"
          data-aos-delay="300"
        >
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
