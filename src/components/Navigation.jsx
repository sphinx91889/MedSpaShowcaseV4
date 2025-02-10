import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const phoneNumber = "(123) 456-7890";
  const telUri = `tel:${phoneNumber.replace(/\D/g, "")}`;

  const isHomePage = location.pathname === "/";
  const isAppointmentPage = location.pathname === "/appointment";
  const textColorClass = isHomePage ? "text-white" : "text-light-brown";

  return (
    <>
      {/* Mobile Hamburger */}
      <div className={`fixed top-0 left-0 right-0 h-16 z-40 md:hidden transition-all duration-300 ${isScrolled ? "bg-white/5" : ""}`}>
        <button onClick={() => setIsOpen(!isOpen)} className="absolute top-3 right-4 z-50 p-2">
          <div className="flex flex-col gap-1">
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`}></span>
          </div>
        </button>

        {!isAppointmentPage && (
          <Link to="/appointment" className="absolute top-3 left-4 px-4 py-2 text-white text-sm uppercase tracking-wider border border-light-brown transition-all duration-300 hover:border-light-brown bg-light-brown font-body text-shadow-md animate-glow">
            Request Appointment
          </Link>
        )}
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 backdrop-blur-xl transition-transform duration-500 ease-in-out z-40 md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-3xl z-50">
          &times;
        </button>
        <nav className="h-full flex items-center justify-center">
          <ul className="flex flex-col gap-8 text-center">
            {["Home", "Services", "About", "Contact", "Blog"].map((item, index) => (
              <li key={index}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className={`text-3xl font-display font-light hover:opacity-70 transition-opacity ${textColorClass} text-shadow-md`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Desktop Menu */}
      <nav className={`fixed top-0 left-0 right-0 p-6 z-30 hidden md:flex flex-col items-end transition-all duration-700 ease-in-out ${isScrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}`}>
        <div className="flex items-center justify-between w-full">
          {!isAppointmentPage && (
            <Link to="/appointment" className="px-4 py-2 text-white text-sm uppercase tracking-wider border border-light-brown transition-all duration-300 hover:border-light-brown bg-light-brown font-body text-shadow-md animate-glow">
              Request Appointment
            </Link>
          )}
          <ul className="flex justify-end gap-10 items-center">
            {["Home", "Services", "About", "Contact", "Blog"].map((item, index) => (
              <li key={index}>
                <Link to={item === "Home" ? "/" : `/${item.toLowerCase()}`} className={`uppercase tracking-wider hover:opacity-70 transition-opacity font-display text-shadow-md text-lg ${textColorClass}`}>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a href={telUri} className={`font-display text-lg tracking-wider text-right flex items-center ${textColorClass} hover:opacity-70 transition-opacity text-shadow-md`}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mr-1">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
          </svg>
          {phoneNumber}
        </a>
      </nav>
    </>
  );
};
