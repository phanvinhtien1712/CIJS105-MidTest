import React from "react";

function Hero() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden pd-4 md:px-8">
      {/* Background image */}
      <img
        src="src/assets/spy_carousel 1.png"
        alt="Hero Background"
        className="w-full h-full object-cover"
      />

      {/* Overlay mờ */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f0f0f]"></div>

      {/* Nội dung text */}
      <div className="absolute bottom-10 left-4 md:left-8 text-white">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 px-4 md:px-8">Weather With You</h1>
        <p className="max-w-md text-  mb-5 px-4 md:px-8">
        Corrupt politicians, frenzied nationalists, and other warmongering forces constantly jeopardize the thin veneer of peace between neighboring countries Ostania and Westalis. 
        </p>
      </div>
    </section>
  );
}

export default Hero;
