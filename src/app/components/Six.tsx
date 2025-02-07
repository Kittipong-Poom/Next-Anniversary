import React from "react";

const CountdownGrid = () => {
  const videos = [
    {
      src: "/video/Doi.mp4",
      animation: "fade-right",
      delay: "300",
      duration: "1200",
    },
    {
      src: "/video/Maetang.mp4",
      animation: "fade-left",
      delay: "300",
      duration: "1100",
    },
    {
      src: "/video/Sleep.mp4",
      animation: "fade-up",
      delay: "400",
      duration: "1000",
    },
    {
      src: "/video/kaew.mp4",
      animation: "fade-down",
      delay: "400",
      duration: "1000",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="h-screen flex flex-col mt-10 m-5 " data-aos="fade-down">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 flex-1 w-full h-full gap-4 p-5  bg-pink-300 rounded-xl">
          {videos.map((item, index) => (
            <div
              key={index}
              className="relative flex items-center justify-center overflow-hidden rounded-xl shadow-lg"
              data-aos={item.animation}
              data-aos-delay={item.delay}
              data-aos-duration={item.duration}
            >
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 z-10"></div>

              {/* วิดีโอแทนรูปภาพ */}
              <video
                className="absolute w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.src} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountdownGrid;
