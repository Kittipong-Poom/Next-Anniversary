import React from "react";
import Image from "next/image";

interface ImageDatas {
  src: string;
}

const Page = () => {
  const allImages: ImageDatas[] = [
    { src: "/images/meme/iwin.jpg" },
    { src: "/images/meme/kabok.jpg" },
  ];

  return (
    <div className="mx-auto container">
      <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="mb-4 text-3xl font-bold text-center">
          ฮั่นแน่รู้นะว่าจะกดไปหน้าหลัก XDDDD
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {allImages.map((item, index) => (
            <div key={index} className="relative w-96 h-64">
              <Image
                src={item.src}
                alt={`Image ${index + 1}`}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
