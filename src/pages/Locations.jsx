import React, { useState, useEffect } from "react";
import Background from "../assets/Locations.jpg";
import Header from "../components/Header";
import Logo from "../assets/logo.png";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
// import Bacagay from "./location_sections/Bacagay";
// import Cabul_an from "./location_sections/Cabulan";
// import Ubay from "./location_sections/Ubay";
// import Bogo from "./location_sections/bogo";
// import Camotes from "./location_sections/camotes";
// import Compostela from "./location_sections/compostela";
// import Cordova from "./location_sections/Cordova";
// import Danao from "./location_sections/Danao";
// import Dumanjug from "./location_sections/Damanjug";
// import Harang from "./location_sections/Harang";
// import Kawit from "./location_sections/Kawit";
// import Liloan from "./location_sections/Liloan";
// import Mandaue from "./location_sections/Mandaue";
// import Medellin from "./location_sections/Medellin";
// import Tabok from "./location_sections/Tabok";
// import Talisay from "./location_sections/Talisay";
// import Telecom from "./location_sections/Telecom";
// import Matagob from "./location_sections/Matagob";
// import Palompon from "./location_sections/Palompon";
// import Tuno from "./location_sections/Tuno";
// import Bahbah from "./location_sections/Bahbah";
// import Biaknabato from "./location_sections/Biaknabato";
// import Aligria from "./location_sections/Alegria";
// import Cambagang from "./location_sections/Cambagang";
// import Pasta from "./location_sections/Pasta";
// import Unidad from "./location_sections/Unidad";
// import Fatima from "./location_sections/Fatima";
import "aos/dist/aos.css";
import AOS from "aos";
import fatima from "../assets/Fatima.jpg";
import Jocelyn from "../assets/Jocelyn.jpg";
import Pfp from "../assets/pfp.jpg";
import Cherilyn from "../assets/Cherilyn.jpg";
import Vilma from "../assets/Vilma.jpg";
import Jessa from "../assets/Jessa.jpg";
import Jinky from "../assets/Jinky.jpg";
import Seam from "../assets/pastor.jpg";
import Mario from "../assets/Mario.jpg";
import Janice from "../assets/Janice.jpg";
import Rechiel from "../assets/Rechiel.jpg";
import Elvie from "../assets/Elvie.jpg";
import Anabel from "../assets/Anabel.jpg";
import Jeashin from "../assets/Jeashin.jpg";
import Bene from "../assets/Bene.jpg";
import Jinalyn from "../assets/Jinalyn.jpg";
import Luz from "../assets/Lux.jpg";
import Merciely from "../assets/Merciely.jpg";
import Pedro from "../assets/Pedro.jpg";
import Allan from "../assets/Allan.jpg";
import Emma from "../assets/Emma.jpg";
import Gene from "../assets/Gene.jpg";
import Lileth from "../assets/Lileth.jpg";
import Susan from "../assets/Susan.jpg";
import Oliver from "../assets/Oliver.jpg";
import Mary from "../assets/Mary.jpg";
AOS.init();

