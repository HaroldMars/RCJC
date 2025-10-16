import React from "react";
import Pastor from "../../assets/pfp.jpg";

function Harang() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Lucena Merida
      </h1>
      <p className="pt-2 text-xl text-gray-700">
        Tagunol, Basak San Nicolas, Cebu City
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Rise+Of+Church+Of+Jesus+Christ+Int'l+Ministries/@10.2705951,123.7635822,12z/data=!4m10!1m2!2m1!1sharang+rise+of+church+of+jesus+christ+int'l.+min.+inc!3m6!1s0x33a99c101299cf61:0x2e76a26c8df1ea16!8m2!3d10.2898563!4d123.873473!15sCjVoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCdsLiBtaW4uIGluY5IBEGNocmlzdGlhbl9jaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11ckkydgyl?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default Harang;