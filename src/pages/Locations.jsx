import React from "react";
import Background from "../assets/locationpic.jpg";
import Header from "../components/Header";
import Logo from "../assets/logo.png";

export default function Locations() {
  return (
    <>
      <div className="bg-white w-screen h-fit text-black ">
        <Header />

        <div className="relative h-220 w-screen">
          <img
            className="absolute inset-0 object-cover w-full h-full"
            src={Background}
            alt=""
          />
          <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
            <div className="text-green-700 dmSans text-6xl md:text-6xl font-bold text-center font-sans">
              LOCATION
            </div>
          </div>
        </div>

        <div className="h-400 bg-gray-300">
          {/* Map Section - will appear after scrolling */}
          <div className="w-full flex justify-center px-4">
  {/* Container for map and text side by side */}
  <div className="w-full max-w-5xl mt-5 flex flex-col md:flex-row items-center gap-4">
    {/* Google Map */}
    <div className="md:h-100">
      <h2 className="text-4xl font-bold mb-4 text-center">Mandaue</h2>
      <iframe
        className="google md:h-500px max-w-dvh"
        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB2NIWI3Tv9iDPrlnowr_0ZqZWoAQydKJU&q=8XG2%2B6R9%20Mandaue%2C%20Cebu%2C%20Philippines&maptype=roadmap"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Rise of Church Location"
      />
    </div>
    {/* Text side */}
    <div className="w-full md:w-1/2 p-4 ">
      
      <h1 className="text-gray-800 text-2xl">
        Address:
      </h1>
      <p className="text-gray-700">
        --!EXAMPLE ONLY!--
      </p>
      <p className="text-gray-700">
        Sunday celebration
        <br />
        Venue
        <br />
        Mandaue, Cebu
        <p className="text-gray-700 pt-5 pb-5">
        Office:
        </p>
        <p>
        Rise of Church of Jesus Christ <br /> Int'l Ministries - Mandaue
        </p>
        <h1 className="text-gray-800 text-2xl pt-5">
          Contact:
          </h1>
          <p>
          Email: <br /> phone Number:
          </p>
      </p>
    </div>
  </div>
</div>

        </div>
        <div className="bg-gray-700 w-full text-black">
          <footer className="foot text-white   h-100">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4">
              {/* Logo */}
              <img src={Logo} alt="Church Logo" className="w-16 h-16 pl--10" />
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
