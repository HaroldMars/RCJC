import React from "react";
import Pastor from "../../assets/Jocelyn.jpg";

function Ubay() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Jocelyn Pogoy
      </h1>
      <p className="pt-2 text-xl text-gray-700">
        Purok 2 Poblacion Ubay Bohol
      </p>
      {/*<a className="linkk" href=""> Press to locate via Google map</a>*/}
    </div>
  );
}

export default Ubay;