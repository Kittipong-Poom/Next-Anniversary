import React from "react";
import Image from "next/image";

const ImageTextMask = () => {
  return (
    <div className="relative ">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-maefah-bg  bg-cover   bg-center bg-fixed z-0 bg-black/50"
        style={{ backgroundSize: "1000px " }}
      ></div>
      <div className="container mx-auto ">
        <div className="h-screen flex flex-col items-center justify-center relative z-10 ">
          <div className="flex items-center text-[5vw] font-extrabold uppercase md:text-center ">
            {/* อีโมจิด้านหน้า */}
            <span className="mr-2">✨✨</span>

            {/* ข้อความที่มีพื้นหลังเป็นรูป */}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              HAPPY VALENTINE DAYYYY
            </span>

            {/* อีโมจิด้านหลัง */}
            <span className="ml-2">✨✨</span>
          </div>

          {/* รูป GIF */}
          <div className="mt-5">
            <Image
              src="/gif/peach.gif"
              alt=""
              width={350}
              height={500}
              className="rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageTextMask;
