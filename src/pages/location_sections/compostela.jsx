import React from "react";
import Pastor from "../../assets/vilma.jpg";

function compostela() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Vilma Diaz
      </h1>
      <p className="pt-2 text-xl text-gray-700">
        Currently joining with RCJCIM Liloan as we're still looking for another place in Compostela
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Ministries+Inc.+-+Compostela/@10.444661,123.872931,12z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9bb46ee5a4ba5:0x3ff76469f50fab93!8m2!3d10.4446604!4d124.0047612!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SARBjaHJpc3RpYW5fY2h1cmNoqgGVARABKjciM2hhcmFuZyByaXNlIG9mIGNodXJjaCBvZiBqZXN1cyBjaHJpc3QgaW50IGwgbWluIGluYygAMh8QASIbKHactAjdYNvZ9XAIOcfBLLRqilHnTQnrPEs6MjcQAiIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5j4AEA!16s%2Fg%2F11ppqqd_tx?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default compostela;