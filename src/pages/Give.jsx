import React from "react";
import Header from "../components/Header";
import "aos/dist/aos.css";
import AOS from "aos";
import fb from "../assets/facebook.png";
import Gmail from "../assets/gmail.png";
AOS.init();

export default function Give() {
  return (
    <div className="nav-text bg-white w-screen font-Roboto h-fit text-black">
      <Header />
      <div className="bg-white w-screen h-fit text-black text-center pt-30">
      
              {/* lesterlines: Updated Remittance Information */}
              <div style={{ maxWidth: '800px', margin:  '0 auto', padding: '40px 20px' }}>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '30px', color: '#1a1a1a' }}>
                  Give
                </h1>
                
                <div style={{ backgroundColor: '#f8f9fa', padding: '30px', borderRadius: '10px', marginBottom:  '20px' }}>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '0px', color: '#2c3e50' }}>
                    You can send your tithes and offerings to support
                  </h2>
                  <h2 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '25px', color: '#2c3e50' }}>
                    Rise of Church of Jesus Christ International Ministries (RCJCIM) by:
                  </h2>
                  
                  {/* Bank Transfer Section */}
                  <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', marginBottom: '25px', textAlign: 'left', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '15px', color: '#2c3e50', borderBottom: '2px solid #3498db', paddingBottom: '10px' }}>
                      💳 Bank Transfer
                    </h3>
                    <div style={{ lineHeight: '1.8' }}>
                      <p style={{ marginBottom: '10px' }}>
                        <strong>Bank: </strong> Bank of the Philippine Islands (BPI)
                      </p>
                      <p style={{ marginBottom:  '10px' }}>
                        <strong>Account Number:</strong> <span style={{ fontSize: '1.1rem', color: '#2980b9', fontFamily: 'monospace' }}>009113-0662-98</span>
                      </p>
                      <p>
                        <strong>Account Name:</strong> Rise of Church of Jesus Christ International Ministries Inc. 
                      </p>
                    </div>
                  </div>
                  
                  {/* GCash Section */}
                  <div style={{ backgroundColor: 'white', padding: '25px', borderRadius: '8px', textAlign: 'left', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '15px', color: '#2c3e50', borderBottom: '2px solid #007dfe', paddingBottom: '10px' }}>
                      📱 GCash
                    </h3>
                    <div style={{ lineHeight: '1.8' }}>
                      <p style={{ marginBottom: '15px' }}>
                        <strong>Name:</strong> Rise of Church of Jesus Christ Intl Ministries
                      </p>
                      <p style={{ marginBottom: '15px', color: '#555' }}>
                        <strong>GCash QR Code: </strong> (please check the pinned photo for reference)
                      </p>
                      <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        {/* Replace this src with your actual GCash QR code image path */}
                        <img 
                          src="/qr-code.jpg" 
                          alt="GCash QR Code" 
                          style={{ 
                            maxWidth:  '300px', 
                            width: '100%', 
                            height: 'auto', 
                            border: '2px solid #007dfe', 
                            borderRadius: '8px',
                            padding: '10px',
                            backgroundColor: 'white'
                          }} 
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '20px' }}>
                  Thank you for your generous support and partnership in ministry!
                </p>
              </div>
      </div>

      <div class="footer">
              <div class="footer-content">
                <div class="connect-text">connect with us</div>
                <div class="links">
                  <a
                    href="https://www.facebook.com/rcjcim"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="link"
                  >
                    <img src={fb} alt="Facebook" class="icon" />
                    <span class="link-text">/rcjcim</span>
                  </a>
                  <a href="mailto:rcjcim2003@gmail.com" class="link">
                    <img src={Gmail} alt="Email" class="icon" />
                    <span class="link-text">rcjcim2003@gmail.com</span>
                  </a>
                </div>
              </div>
              <div class="copyright">RCJCIM | 2025</div>
            </div>
    </div>
  );
}