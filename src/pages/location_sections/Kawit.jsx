import React from "react";
import Pastor from "../../assets/pfp.jpg";

function Kawit() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Pedro Baring
      </h1>
      <p className="pt-2 text-xl text-gray-700">
        Sitio Capayawan, Kawit, Medellin, Cebu
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Ministries+-+Kawit+Medellin/@11.1906952,122.896328,9z/data=!4m10!1m2!2m1!1skawit+rise+of+church+of+jesus+christ+int'l.+min.+inc!3m6!1s0x33a87b153662f385:0xa9c27baf12e960cb!8m2!3d11.1907303!4d123.9510403!15sCjRrYXdpdCByaXNlIG9mIGNodXJjaCBvZiBqZXN1cyBjaHJpc3QgaW50J2wuIG1pbi4gaW5jkgEQY2hyaXN0aWFuX2NodXJjaKoBjQEQASowIixyaXNlIG9mIGNodXJjaCBvZiBqZXN1cyBjaHJpc3QgaW50IGwgbWluIGluYygAMh8QASIbKMOMFNxb_G3-LXOG1r7Rjt3z4ctJUTHfUJ-eMjYQAiIya2F3aXQgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11rv1qqqs8?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default Kawit;