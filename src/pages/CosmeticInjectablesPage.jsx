import React from "react";
import { Link } from "react-router-dom";

const CosmeticInjectablesPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://macflorida.com/assets/img/feature/home/wellness-services.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Cosmetic Injectables</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Enhance your appearance with our cosmetic injectables.
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
            src="https://macflorida.com/assets/img/feature/home/wellness-services.jpg"
            alt="Cosmetic Injectables"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">Wrinkle Relaxers</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Our wrinkle relaxers are designed to reduce the appearance of fine lines and wrinkles, giving you a more youthful and refreshed look.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Fillers</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Fillers can help to restore volume and smooth out wrinkles, providing a natural and youthful appearance.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Fat Dissolvents</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Fat dissolvents are non-surgical treatments that can help to reduce stubborn fat deposits, giving you a more sculpted and toned appearance.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Botox</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Botox is a popular injectable treatment that can help to reduce the appearance of fine lines and wrinkles, providing a more youthful and refreshed look.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">RHA</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              RHA is a dermal filler that can help to restore volume and smooth out wrinkles, providing a natural and youthful appearance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CosmeticInjectablesPage;
