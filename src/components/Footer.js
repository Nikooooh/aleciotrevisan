import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-white to-gray-50 text-indigo-950 py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-lg text-sky-950 font-semibold">
            &copy; 2024 Advogado Alecio Trevisan - Todos os direitos reservados
            - OAB-PR 27.999
          </p>
          <p className="text-md text-sky-950">
            R. Luís Spigolon, 1682 - Centro - Paranavaí-PR
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-end space-x-6">
          <a href="#" className="text-sky-950  ">
            <FaFacebook className="w-6 h-6" />
          </a>
          <a href="#" className="text-sky-950  ">
            <FaTwitter className="w-6 h-6" />
          </a>
          <a href="#" className="text-sky-950 ">
            <FaInstagram className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
