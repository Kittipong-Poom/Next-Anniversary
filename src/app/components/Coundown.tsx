import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// 🖼️ ประเภทของรูปภาพ
interface ImageData {
  src: string;
}

// 🎞️ ข้อมูลรูปภาพทั้งหมด
const ALL_IMAGES: ImageData[] = [
  { src: "/images/Countdown/MM.jpg" },
  { src: "/images/Countdown/BB.jpg" },
  { src: "/images/Countdown/EA.jpg" },
  { src: "/images/Countdown/EE.jpg" },
  { src: "/images/Countdown/iiiiiiiii.jpg" },
  { src: "/images/Countdown/KKKK.jpg" },
  { src: "/images/Countdown/llll.jpg" },
  { src: "/images/Countdown/BEAMM.jpg" },
  { src: "/images/Countdown/YU.jpg" },
  { src: "/images/Countdown/GAR.jpg" },
  { src: "/images/Countdown/CHRIS.jpg" },
  { src: "/images/Countdown/mas.jpg" },
  { src: "/images/Countdown/dao.jpg" },
  { src: "/images/Countdown/dao2.jpg" },
  { src: "/images/portait/portait4.jpg" },
  { src: "/images/portait/portait5.jpg" },
];

// 🎲 ฟังก์ชันสุ่มรูปที่ไม่ซ้ำ
const getRandomImage = (excludeList: string[]): ImageData => {
  const availableImages = ALL_IMAGES.filter(
    (img) => !excludeList.includes(img.src)
  );
  return availableImages[Math.floor(Math.random() * availableImages.length)];
};

// 🎯 Custom Hook: ใช้สำหรับสุ่มและเปลี่ยนภาพทุก 2 วินาที
const useRandomImages = (count: number, intervalMs: number) => {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    setImages(Array.from({ length: count }, () => getRandomImage([])));

    const interval = setInterval(() => {
      setImages((prevImages) => {
        const randomIndex = Math.floor(Math.random() * prevImages.length);
        const newImage = getRandomImage(prevImages.map((img) => img.src));

        return prevImages.map((img, index) =>
          index === randomIndex ? newImage : img
        );
      });
    }, intervalMs);

    return () => clearInterval(interval);
  }, []);

  return images;
};

const Countdown: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const images = useRandomImages(6, 2000); // ⏳ สุ่มรูปใหม่ทุก 2 วินาที

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold text-center uppercase mb-4">
        My Story of Journey with you
      </h1>
      <motion.div
        ref={ref}
        className="grid grid-cols-3 gap-4 p-5 rounded-xl"
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.3 } },
          hidden: {},
        }}
      >
        {images.map((item, index) => (
          <motion.div
            key={index}
            className="relative w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src={item.src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Countdown;
