import React from "react";
import Image from "next/image";

const Four = () => {
  const images = [
    {
      img: "/images/meme/hansome.jpg",
    },
    {
      img: "/images/meme/dig.jpg",
    },
    {
      img: "/images/meme/broke.jpg",
    },
    { gif: "/gif/dog-sims.gif" },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-4">เลื่อนลงไปทำไมอะ? 🤓🤓</h2>

      {/* ใช้ map() วนลูปแสดงรูปทั้งหมด */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((item, index) => (
          <div key={index} className="relative w-64 h-64">
            {/* ถ้าเป็นไฟล์ GIF ให้ใช้ <img> แทน */}
            {item.gif ? (
              <img
                src={item.gif}
                className="w-full h-full object-contain"
                alt={`GIF ${index + 1}`}
              />
            ) : (
              <Image
                src={item.img ?? ""}
                layout="fill"
                objectFit="contain"
                alt={`Meme ${index + 1}`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Four;