export default function Locations() {
  // const [expandSection, setExpandSection] = useState({});
  const [selectedLocation, setSelectedLocation] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedProfiles, setExpandedProfiles] = useState({
    Fatima: false,
    Allan: false,
    Jocelyn: false,
    Lileth: false,
    Vilma: false,
    Jessa: false,
    Jinky: false,
    Bene: false,
    Luz: false,
    Pedro: false,
    Seam: false,
    Mario: false,
    Janice: false,
    Rechiel: false,
    Elvie: false,
  });

  const [arrowRotations, setArrowRotations] = useState({
    Fatima: false,
    Allan: false,
    Jocelyn: false,
    Cherilyn: false,
    Jessa: false,
  });

  const closeAllProfiles = () => {
    const tempProfile = { ...expandedProfiles };
    for (const profile in expandedProfiles) {
      tempProfile[profile] = false;
    }
    setExpandedProfiles(tempProfile);
  };

  const toggleProfile = (name) => {
    setExpandedProfiles((prev) => ({
      ...prev,
      [name]: !prev[name], // toggle the specific profile
    }));
  };

  const AreaOptions = [
    { value: "", label: "Select Area" },
    { value: "bohol", label: "Bohol" },
    { value: "cebu_north", label: "Cebu North" },
    { value: "cebu_south", label: "Cebu South" },
    // { value: "cebu_south", label: "Cebu South" },
    { value: "metro_cebu", label: "Metro Cebu" },
    { value: "leyte", label: "Leyte" },
    { value: "mindanao", label: "Mindanao" },
    { value: "negros", label: "Negros" },
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const locationToSectionId = {
    cebu_north: "cebu_north-section",
    cebu_south: "cebu_south-section",
    // cebu_south: "cebu_south-section",
    metro_cebu: "metro_cebu-section",
    mindanao: "mindanao-section",
    leyte: "leyte-section",
    bohol: "bohol-section",
    negros: "negros-section",
  };

  const handleLocationSelect = (value) => {
    setSelectedLocation(value);
    setIsDropdownOpen(false);
    const sectionId = locationToSectionId[value];
    if (sectionId) {
      scrollToSection(sectionId);
    }
  };

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

  // const toggleSection = (key) => {
  //   setExpandSection((prev) => ({
  //     ...prev,
  //     [key]: !prev[key],
  //   }));
  // };

  // const [showHeader, setShowHeader] = useState(true);
  // const [lastScrollY, setLastScrollY] = useState(0);

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

  // const cebuSections = [
  //   {
  //     title: "RCJCIM Bogo City",
  //     component: <Bogo />,
  //     key: "bogo",
  //   },
  //   {
  //     title: "RCJCIM Camotes",
  //     component: <Camotes />,
  //     key: "camotes",
  //   },
  //   {
  //     title: "RCJCIM Compostela",
  //     component: <Compostela />,
  //     key: "compostela",
  //   },
  //   {
  //     title: "RCJCIM Cordova",
  //     component: <Cordova />,
  //     key: "cordova",
  //   },
  //   {
  //     title: "RCJCIM Danao",
  //     component: <Danao />,
  //     key: "danao",
  //   },
  //   {
  //     title: "RCJCIM Dumanjug",
  //     component: <Dumanjug />,
  //     key: "dumanjug",
  //   },
  //   {
  //     title: "RCJCIM Harang",
  //     component: <Harang />,
  //     key: "harang",
  //   },
  //   {
  //     title: "RCJCIM Kawit",
  //     component: <Kawit />,
  //     key: "kawit",
  //   },
  //   {
  //     title: "RCJCIM Liloan",
  //     component: <Liloan />,
  //     key: "liloan",
  //   },
  //   {
  //     title: "RCJCIM Mandaue",
  //     component: <Mandaue />,
  //     key: "mandaue",
  //   },
  //   {
  //     title: "RCJCIM Medellin",
  //     component: <Medellin />,
  //     key: "medellin",
  //   },
  //   {
  //     title: "RCJCIM Tabok",
  //     component: <Tabok />,
  //     key: "tabok",
  //   },
  //   {
  //     title: "RCJCIM Talisay",
  //     component: <Talisay />,
  //     key: "talisay",
  //   },
  //   {
  //     title: "RCJCIM Telecom",
  //     component: <Telecom />,
  //     key: "telecom",
  //   },
  // ];

  // const leyteSections = [
  //   {
  //     title: "RCJCIM Matag-ob",
  //     component: <Matagob />,
  //     key: "matagob",
  //   },
  //   {
  //     title: "RCJCIM Palompon",
  //     component: <Palompon />,
  //     key: "palompon",
  //   },
  //   {
  //     title: "RCJCIM Tuno",
  //     component: <Tuno />,
  //     key: "tuno",
  //   },
  // ];

  // const mindanaoSections = [
  //   {
  //     title: "RCJCIM Alegria",
  //     component: <Aligria />,
  //     key: "alegria",
  //   },
  //   {
  //     title: "RCJCIM Bahbah",
  //     component: <Bahbah />,
  //     key: "bahbah",
  //   },
  //   {
  //     title: "RCJCIM Cambagang",
  //     component: <Cambagang />,
  //     key: "cambagang",
  //   },
  //   {
  //     title: "RCJCIM Pasta",
  //     component: <Pasta />,
  //     key: "pasta",
  //   },
  //   {
  //     title: "RCJCIM Unidad",
  //     component: <Unidad />,
  //     key: "unidad",
  //   },
  // ];

  // const negrosSections = [
  //   {
  //     title: "RCJCIM Biak na Bato",
  //     component: <Biaknabato />,
  //     key: "biaknabato",
  //   },
  // ];

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollY = window.scrollY;
  //     if (currentScrollY > lastScrollY) {
  //       setShowHeader(false);
  //     } else {
  //       setShowHeader(true);
  //     }
  //     setLastScrollY(currentScrollY);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [lastScrollY]);

  const toggleArrow = (name) => {
    setArrowRotations((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <>
      <div className="nav-text bg-white w-screen font-Roboto h-fit text-black ">
        <Header />

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

        <h1
          data-aos="fade-up"
          data-aos-delay="500"
          className="headding text-center font-bold text-2xl mt-10"
        >
          Church Directory
        </h1>
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
                  onClick={() => handleLocationSelect(opt.value)}
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

          {/* <div data-aos="fade-up"
            data-aos-delay="500">
            <div className="container-main">
              <hr className="mb-3 text-gray-600" />
              <img className="main" src={Pfp} alt="Emma" />
              <div className="text-1xl contentt bg-gray-100">
                <h1 className="text-center mt-5 font-bold">
                  {" "}
                  Pastor Emma Merida
                </h1>
                <hr className="text-gray-400" />
                <p>Main Branch</p>
                <p className="mt-3">
                  A.C. Cortes Ave. (Interior), Looc, Mandaue City
                </p>
                <p className="mt-3">Sunday Service: 8:30 am -12:00 nn</p>
                <p className="mt-3">
                  Wednesday Outpouring Service: 6:30 pm - 9:00 pm
                </p>
                <p className="mt-3">
                  Friday Prayer Meeting Service: 6:30 pm -9:00 pm
                </p>
              </div>
            </div>
            <div className="container-half">
            <div>
              <hr className="text-gray-600 mb-10" />
            </div>
          </div>
          </div> */}

          <div data-aos="fade-up" data-aos-delay="500">
            <h1 className="headding text-3xl text-center font-bold ">
              RCJCIM Main Branch
            </h1>
          </div>

          <div className="main-branch" data-aos="fade-up" data-aos-delay="500">
            <div className="content-container">
              {/* Left side: PFP and info */}
              <div className="profile-section">
                <img className="pfp" src={Emma} alt="Emma" />
                <h1 className="name font-bold  mt-5">
                  Pastor Emma Merida
                </h1>
                <div >
                  <p className="mt-2 text-left">
                    Sunday Service: 
                  </p>
                  <p>8:30 am - 12:00 nn</p>
                  <p className="mt-2 text-left">
                    Wednesday Outpouring:
                  </p>
                  <p> 6:30 pm - 9:00 pm</p>
                  <p className="mt-2 text-left">
                    Friday Prayer Meeting:
                  </p>
                  <p> 6:30 pm - 9:00 pm</p>
                </div>
              </div>
              {/* Right side: Map */}
              <div className="map-section ">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.85257577527!2d123.93625831537476!3d10.342542992480576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33a9992be6883d23%3A0xb3a18506188a71f2!2s8XG2%2B6R9%20Rise%20of%20Church%20of%20Jesus%20Christ%20Int%27l%20Ministries%20-%20Mandaue!5e0!3m2!1sen!2sph!4v1686541234567!5m2!1sen!2sph"></iframe>
              </div>
            </div>
          </div>

          <div id="bohol-section">

          </div>

          {/* <div className="container-half"data-aos="fade-up"
            data-aos-delay="500">
            <div>
              <hr className="text-gray-600 mb-10" />
            </div>
          </div>  */}

          <div className="font-Roboto mt-50" >
            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-center font-bold text-4xl"
            >
              BOHOL
            </h1>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="profile-image"
            >
              {/* Fatima Profile */}
              <div className="profilee">
                <img
                  className="pic"
                  src={Allan}
                  alt="Allan"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Allan");
                    toggleArrow("Allan");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container font-bold"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Allan");
                    toggleArrow("Allan");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor Allan Cabiso
                  <span
                    className={`arrow-down ${
                      arrowRotations.Allan ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                <p>Purok 6 Eastern Cabul-an Buenavista Bohol</p>
                {expandedProfiles.Allan && (
                  <div className="details p-4 bg-gray-100 mt-2  shadow-inner">
                    <hr className="text-gray-400" />
                    <p className="mt-5">Sunday Service:</p>
                    <p> 8:00 am - 12:00 nn</p>
                    <p className="mt-5">
                      Wednesday Outpouring: 
                    </p>
                    <p>5:00 pm - 7:00 pm</p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 5:00 pm - 7:00 pm
                    </p>
                  </div>
                )}
                <hr className="mt-2" />
              </div>
                

              {/* Allan Profile */}
              <div className="profilee">
                <img
                  className="pic"
                  src={fatima}
                  alt="Fatima"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Fatima");
                    toggleArrow("Fatima");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container font-bold"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Fatima");
                    toggleArrow("Fatima");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor Fatima Banas 
                  <span
                    className={`arrow-down ${
                      arrowRotations.Fatima ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                <p> Purok 4 Bagacay Talibon Bohol</p>
                {expandedProfiles.Fatima && (
                  <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                    <hr className="text-gray-400" />
                    <p className="mt-5">Sunday Service:</p>
                    <p> 8:30 am - 12:00 nn</p>
                    <p className="mt-5">
                      Wednesday Outpouring Service: 
                    </p>
                    <p>6:30 pm - 8:30 pm</p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 6:30 pm - 8:30 pm
                    </p>
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
                    closeAllProfiles();
                    toggleProfile("Jocelyn");
                    toggleArrow("Jocelyn");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container font-bold"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Jocelyn");
                    toggleArrow("Jocelyn");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor Jocelyn Pogoy
                  <span
                    className={`arrow-down ${
                      arrowRotations.Jocelyn ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                <p>Purok 2 Poblacion Ubay Bohol</p>
                {expandedProfiles.Jocelyn && (
                  <div className="details p-4 bg-gray-100 mt-2  shadow-inner">
                    
                    <hr className="text-gray-400" />
                    <p className="mt-5">
                      Friday Prayer Meeting: 7:00 pm - 9:00 pm
                    </p>
                    <p className="mt-5">
                      Wednesday Outpouring:
                    </p>
                    <p> 7:00 pm - 9:00 pm</p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 7:00 pm - 9:00 pm
                    </p>
                  </div>
                )}
                <hr className="mt-2" id="cebu_north-section" />
              </div>
            </div>
          </div>

          <h1
            className="text-center mt-10 font-bold text-4xl"
            data-aos="fade-right"
            data-aos-delay="500"
            
          >
            CEBU NORTH
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >

            <div className="profilee">
                <img
                  className="pic"
                  src={Cherilyn}
                  alt="Cherilyn"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Cherilyn");
                    toggleArrow("Cherilyn");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container text-[90%]"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Cherilyn");
                    toggleArrow("Cherilyn");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor Cherilyn Formentera
                  <span
                    className={`arrow-down ${
                      arrowRotations.Cherilyn ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                <p>Purok Pagnahian Sonog San Francisco Camotes Cebu</p>
                {expandedProfiles.Cherilyn && (
                  <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                    
                    <hr className="text-gray-400" />
                    <p className="mt-5">Sunday Service:</p>
                    <p> 8:00 am - 12:00 nn</p>
                    <p className="mt-5">
                      Wednesday Outpouring: 
                    </p>
                    <p>8:00 pm - 10:00 pm</p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 8:00 pm - 10:00 pm
                    </p>
                  </div>
                )}
                <hr className="mt-2" id="cebu_south-section"/>
              </div>

            <div className="profilee">
                <img
                  className="pic"
                  src={Lileth}
                  alt="Lileth"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Lileth");
                    toggleArrow("Lileth");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container font-bold"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Lileth");
                    toggleArrow("Lileth");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor Lileth Labiaga
                  <span
                    className={`arrow-down ${
                      arrowRotations.Lileth ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                <p>Central 1 Cogon Bogo City</p>
                {expandedProfiles.Lileth && (
                  <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                    
                    <hr className="text-gray-400" />
                    <p className="mt-5">Sunday Service: </p>
                    <p>8:30 am - 12:00 nn</p>
                  </div>
                )}
                <hr className="mt-2" />
              </div>

              <div className="profilee">
              <img
                className="pic"
                src={Mario}
                alt="Mario"
                onClick={() => {
                  closeAllProfiles();
                  toggleProfile("Mario");
                  toggleArrow("Mario");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                  closeAllProfiles();
                  toggleProfile("Mario");
                  toggleArrow("Mario");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Mario Baring
                <span
                  className={`arrow-down ${
                    arrowRotations.Mario ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>New Medellin East, (NMES) Poblacion Medellin Cebu</p>
              {expandedProfiles.Mario && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p> 8:00 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>7:00 pm - 9:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p> 7:00 pm - 9:00 pm</p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>  
          </div>

           <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="profile-image"
            >
              
              

              
                <div className="profilee">
              <img
                className="pic"
                src={Pedro}
                alt="Pedro"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Pedro");
                  toggleArrow("Pedro");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Pedro");
                  toggleArrow("Pedro");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Pedro Baring
                <span
                  className={`arrow-down ${
                    arrowRotations.Pedro ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Sitio Capayawan, Kawit, Medellin, Cebu</p>
              {expandedProfiles.Pedro && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:00 pm - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>1:00 pm - 3:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting: 
                  </p>
                  <p>1:00 pm - 3:00 pm</p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" id="cebu_south-section"/>
            </div>
            </div>

          <div className="font-Roboto mt-10" >
            <h1 className="font-bold text-4xl text-center">CEBU SOUTH</h1>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
              className="profile-image"
            >
              
              

              
                <div className="profilee">
              <img
                className="pic"
                src={Bene}
                alt="Bene"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Bene");
                  toggleArrow("Bene");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Bene");
                  toggleArrow("Bene");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Bene Zulueta
                <span
                  className={`arrow-down ${
                    arrowRotations.Bene ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p> Tangil, Dumanjug, Cebu</p>
              {expandedProfiles.Bene && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:00 am -12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring:
                  </p>
                  <p> 6:00 am - 8:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting: 
                  </p>
                  <p>6:00 pm - 8:00 pm</p>
                </div>
              )}
              <hr className="mt-2" id="metro_cebu-section" />
            </div>
              
            </div>
          </div>


          

            

    
          
            
            {/* <h1
            className="text-center mt-10 font-bold text-4xl"
            data-aos="fade-right"
            data-aos-delay="500"
            
          >
            CEBU SOUTH
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >
              

            

             
          </div> */}

          
          {/* Cebu Central */}

          <h1
            className="text-center mt-10 font-bold text-4xl"
            data-aos="fade-right"
            data-aos-delay="500"
            
          >
            METRO CEBU
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >
            <div className="profilee">
              <img
                className="pic"
                src={Janice}
                alt="Janice"
                onClick={() => {
                  closeAllProfiles();
                  toggleProfile("Janice");
                  toggleArrow("Janice");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Janice");
                  toggleArrow("Janice");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Janice Nuñez
                <span
                  className={`arrow-down ${
                    arrowRotations.Janice ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>
                    {" "}
                    Almers Compound entrance Suico St Tabok Mandaue City Cebu
                  </p>
              {expandedProfiles.Janice && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p> 8:30 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>6:30 pm - 9:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting: 
                  </p>
                  <p>6:30 pm - 9:00 pm</p>
                </div>
              )}
              <hr className="mt-2" />
            </div>


            <div className="profilee">
              <img
                className="pic"
                src={Jessa}
                alt="Jessa"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jessa");
                  toggleArrow("Jessa");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jessa");
                  toggleArrow("Jessa");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Jessa Daligdig
                <span
                  className={`arrow-down ${
                    arrowRotations.Jessa ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>
                    Catarman 2 Cordova Cebu across Catarman Elementary School
                  </p>
              {expandedProfiles.Jessa && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:30 am -12:00 nn</p>
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Jinalyn}
                alt="Jinalyn"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jinalyn");
                  toggleArrow("Jinalyn");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jinalyn");
                  toggleArrow("Jinalyn");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Jinalyn Fulguerinas
                <span
                  className={`arrow-down ${
                    arrowRotations.Jinalyn ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Hernan Cortes St. Telecom, Casuntingan, Mandaue City</p>
              {expandedProfiles.Jinalyn && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p> 8:00 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>6:30 pm - 8:30 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p> 6:30 pm - 8:30 pm</p>

                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>

            
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image"
          >
            

            

            <div className="profilee">
              <img
                className="pic"
                src={Jinky}
                alt="Jinky"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jinky");
                  toggleArrow("Jinky");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jinky");
                  toggleArrow("Jinky");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Jinky Casiple
                <span
                  className={`arrow-down ${
                    arrowRotations.Jinky ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>
                    Looc, Danao Cebu (few meters away from Brgy Hall across
                    Riders Pit Stop)
                  </p>
              {expandedProfiles.Jinky && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:00 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring:
                  </p>
                  <p> 6:00 pm - 8:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting: 
                  </p>
                  <p className="mb-5">6:00 pm - 8:00 pm</p>
                  <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a>
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Luz}
                alt="Luz"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Luz");
                  toggleArrow("Luz");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Luz");
                  toggleArrow("Luz");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Luz Merida
                <span
                  className={`arrow-down ${
                    arrowRotations.Luz ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Tagunol, Basak San Nicolas, Cebu City</p>
              {expandedProfiles.Luz && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:30 am -12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>6:30 pm - 9:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p className="mb-5"> 6:30 pm -9:00 pm</p>
                  <a
                    className="linkk"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a>
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Rechiel}
                alt="Rechiel"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Rechiel");
                  toggleArrow("Rechiel");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container text-[90%]"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Rechiel");
                  toggleArrow("Rechiel");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Rechiel Albarracin
                <span
                  className={`arrow-down ${
                    arrowRotations.Rechiel ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Rabaya Street, Purok Mabini, Tabunok, Talisay City Cebu</p>
              {expandedProfiles.Rechiel && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p>8:30 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring:
                  </p>
                  <p>6:30 pm  - 8:30 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p>6:30 pm - 8:30 pm</p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" id="cebu_central-section"/>
            </div>

            
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image"
          >

            <div className="profilee">
              <img
                className="pic"
                src={Seam}
                alt="Seam"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Seam");
                  toggleArrow("Seam");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Seam");
                  toggleArrow("Seam");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Seam Labiaga
                <span
                  className={`arrow-down ${
                    arrowRotations.Seam ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p> Purok Pagatpat 1 Suba Poblacion Liloan Cebu</p>
              {expandedProfiles.Seam && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:00 am -12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>6:00 pm - 8:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting: 
                  </p>
                  <p>6:00 pm - 8:00 pm</p>
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
                <img
                  className="pic"
                  src={Vilma}
                  alt="Vilma"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Vilma");
                    toggleArrow("Vilma");
                  }}
                  style={{ cursor: "pointer" }}
                />
                <hr className="mt-2" />
                <h1
                  className="container"
                  onClick={() => {
                    closeAllProfiles();
                    toggleProfile("Vilma");
                    toggleArrow("Vilma");
                  }}
                  style={{ cursor: "pointer" }}
                >
                  Pastor Vilma Diaz
                  <span
                    className={`arrow-down ${
                      arrowRotations.Vilma ? "rotated" : ""
                    }`}
                  ></span>
                </h1>
                <p> Currently joining with RCJCIM Liloan as we're still looking for another place in Compostela</p>
                {expandedProfiles.Vilma && (
                  <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                    <hr className="text-gray-400" />
                    <p className="mt-5">Sunday Service: </p>
                    <p className="">8:00 am -12:00 nn</p>
                    <p className="mt-5">
                      Wednesday Outpouring:
                    </p>
                    <p> 6:00 pm - 8:00 pm</p>
                    <p className="mt-5">
                      Friday Prayer Meeting: 6:00 pm - 8:00 pm
                    </p>
                  </div>
                )}
                
                <hr className="mt-2" id="leyte-section"/>
              </div>
          </div>

          

          <h1
            className="text-center font-bold text-4xl mt-10"
            data-aos="fade-right"
            data-aos-delay="500"
            
          >
            LEYTE
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >
            <div className="profilee">
              <img
                className="pic"
                src={Elvie}
                alt="Elvie"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Elvie");
                  toggleArrow("Elvie");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Elvie");
                  toggleArrow("Elvie");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Elvie Bulado
                <span
                  className={`arrow-down ${
                    arrowRotations.Elvie ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>P. Gomez St. Brgy. Riverside Matag-ob, Leyte</p>
              {expandedProfiles.Elvie && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <p className="mt-5">and</p>
                  <p className="mt-5">
                    {" "}
                    Mabini St. Brgy. Mazawalo Palompon, Leyte
                  </p>
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p> 8:00 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>6:30 pm - 8:30 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p> 6:30 pm - 8:30 pm</p>

                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Oliver}
                alt="Oliver"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Oliver");
                  toggleArrow("Oliver");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Oliver");
                  toggleArrow("Oliver");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Oliver Marva
                <span
                  className={`arrow-down ${
                    arrowRotations.Oliver ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Brgy. Tuno, San Francisco , Southern Leyte</p>
              {expandedProfiles.Oliver && (
                <div className="details p-4 bg-gray-100 mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">
                    Here's an early look at the current progress. Final details
                    are pending your instructions, and I will update
                    accordingly.
                  </p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" id="mindanao-section"/>
            </div>
          </div>
          

          <h1
            className="text-center mt-10 font-bold text-4xl"
            data-aos="fade-right"
            data-aos-delay="500"
            
          >
            MINDANAO
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >
            <div className="profilee">
              <img
                className="pic"
                src={Anabel}
                alt="Anabel"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Anabel");
                  toggleArrow("EAnabel");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Anabel");
                  toggleArrow("Anabel");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Anabel Concha
                <span
                  className={`arrow-down ${
                    arrowRotations.Anabel ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>P-5 Alegria San Francisco Agusan del Sur</p>
              {expandedProfiles.Anabel && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p> 8:00 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring: 
                  </p>
                  <p>7:00 pm - 9:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p> 7:00 pm - 9:00 pm</p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Jeashin}
                alt="Jeashin"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jeashin");
                  toggleArrow("Jeashin");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Jeashin");
                  toggleArrow("Jeashin");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Jeashin Alabado
                <span
                  className={`arrow-down ${
                    arrowRotations.Jeashin ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Unidad, Barobo, Surigao del Sur</p>
              {expandedProfiles.Jeashin && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: </p>
                  <p>8:30 am - 12:00 nn</p>
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Mary}
                alt="Mary"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Mary");
                  toggleArrow("Mary");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Mary");
                  toggleArrow("Mary");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Mary Ann Oliver
                <span
                  className={`arrow-down ${
                    arrowRotations.Mary ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Cambagang, Barobo, Agusan del Sur</p>
              {expandedProfiles.Mary && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">
                    Here's an early look at the current progress. Final details
                    are pending your instructions, and I will update
                    accordingly.
                  </p>

                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>
          </div>

          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >
            <div className="profilee">
              <img
                className="pic"
                src={Merciely}
                alt="Merciely"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Merciely");
                  toggleArrow("Merciely");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Merciely");
                  toggleArrow("Merciely");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Merciely Cañete
                <span
                  className={`arrow-down ${
                    arrowRotations.Merciely ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Brgy. Pasta Agusan del Sur</p>
              {expandedProfiles.Merciely && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service:</p>
                  <p> 8:00 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring:
                  </p>
                  <p> 6:30 pm - 8:30 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p> 6:00 pm - 8:00 pm</p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>

            <div className="profilee">
              <img
                className="pic"
                src={Susan}
                alt="Susan"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Susan");
                  toggleArrow("Susan");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Susan");
                  toggleArrow("Susan");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Susan Alabado
                <span
                  className={`arrow-down ${
                    arrowRotations.Susan ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>P-16 Bahbah Prosperidad Agusan Del Sur</p>
              {expandedProfiles.Susan && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">
                    Here's an early look at the current progress. Final details
                    are pending your instructions, and I will update
                    accordingly.
                  </p>
                </div>
              )}
              <hr className="mt-2"
              id="negros-section" />
            </div>

            
          </div>

          <h1
            className="text-center mt-10 font-bold text-4xl"
            data-aos="fade-right"
            data-aos-delay="500"
            
          >
            NEGROS
          </h1>
          <div
            data-aos="fade-right"
            data-aos-delay="500"
            className="profile-image mt-10"
          >
            <div className="profilee">
              <img
                className="pic"
                src={Gene}
                alt="Gene"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Gene");
                  toggleArrow("Gene");
                }}
                style={{ cursor: "pointer" }}
              />
              <hr className="mt-2" />
              <h1
                className="container"
                onClick={() => {
                    closeAllProfiles();
                  toggleProfile("Gene");
                  toggleArrow("Gene");
                }}
                style={{ cursor: "pointer" }}
              >
                Pastor Gene Doroon
                <span
                  className={`arrow-down ${
                    arrowRotations.Gene ? "rotated" : ""
                  }`}
                ></span>
              </h1>
              <p>Proper Biak na Bato La Castellana Negros Occidental</p>
              {expandedProfiles.Gene && (
                <div className="details p-4 bg-gray-100  mt-2 rounded-lg shadow-inner">
                  
                  <hr className="text-gray-400" />
                  <p className="mt-5">Sunday Service: 8:30 am - 12:00 nn</p>
                  <p className="mt-5">
                    Wednesday Outpouring:
                  </p>
                  <p> 6:00 pm - 8:00 pm</p>
                  <p className="mt-5">
                    Friday Prayer Meeting:
                  </p>
                  <p> 6:00 pm - 8:00 pm</p>
                  {/* <a
                    className="linkk mt-5"
                    href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"
                  >
                    {" "}
                    Press to locate via Google map
                  </a> */}
                </div>
              )}
              <hr className="mt-2" />
            </div>
          </div>

          {/* <div
            className="text-center text-4xl font-DmSans-Bold mb-10"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            <h1 className="homee">IN CEBU</h1>
            <ul className="mt-4 mb-10">
              {cebuSections.map(({ title, component, key }) => (
                <React.Fragment key={key}>
                   Title row 
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
                     Arrow indicator 
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
                   Expandable content 
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
                   Title row 
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
                     Arrow indicator 
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
                   Expandable content 
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
                   Title row *
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span> */}
          {/* Arrow indicator 
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
                  </li> */}
          {/* Expandable content 
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
                <React.Fragment key={key}> */}
          {/* Title row 
                  <li
                    onClick={() => toggleSection(key)}
                    className="expand flex justify-between items-center cursor-pointer hover:bg-gray-100"
                  >
                    <span className="homee pl-5 text-xl font-DmSans">
                      {title}
                    </span>
                     Arrow indicator *
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
                  </li> */}
          {/* Expandable content 
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
          </div> */}
        </div>

       <div class="footer">
                    <div class="footer-content">
                      <div class="connect-text">connect with us</div>
                      <div class="links">
                        <a
                          href="https://www.facebook.com/rcjcim"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="link"
                        >
                          <img src={fb} alt="Facebook" class="icon" />
                          <span class="link-text">/rcjcim</span>
                        </a>
                        <a href="mailto:rcjcim2003@gmail.com" class="link">
                          <img src={Gmail} alt="Email" class="icon" />
                          <span class="link-text">rcjcim2003@gmail.com</span>
                        </a>
                      </div>
                    </div>
                    <div class="copyright">RCJCIM | 2025</div>
                  </div>
      </div>
    </>
  );
}
