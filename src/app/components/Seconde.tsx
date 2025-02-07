import React, { useEffect } from "react";
import AOS from "aos";
const Seconde = () => {
  useEffect(() => {
    AOS.init();
  });
  return (
    /* From Uiverse.io by alexruix */

    <section className="relative w-full min-h-screen">
      {/* พื้นหลัง Parallax */}
      <div className="absolute inset-0 bg-seconde-bg bg-fill bg-center bg-fixed"></div>

      {/* เนื้อหา */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen bg-black/50">
        <h1
          className="text-5xl md:text-6xl font-bold text-white"
          data-aos="fade-down"
        >
          มีอะไรจะบอก 😁😁
        </h1>
      </div>
    </section>
  );
};

export default Seconde;
