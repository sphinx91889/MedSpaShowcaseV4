import React from "react";
import { Link } from "react-router-dom";

const SkinRejuvenationPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://macflorida.com/assets/img/feature/home/skin-hair-rejuvenation.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Skin Rejuvenation</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Discover how our skin rejuvenation treatments can help you look and feel your best.
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
            src="https://macflorida.com/assets/img/feature/home/skin-hair-rejuvenation.jpg"
            alt="Skin Rejuvenation"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">Facials</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Facials are a cornerstone of any skincare routine, offering a range of benefits that can improve the health and appearance of your skin. Regular facials can help to remove dead skin cells, unclog pores, and reduce the appearance of fine lines and wrinkles. They can also help to hydrate and nourish your skin, leaving it looking and feeling refreshed and rejuvenated.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Lasers</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Laser treatments can help to improve the appearance of your skin by reducing the appearance of fine lines, wrinkles, and skin texture irregularities. They can also help to remove unwanted hair and improve skin tone.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Microneedling</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Microneedling is a minimally invasive treatment that uses fine needles to create tiny punctures in the skin, stimulating the production of collagen and elastin. This can help to improve skin texture, reduce the appearance of fine lines and wrinkles, and enhance overall skin health.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Chemical Peels</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Chemical peels are treatments that use a chemical solution to remove the outer layer of the skin, revealing a smoother and more youthful complexion. They can help to reduce the appearance of fine lines, wrinkles, and hyperpigmentation, and can be tailored to your specific skin needs.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">PDO Threads</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              PDO threads are absorbable sutures that are inserted into the skin to stimulate collagen production and improve skin texture. They can help to reduce the appearance of fine lines and wrinkles, and can be used to lift and tighten the skin.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Skin Resurfacing</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Skin resurfacing treatments use various technologies to improve the texture and elasticity of the skin, reducing the appearance of fine lines and wrinkles. These treatments can help to reveal a smoother and more youthful complexion.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Morpheus8</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Morpheus8 is a non-invasive treatment that uses radiofrequency energy to stimulate collagen production and improve skin texture. It can help to reduce the appearance of fine lines and wrinkles, and can be used to tighten and lift the skin.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkinRejuvenationPage;
