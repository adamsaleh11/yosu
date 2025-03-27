import React from "react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-[#2699FB] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* About Us */}
          <div>
            <h4 className="text-lg font-bold mb-4">About Us</h4>
            <p className="text-sm leading-relaxed">
              We are a community of former athletes, coaches, and sports
              enthusiasts dedicated to fostering athletic growth in young
              individuals by offering diverse multi-sport programs.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <p className="text-sm">
              Email:{" "}
              <a href="mailto:info@yourwebsite.com" className="hover:underline">
                zijo.nistovic@gmail.com
              </a>
            </p>
            <p className="text-sm">Phone: +1 (613) 276-9031</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:underline block text-sm leading-relaxed"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:underline block text-sm leading-relaxed"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#locations"
                  className="hover:underline block text-sm leading-relaxed"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#footer"
                  className="hover:underline block text-sm leading-relaxed"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Credits */}
        <div className="mt-8 text-center text-xs sm:text-sm">
          © {new Date().getFullYear()} Saleh Groups. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
