import React, { useState } from "react";
import Image from "next/image";

const ThreeContent = () => {
  // อาร์เรย์เก็บข้อความหลายๆ อัน
  const messages = [
    { text: "ไม่มีอะไรหรอกอิอิ", img: "/images/meme/smiledog.jpg" },
    { text: "เอ้าแล้วกดต่อไปทำไม?", img: "/images/meme/cat1.png" },
    { text: "🧐🤨🤨", img: "/images/meme/cat2.png" },
    { text: "แปลกๆละ :>", img: "/images/meme/behind.jpg" },
    { text: "กดทำไมเนี่ยย555555 งงนะ", img: "/images/meme/panda.jpg" },
    { text: "อ้ะๆเลื่อนลงๆ", img: "/images/meme/dig.jpg" },
  ];

  // สร้าง state สำหรับเก็บ index ของข้อความปัจจุบัน
  const [index, setIndex] = useState(0);

  // ฟังก์ชันเปลี่ยนข้อความ
  const changeText = () => {
    if (index < messages.length - 1) {
      setIndex(index + 1);
    }
  };

  const goBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="h-screen flex items-center justify-center">
        <div
          role="alert"
          className="mx-auto max-w-lg w-9/12 rounded-lg border border-stone bg-stone-100 p-4 shadow-lg sm:p-6 lg:p-8"
        >
          <div className="flex items-center gap-4">
            <span className="shrink-0 rounded-full bg-emerald-400 p-2 text-white">
              <Image src="/speak.svg" width={24} height={24} alt="Icon" />
            </span>
            <p className="font-medium sm:text-lg text-emerald-600">ปุกาศๆ</p>
          </div>

          {/* เปลี่ยนข้อความได้ตาม index */}
          <div className="mt-4 text-gray-600">
            {typeof messages[index] === "string" ? (
              // ถ้าเป็น string ให้แสดงข้อความ
              <p className="justify-center text-center text-2xl">
                {messages[index]}
              </p>
            ) : (
              // ถ้าเป็น object ให้แสดงทั้งข้อความและรูปภาพ
              <div className="flex flex-col items-center">
                <p className="text-3xl text-black">{messages[index].text}</p>
                <Image
                  src={messages[index].img}
                  width={350}
                  height={200}
                  alt="Dynamic Image"
                  className="mt-2 rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="mt-6 sm:flex sm:gap-4 justify-end">
            {index > 0 && (
              <button
                onClick={goBack}
                className="w-full rounded-lg bg-gray-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                ย้อนกลับ
              </button>
            )}
            {index < messages.length - 1 && (
              <button
                onClick={changeText}
                className="w-full rounded-lg bg-emerald-500 px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
              >
                ต่อไป
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeContent;
