import React from "react";
import Pastor from "../../assets/pastor.jpg";

function Bacagay() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-xl mb-2">
        Pastor's Name
      </h1>
      <p className="pt-2 text-gray-700">
        Church Address
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Bagacay+Barangay+Hall/@9.2996981,122.2389103,9z/data=!4m10!1m2!2m1!1srcjcim+bagacay!3m6!1s0x33ab6f253b8b9443:0x64d9324b31ffcbf8!8m2!3d9.2996981!4d123.2935978!15sCg5yY2pjaW0gYmFnYWNheZIBDHZpbGxhZ2VfaGFsbOABAA!16s%2Fg%2F11rj63m3fx?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default Bacagay;