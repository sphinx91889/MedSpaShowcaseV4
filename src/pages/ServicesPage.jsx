import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    category: "Cosmetic Injectables",
    services: [
      { name: "Wrinkle Relaxers", path: "/cosmetic-injectables" },
      { name: "Fillers", path: "/cosmetic-injectables" },
      { name: "Fat Dissolvents", path: "/cosmetic-injectables" },
      { name: "Botox", path: "/cosmetic-injectables" },
      { name: "RHA", path: "/cosmetic-injectables" },
    ],
    image: "https://macflorida.com/assets/img/feature/home/wellness-services.jpg",
    path: "/cosmetic-injectables",
  },
  {
    category: "Skin Rejuvenation",
    services: [
      { name: "Facials", path: "/skin-rejuvenation" },
      { name: "Lasers", path: "/skin-rejuvenation" },
      { name: "Microneedling", path: "/skin-rejuvenation" },
      { name: "Chemical Peels", path: "/skin-rejuvenation" },
      { name: "PDO Threads", path: "/skin-rejuvenation" },
      { name: "Skin Resurfacing", path: "/skin-rejuvenation" },
      { name: "Morpheus8", path: "/skin-rejuvenation" },
    ],
    image: "https://macflorida.com/assets/img/feature/home/injectables-fillers.jpg",
    path: "/skin-rejuvenation",
  },
  {
    category: "Wellness Services",
    services: [
      { name: "Hormone Therapy (HRT)", path: "/wellness-services" },
      { name: "Women's Wellness", path: "/wellness-services" },
      { name: "Men's Wellness", path: "/wellness-services" },
      { name: "Medical Weight Loss", path: "/wellness-services" },
      { name: "IV Therapy", path: "/wellness-services" },
    ],
    image: "https://images.pexels.com/photos/16571736/pexels-photo-16571736/free-photo-of-woman-during-facial-treatment.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/wellness-services",
  },
  {
    category: "Hair Treatments",
    services: [
      { name: "Laser Hair Removal", path: "/laser-treatments" },
      { name: "Hair Restoration", path: "/laser-treatments" },
      { name: "Electrolysis", path: "/laser-treatments" },
    ],
    image: "https://images.pexels.com/photos/19239092/pexels-photo-19239092/free-photo-of-laser-hair-removal-in-the-beauty-salon-woman-having-professional-laser-epilation-procedure-of-arm.jpeg",
    path: "/laser-treatments",
  },
  {
    category: "Body Treatments",
    services: [
      { name: "Body Sculpting", path: "/body-contouring" },
      { name: "Permanent Makeup", path: "/body-contouring" },
    ],
    image: "https://images.pexels.com/photos/3865560/pexels-photo-3865560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    path: "/body-contouring",
  },
];

const ServicesPage = () => {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl md:text-2xl font-body text-white mb-6">
            Discover the wide range of professional medical spa treatments we offer.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={service.image} alt={service.category} className="w-full h-64 object-cover" />
              <div className="p-6 text-center">
                <h2 className="text-3xl font-display text-dark-brown mb-4">
                  <Link to={service.path} className="hover:opacity-70 transition-opacity">
                    {service.category}
                  </Link>
                </h2>
                <ul className="text-lg font-body text-dark-green">
                  {service.services.map((item, i) => (
                    <li key={i} className="mb-2">
                      <Link to={item.path} className="hover:opacity-70 transition-opacity">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
