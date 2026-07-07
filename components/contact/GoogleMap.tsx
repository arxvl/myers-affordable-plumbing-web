import React from "react";

export function GoogleMap() {
  // Using the exact address encoded for a URL
  const addressQuery = "714%20N%20Pine%20St,%20Richland,%20MO%2065556";
  const mapSrc = `https://maps.google.com/maps?q=${addressQuery}&t=&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="w-full h-64 sm:h-80 bg-gray-200 rounded-xl overflow-hidden relative border border-gray-100 shadow-sm group">
      {/* 
        The iframe handles the actual Google Map rendering.
        loading="lazy" ensures it doesn't slow down your website's initial page load.
      */}
      <iframe
        title="Myers Affordable Plumbing Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2925.0529527493186!2d-92.40194525018691!3d37.862855487039056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87dad3f33bc3b57d%3A0x86bd7bfcd314c3c!2sMyers%20Affordable%20Plumbing!5e1!3m2!1sen!2sph!4v1783431459866!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 grayscale-[20%] contrast-[1.1] transition-all duration-500 group-hover:grayscale-0"
      ></iframe>
    </div>
  );
}