import React, { useState } from "react";
import logo from "../Images/Logo.png"; // Certifique-se de que o caminho está correto
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <header className="bg-white shadow-lg py-4 md:py-6">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 md:h-24 w-auto mr-4" />
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleMenu}
              className="block md:hidden focus:outline-none mr-4"
            >
              {isOpen ? (
                <AiOutlineClose className="w-6 h-6 text-green-950" />
              ) : (
                <AiOutlineMenu className="w-6 h-6 text-green-950" />
              )}
            </button>
          </div>
          <nav className="hidden md:flex md:space-x-6 md:items-center">
            <a
              href="#services"
              className="text-xl md:text-2xl font-semibold text-green-950 hover:text-green-900 transition-colors duration-300"
            >
              Serviços
            </a>
            <a
              href="#about"
              className="text-xl md:text-2xl font-semibold text-green-950 hover:text-green-900 transition-colors duration-300"
            >
              Sobre
            </a>
            <a
              href="#contact"
              className="text-xl md:text-2xl font-semibold text-green-950 hover:text-green-900 transition-colors duration-300"
            >
              Contato
            </a>
          </nav>
        </div>
      </header>
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg py-4`}
      >
        <nav className="flex flex-col items-center">
          <a
            href="#services"
            className="text-xl md:text-2xl font-semibold text-green-950 hover:text-green-900 transition-colors duration-300 mb-4"
            style={{ fontFamily: "Open Sans, sans-serif" }}
          >
            Serviços
          </a>
          <a
            href="#about"
            className="text-xl md:text-2xl font-semibold text-green-950 hover:text-green-900 transition-colors duration-300 mb-4"
          >
            Sobre
          </a>
          <a
            href="#contact"
            className="text-xl md:text-2xl font-semibold text-green-950 hover:text-green-900 transition-colors duration-300 mb-4"
          >
            Contato
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Header;
