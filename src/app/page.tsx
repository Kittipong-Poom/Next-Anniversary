"use client";

import React from "react";
import Hero from "./components/Hero";
import Seconde from "./components/Seconde";
import ThreeContent from "./components/ThreeContent";
import Four from "./components/Four";
import Countdown from "./components/Coundown";
import Five from "./components/Five";
import Six from "./components/Six";
import Selectone from "./components/Selectone";

const Page = () => {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <Hero />

      {/* Content Section */}
      <Seconde />

      {/* Another Section with Parallax */}
      <ThreeContent />

      <Four />

      <Countdown />

      <Six />

      <Five />

      <Selectone />
    </main>
  );
};

export default Page;
