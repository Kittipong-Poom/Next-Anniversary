"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // ตั้งค่า animation duration และให้เล่นแค่ครั้งเดียว
  }, []);

  return (
    <section className="relative w-full min-h-screen">
      {/* พื้นหลัง Parallax */}
      <div className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-fixed"></div>

      {/* เนื้อหา */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-screen bg-black/50">
        <h1
          className="text-9xl md:text-9xl font-bold text-white"
          data-aos="fade-down"
        >
          Hi Beam! 👋👋
        </h1>
      </div>
    </section>
  );
};

export default Hero;
