import React from "react";
import Pastor from "../../assets/Jinky.jpg";

function Danao() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Jinky Casiple
      </h1>
      <p className="pt-2 text-xl text-gray-700">
        Looc, Danao Cebu (few meters away from Brgy Hall across Riders Pit Stop)
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116505,123.961267,13z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SAQZjaHVyY2iqAZUBEAEqNyIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsodpy0CN1g29n1cAg5x8EstGqKUedNCes8SzoyNxACIjNoYXJhbmcgcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbiBpbmPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default Danao;