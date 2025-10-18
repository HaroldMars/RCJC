import React from "react";
import Pastor from "../../assets/Rechiel.jpg";

function Talisay() {
  return (
    <div className="font-DmSans text-blue-400 max-w-md mx-auto p-4 bg-white rounded shadow-md">
      <img
        src={Pastor}
        alt="Pastor"
        className="profile"
      />
      <h1 className="text-blue-700 font-bold text-3xl mt-2 mb-2">
        Pastor Rechiel Albarracin
      </h1>
      <p className="pt-2 text-xl homee">
        Rabaya Street, Purok Mabini, Tabunok, Talisay City Cebu
      </p>
      <a className="linkk" href="https://www.google.com/maps/place/Rise+Of+Church+Of+Jesus+Christ+Talisay+City+Branch/@10.2633897,123.7739548,13z/data=!4m10!1m2!2m1!1stalisay+rise+of+church+of+jesus+christ+int'l.+min.+inc!3m6!1s0x33a99ddb6ed52893:0x1f3ade4d619b15f!8m2!3d10.2633897!4d123.8398728!15sCjZ0YWxpc2F5IHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQnbC4gbWluLiBpbmOSARBjaHVyY2hfb2ZfY2hyaXN0qgGPARABKjAiLHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5jKAAyHxABIhsAntUT_G0GCapusoEkbj72qjllhAgBf1e7044yOBACIjR0YWxpc2F5IHJpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW4gaW5j4AEA!16s%2Fg%2F11h7p8bk1j?entry=ttu&g_ep=EgoyMDI1MTAwNi4wIKXMDSoASAFQAw%3D%3D"> Press to locate via Google map</a>
    </div>
  );
}

export default Talisay;