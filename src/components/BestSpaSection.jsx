import React from "react";

const BestSpaSection = () => {
  const mapEmbedHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7222406566093!2d-118.39148178829592!3d33.8194803298726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd4b56c300d84f%3A0x96620e6f02c97947!2sSpade%20Skin%20Care%20%26%20More%20Inc.!5e0!3m2!1sen!2sus!4v1739140193534!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

  return (
    <div className="w-full bg-white/10 min-h-[400px] flex flex-col items-center justify-center pt-12 px-6 mb-12">
      <h2 className="text-4xl md:text-5xl text-light-brown font-display font-bold text-center mb-4">
        Recognized as the Leading Medical Spa in Los Angeles
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl text-center mb-6">
        Our commitment to excellence, cutting-edge treatments, and client satisfaction has 
        earned us the reputation as the top-rated medical spa in Los Angeles. Experience 
        transformative results with our industry-leading aesthetic and wellness treatments.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <img
              src="https://cdn.trustindex.io/assets/platform/Google/logo.svg"
              alt="Google Logo"
              className="h-8"
            />
          </div>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src="https://cdn.trustindex.io/assets/platform/Google/star/f.svg"
                alt="Star"
                className="h-6 w-6"
              />
            ))}
          </div>
          <p className="text-sm text-gray-600">Rated 5 Stars on Google</p>
        </div>

        <div className="text-center">
          <img
            src="https://cdn.worldspaawards.com/logos/brands/3/site-logo.png"
            alt="World Spa Awards Logo"
            className="h-20 filter brightness-0 sepia-100 hue-rotate-330 saturate-50 mb-2"
          />
          <p className="text-sm text-gray-600">Voted Best Medical Spa 2024</p>
        </div>
      </div>

      {/* Responsive Map Embed */}
      <div className="mt-8 map-container" style={{ maxWidth: "600px", width: "100%" }}>
        <div dangerouslySetInnerHTML={{ __html: mapEmbedHTML }} />
      </div>
      <style>{`
        .map-container iframe {
          width: 100% !important;
          height: auto !important;
        }
      `}</style>
    </div>
  );
};

export default BestSpaSection;
