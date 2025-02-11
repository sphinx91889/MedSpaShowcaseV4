import React from "react";
import { Link } from "react-router-dom";

const BodyContouringPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://macflorida.com/assets/img/feature/home/body.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Body Contouring</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Achieve your ideal body shape with our body contouring treatments.
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
            src="https://coastalaesthetic.com/wp-content/uploads/AdobeStock_507600380-2048x1155.webp"
            alt="Body Contouring"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">CoolSculpting</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              CoolSculpting is a non-invasive treatment that uses controlled cooling to reduce stubborn fat deposits, providing a more sculpted and toned appearance. This treatment is safe and effective, and can be performed in a single session or over multiple sessions, depending on the individual's needs.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Liposuction</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Liposuction is a surgical procedure that removes excess fat from specific areas of the body, providing a more defined and contoured appearance. This treatment is highly effective, and can be performed using a variety of techniques, including tumescent liposuction and power-assisted liposuction.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Skin Tightening</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Skin tightening treatments use various technologies to improve the texture and elasticity of the skin, reducing the appearance of sagging and wrinkles. These treatments can help to reveal a smoother and more youthful complexion.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Body Sculpting</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Body sculpting treatments can help to improve the appearance of your body by reducing fat deposits and tightening the skin. We offer a range of treatments, including CoolSculpting and liposuction, to help you achieve your body sculpting goals.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Permanent Makeup</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Permanent makeup treatments can help to enhance your natural features, providing a more youthful and refreshed look. We offer a range of treatments, including eyebrow shaping, eyeliner, and lip liner, to help you achieve your permanent makeup goals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyContouringPage;
