import React from "react";
import { Link } from "react-router-dom";

const MedicalFacialsPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://macflorida.com/assets/img/feature/home/injectables-fillers.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Medical Facials</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Experience the ultimate in skin care with our medical facials.
          </p>
          <Link to="/appointment" className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300">
            Request Appointment
          </Link>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://macflorida.com/assets/img/feature/home/injectables-fillers.jpg"
            alt="Medical Facials"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">Acne Treatment</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Our acne treatments are designed to clear up and prevent breakouts, leaving your skin looking and feeling its best.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">HydraFacial</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              The HydraFacial is a hydradermic facial that uses a combination of serums and a gentle exfoliation process to hydrate and nourish the skin.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Chemical Peels</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Chemical peels are treatments that use a chemical solution to remove the outer layer of the skin, revealing a smoother and more youthful complexion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalFacialsPage;
