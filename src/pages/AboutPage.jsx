import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-light-brown/50 pt-32 pb-20">
      {/* Hero Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: "url('https://source.unsplash.com/1600x900/?spa,relaxation')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-6">
          <h1 className="text-5xl font-display font-bold text-white mb-4">Welcome to Examplus Medical Spa</h1>
          <p className="text-xl font-body max-w-2xl mx-auto">
            A sanctuary of beauty, wellness, and rejuvenation—where science meets luxury for exceptional results.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src="https://images.pexels.com/photos/7581575/pexels-photo-7581575.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Our Philosophy"
            className="w-full md:w-1/2 rounded-lg shadow-lg object-cover"
          />
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-display text-dark-brown mb-4">Our Philosophy</h2>
            <p className="text-lg font-body text-dark-green leading-relaxed">
              At Examplus Medical Spa, we believe in the power of self-care, confidence, and overall well-being. Our team 
              of highly skilled professionals specializes in cutting-edge aesthetic and wellness treatments designed to 
              enhance your natural beauty while promoting long-term health.
            </p>
          </div>
        </div>
      </div>

      {/* Services and Expertise Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display text-dark-brown mb-8">Why Choose Examplus?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/16131207/pexels-photo-16131207/free-photo-of-woman-during-facial-treatment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="State-of-the-Art Technology"
                className="rounded-lg shadow-lg mb-4 w-full h-auto"
              />
              <h3 className="text-2xl font-display text-light-brown mb-2">State-of-the-Art Technology</h3>
              <p className="text-lg font-body text-dark-green">
                Our spa is equipped with the latest advancements in medical aesthetics to deliver safe and effective treatments.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Expert Professionals"
                className="rounded-lg shadow-lg mb-4 w-full h-auto"
              />
              <h3 className="text-2xl font-display text-light-brown mb-2">Expert Professionals</h3>
              <p className="text-lg font-body text-dark-green">
                Our licensed specialists have extensive experience in aesthetic medicine, ensuring top-tier care for every client.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <img
                src="https://images.pexels.com/photos/7088483/pexels-photo-7088483.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Customized Treatment Plans"
                className="rounded-lg shadow-lg mb-4 w-full h-auto"
              />
              <h3 className="text-2xl font-display text-light-brown mb-2">Customized Treatment Plans</h3>
              <p className="text-lg font-body text-dark-green">
                Every individual is unique—our treatments are tailored to your specific skin, body, and wellness needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h2 className="text-4xl font-display text-dark-brown mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-body text-dark-green italic">
              "Examplus Medical Spa transformed my skin! The staff is so welcoming and knowledgeable. Highly recommend!"
            </p>
            <p className="text-light-brown font-display font-bold mt-4">- Sarah L.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-body text-dark-green italic">
              "Best medspa experience ever. The treatments were luxurious and effective. I'll definitely be back!"
            </p>
            <p className="text-light-brown font-display font-bold mt-4">- Jason M.</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-body text-dark-green italic">
              "Amazing results! My skin has never felt better. The personalized care is unmatched."
            </p>
            <p className="text-light-brown font-display font-bold mt-4">- Emily R.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-dark-brown text-white py-16 text-center">
        <h2 className="text-4xl font-display mb-4">Experience Luxury & Wellness</h2>
        <p className="text-xl font-body mb-6 max-w-2xl mx-auto">
          Take the first step in your beauty and wellness journey. Book a consultation with one of our experts today.
        </p>
        <a
          href="/appointment"
          className="px-6 py-3 bg-light-brown text-white rounded-full text-xl hover:bg-light-brown/90 transition duration-300"
        >
          Schedule a Consultation
        </a>
      </div>
    </div>
  );
};

export default AboutPage;
