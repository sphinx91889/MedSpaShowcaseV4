import React from "react";
import { Link } from "react-router-dom";

const LaserTreatmentsPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://macflorida.com/assets/img/feature/home/laser-energy-for-face-body.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Laser Treatments</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Experience the power of laser technology for a variety of aesthetic and medical treatments.
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
            src="https://macflorida.com/assets/img/feature/home/laser-energy-for-face-body.jpg"
            alt="Laser Treatments"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">Laser Hair Removal</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Our laser hair removal treatments provide long-lasting results, reducing the need for shaving and waxing. This treatment uses a laser to target the hair follicles, damaging them and preventing hair from growing back.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Hair Restoration</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Hair restoration treatments can help to regrow hair in areas where it has thinned or fallen out. We offer a range of treatments, including laser hair therapy and hair transplant surgery, to help you achieve your hair restoration goals.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Electrolysis</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Electrolysis is a permanent hair removal treatment that uses electricity to destroy hair follicles. This treatment can help to remove unwanted hair from the face, body, and other areas, providing long-lasting results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaserTreatmentsPage;
