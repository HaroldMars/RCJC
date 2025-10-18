import React from "react";
import Pastor from "../../assets/Elvie.jpg";

function Palompon() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Elvie Bulado
      </h1>
      <p className="pt-2 text-xl homee">
        Mabini St. Brgy. Mazawalo Palompon, Leyte
      </p>
      {/*<a className="linkk" href=""> Press to locate via Google map</a>*/}
    </div>
  );
}

export default Palompon;