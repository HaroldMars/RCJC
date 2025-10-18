import React from "react";
import Pastor from "../../assets/Genorima.jpg";

function Mandaue() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Geronima Merida
      </h1>
      <p className="pt-2 text-xl homee">
        A.C. Cortes Ave. (Interior), Looc, Mandaue City
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Ministries+-+Mandaue/@10.325559,123.76573,11z/data=!4m10!1m2!2m1!1sharang+Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+Inc.!3m6!1s0x33a9992be6883d23:0xb3a18506188a71f2!8m2!3d10.3255455!4d123.9521236!15sCjZoYXJhbmcgUmlzZSBvZiBDaHVyY2ggb2YgSmVzdXMgQ2hyaXN0IEludCdsLiBNaW4uIEluYy6SARBjaHJpc3RpYW5fY2h1cmNoqgGVARABKjciM2hhcmFuZyByaXNlIG9mIGNodXJjaCBvZiBqZXN1cyBjaHJpc3QgaW50IGwgbWluIGluYygAMh8QASIbKHactAjdYNvZ9XAIOcfBLLRqilHnTQnrPEs6MjcQAiIzaGFyYW5nIHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5j4AEA!16s%2Fg%2F11gwjr8b4f?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default Mandaue;