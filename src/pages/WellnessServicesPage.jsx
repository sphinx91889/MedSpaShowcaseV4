import React from "react";
import { Link } from "react-router-dom";

const WellnessServicesPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/16571736/pexels-photo-16571736/free-photo-of-woman-during-facial-treatment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Wellness Services</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Discover our comprehensive wellness services designed to enhance your overall health and well-being.
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
            src="https://images.pexels.com/photos/16571736/pexels-photo-16571736/free-photo-of-woman-during-facial-treatment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Wellness Services"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">Hormone Therapy (HRT)</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Hormone therapy can help to balance your hormone levels, improving your mood, energy, and overall well-being. Our team of highly skilled professionals specializes in cutting-edge aesthetic and wellness treatments designed to enhance your natural beauty while promoting long-term health.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Women's Wellness</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Our women's wellness services are tailored to address the unique health needs of women, providing personalized care and support. From hormone therapy to medical weight loss, we offer a range of treatments and therapies to help you achieve your wellness goals.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Men's Wellness</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Our men's wellness services focus on improving your health, vitality, and appearance, offering a range of treatments and therapies. Whether you're looking to reduce stress, improve your energy levels, or enhance your skin health, we have a treatment for you.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">Medical Weight Loss</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              Our medical weight loss programs combine personalized treatment plans with expert guidance to help you achieve your weight loss goals. We offer a range of treatments and therapies, including hormone therapy and IV therapy, to help you lose weight safely and effectively.
            </p>
            <h2 className="text-4xl font-display text-dark-brown mb-4 mt-8">IV Therapy</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              IV therapy delivers essential vitamins, minerals, and other nutrients directly into your bloodstream, providing quick and effective results. Our team of experts can help you determine the best IV therapy treatment plan for your individual needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessServicesPage;
