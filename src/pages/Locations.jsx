import React from "react";
import Background from "../assets/locationpic.jpg";
import Header from "../components/Header";
import Logo from "../assets/logo.png";

export default function Locations() {
  return (
    <>
      <div className="bg-white w-screen h-fit text-black ">
        <Header />

        <div className="relative h-200 w-screen">
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

        <div className="h-400">
          <div className=" items-center">
            <img src={Logo} alt="" className="w-30 ml-38 mt-5 mb-5" />
            <ul className="text-center">
              <h2 className="font-bold text-2xl mb-4">BOHOL</h2>
              <li className="pt-3">
                <a
                  href="https://www.google.com/maps?q=10.1504623,124.2297074"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Bagacay
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps?q=10.1573721,124.0405823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Cabul-an
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps?q=10.0030779,124.2934847"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Ubay
                </a>
              </li>
            </ul>

            <ul className="text-center mt-10">
              <h2 className="font-bold text-2xl mb-4">CEBU</h2>
              <li className="pt-3">
                <a
                  href="https://www.google.com/maps/place/Jesus+Christ+Restoration+of+Life+Ministries/@11.1906952,123.5781271,10z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries++bogo!3m6!1s0x33a8693eb0a3c57b:0xbda52d2fab4fb6a0!8m2!3d11.0495771!4d124.0223683!15sCjVSaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllcyAgYm9nb5IBEGNodXJjaF9vZl9jaHJpc3SqAZEBEAEqMyIvcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMoADIeEAEiGiaelQrWks1I7JZWrXOSZizkcS4Ahb8Znl36MjgQAiI0cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgYm9nb-ABAA!16s%2Fg%2F11hzvx2kfl?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Bogo
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Ministries+-+Kawit+Medellin/@11.1906952,123.4236717,10z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries++bogo!3m6!1s0x33a87b153662f385:0xa9c27baf12e960cb!8m2!3d11.1907303!4d123.9510403!15sCjVSaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllcyAgYm9nb5IBEGNocmlzdGlhbl9jaHVyY2iqAZEBEAEqMyIvcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMoADIeEAEiGiaelQrWks1I7JZWrXOSZizkcS4Ahb8Znl36MjgQAiI0cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgYm9nb-ABAA!16s%2Fg%2F11rv1qqqs8?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Medellin
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Ministries+Inc.+-+Compostela/@10.4446821,123.691185,10z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries+!3m6!1s0x33a9bb46ee5a4ba5:0x3ff76469f50fab93!8m2!3d10.4446604!4d124.0047612!15sCi9SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllc5IBEGNocmlzdGlhbl9jaHVyY2iqAVgQATIfEAEiGwMBCQ_AHSJwVRH7q9ntTADLJT9raq1DVGTbdjIzEAIiL3Jpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW5pc3RyaWVz4AEA!16s%2Fg%2F11ppqqd_tx?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Compostela
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministry+Inc./@10.5116952,123.4998035,10z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries+!3m6!1s0x33a9bb004ee31293:0xbd5dec52f63862cb!8m2!3d10.5116505!4d124.027185!15sCi9SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllc5IBBmNodXJjaKoBWBABMh8QASIbAwEJD8AdInBVEfur2e1MAMslP2tqrUNUZNt2MjMQAiIvcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXPgAQA!16s%2Fg%2F11wj2f82mt?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Danao
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l.+Ministries/@10.07484,122.396965,9z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries+!3m6!1s0x33abdf1665233201:0xc8744c044f640f31!8m2!3d10.0748756!4d123.4516627!15sCi9SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllc5IBBmNodXJjaKoBWBABMh8QASIbAwEJD8AdInBVEfur2e1MAMslP2tqrUNUZNt2MjMQAiIvcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXPgAQA!16s%2Fg%2F11nxnrvynd?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Dumanjug
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Ministries+-+Mandaue/@10.3255455,123.6884517,11z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries+!3m6!1s0x33a9992be6883d23:0xb3a18506188a71f2!8m2!3d10.3255455!4d123.9521236!15sCi9SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllc5IBEGNocmlzdGlhbl9jaHVyY2iqAVgQATIfEAEiGwMBCQ_AHSJwVRH7q9ntTADLJT9raq1DVGTbdjIzEAIiL3Jpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW5pc3RyaWVz4AEA!16s%2Fg%2F11gwjr8b4f?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Mandaue
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+Of+Church+Of+Jesus+Christ+Talisay+City+Branch/@10.2634045,123.5762358,11z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries++bogo!3m6!1s0x33a99ddb6ed52893:0x1f3ade4d619b15f!8m2!3d10.2633897!4d123.8398728!15sCjVSaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllcyAgYm9nb5IBEGNodXJjaF9vZl9jaHJpc3SqAZEBEAEqMyIvcmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMoADIeEAEiGiaelQrWks1I7JZWrXOSZizkcS4Ahb8Znl36MjgQAiI0cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgYm9nb-ABAA!16s%2Fg%2F11h7p8bk1j?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Talisay
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+Of+Church+Of+Jesus+Christ+Int'l+Ministries/@10.2898563,123.3461293,10z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries++telecom!3m6!1s0x33a99c101299cf61:0x2e76a26c8df1ea16!8m2!3d10.2898563!4d123.873473!15sCjhSaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllcyAgdGVsZWNvbZIBEGNocmlzdGlhbl9jaHVyY2iqAXoKCy9nLzEyMzJqbTFkEAEqCyIHdGVsZWNvbSgAMh8QASIbAx6Y9fiBU9yse-ndEE0NUzmI5_ikjHaWE2hMMjsQAiI3cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgdGVsZWNvbeABAA!16s%2Fg%2F11ckkydgyl?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM telecom
                </a>
              </li>
              <li className="pt-11">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Tabok
                </a>
              </li>
            </ul>


            <ul className="text-center mt-10">
              <h2 className="font-bold text-2xl mb-4">LEYTE</h2>
              <li className="pt-3">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministries+Inc.+-+Matag-ob,+Leyte/@11.144719,123.4157753,9z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int'l+Ministries++leyte!3m6!1s0x33a8039e765a8c15:0x8dbaf8e2ae45f8c2!8m2!3d11.1447243!4d124.4704374!15sCjZSaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW50J2wgTWluaXN0cmllcyAgbGV5dGWSARBjaHJpc3RpYW5fY2h1cmNoqgFeEAEyHxABIhtyjo829tSIJj3ttu9cn1UKvmoegMi7qswxmzQyORACIjVyaXNlIG9mIGNodXJjaCBvZiBqZXN1cyBjaHJpc3QgaW50IGwgbWluaXN0cmllcyBsZXl0ZeABAA!16s%2Fg%2F11pr6q1vn2?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Matag-ob
                </a>
              </li>
              <li className="pt-11">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l.+Ministries+Inc.+-+Tuno/@10.5890527,124.1698908,9z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministries+Inc.+-+tuno!3m6!1s0x3307293df9a6ca93:0xee7347e53f9a3e0c!8m2!3d10.034752!4d125.1881981!15sCj1SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW504oCZbCBNaW5pc3RyaWVzIEluYy4gLSB0dW5vkgEQY2hyaXN0aWFuX2NodXJjaKoBYRABMh8QASIbB6qGzFsJ2TO95z_FFNC05luj468jjyQ4fwQFMjwQAiI4cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgaW5jIHR1bm_gAQA!16s%2Fg%2F11pbtv8t5t?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Tuno
                </a>
              </li>
            </ul>

            <ul className="text-center mt-10">
              <h2 className="font-bold text-2xl mb-4">MINDANAO</h2>
              <li className="pt-3">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l+Min.+-+Acad/@7.9545171,120.047973,7z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministries+Inc.+-+bahbah!3m6!1s0x325439dc5fe78a55:0xb3e7808ae9be86fa!8m2!3d7.9545804!4d123.5951925!15sCj9SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW504oCZbCBNaW5pc3RyaWVzIEluYy4gLSBiYWhiYWiSARBjaHJpc3RpYW5fY2h1cmNoqgFzEAEqDiIKaW5jIGJhaGJhaCgAMh8QASIbAwD7_qUpWlsoMklDOCtEJYnJprRzll_nrKdSMj4QAiI6cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgaW5jIGJhaGJhaOABAA!16s%2Fg%2F11n7sfs599?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Bahbah
                </a>
              </li>
            </ul>


            <ul className="text-center mt-10">
              <h2 className="font-bold text-2xl mb-4">NEGROS</h2>
              <li className="pt-3">
                <a
                  href="https://www.google.com/maps/place/Rise+of+Church+of+Jesus+Christ+Int'l.+Min.+-La+Castellana+Branch./@10.3270789,118.0051882,6z/data=!4m10!1m2!2m1!1sRise+of+Church+of+Jesus+Christ+Int%E2%80%99l+Ministries+Inc.+-+negros!3m6!1s0x33aeb3820bbddb71:0xc02419271d3f991d!8m2!3d10.3271656!4d123.0226618!15sCj9SaXNlIG9mIENodXJjaCBvZiBKZXN1cyBDaHJpc3QgSW504oCZbCBNaW5pc3RyaWVzIEluYy4gLSBuZWdyb3OSARBjaHJpc3RpYW5fY2h1cmNoqgGcARABKjciM3Jpc2Ugb2YgY2h1cmNoIG9mIGplc3VzIGNocmlzdCBpbnQgbCBtaW5pc3RyaWVzIGluYygAMh8QASIbC0JDsz1jGcpZoBuGFNGf8mHwapZToUxSnojkMj4QAiI6cmlzZSBvZiBjaHVyY2ggb2YgamVzdXMgY2hyaXN0IGludCBsIG1pbmlzdHJpZXMgaW5jIG5lZ3Jvc-ABAA!16s%2Fg%2F11r5_3645w?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="box text-blue-500 hover:underline p-5"
                >
                  RCJCIM Biak na Bato
                </a>
              </li>
            </ul>
          </div>

          

        </div>
        <div className="bg-gray-700 w-full text-black">
                  <footer className="foot text-white py-6 mt-10 h-100">
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
