import React from "react";

const ContactPage = () => {
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
          <h1 className="text-5xl font-display font-bold text-white mb-4">Contact Us</h1>
          <p className="text-xl font-body max-w-2xl mx-auto">
            Get in touch with us for inquiries, appointments, or more information about our services.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-display text-dark-brown mb-6">Get in Touch</h2>
            <p className="text-lg font-body text-dark-green mb-4">
              We’re here to answer your questions and help you book the perfect service.
            </p>
            <div className="text-lg font-body text-dark-green space-y-4">
              <p>
                <strong>Phone:</strong>{" "}
                <a href="tel:(213)555-5555" className="text-light-brown hover:underline">
                  (213) 555-5555
                </a>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@examplusmedspa.com" className="text-light-brown hover:underline">
                  info@examplusmedspa.com
                </a>
              </p>
              <p>
                <strong>Location:</strong> 123 Wellness Ave, Los Angeles, CA 90001
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-3xl font-display text-dark-brown mb-6">Send Us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-dark-brown text-lg font-bold mb-2">Full Name*</label>
                <input
                  type="text"
                  className="w-full border rounded py-3 px-4 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  required
                />
              </div>
              <div>
                <label className="block text-dark-brown text-lg font-bold mb-2">Email Address*</label>
                <input
                  type="email"
                  className="w-full border rounded py-3 px-4 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  required
                />
              </div>
              <div>
                <label className="block text-dark-brown text-lg font-bold mb-2">Message*</label>
                <textarea
                  className="w-full border rounded py-3 px-4 text-dark-brown focus:outline-none focus:ring-2 focus:ring-light-brown"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-light-brown hover:bg-light-brown/90 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-dark-brown text-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-dark-brown text-white py-16 text-center">
        <h2 className="text-4xl font-display mb-4">Visit Us Today</h2>
        <p className="text-xl font-body mb-6 max-w-2xl mx-auto">
          Ready to experience the best in beauty and wellness? Book your consultation now.
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

export default ContactPage;
