import React from "react";
import Link from "next/link";

const Selectone = () => {
  return (
    <div className="items-center h-screen justify-center flex">
      <div className="flex items-center justify-center w-full min-h-[70vh] text-gray-900 my-12 px-4">
        <div className="flex flex-col items-center w-full gap-8">
          <h1 className="text-9xl md:text-16xl w-full select-none text-center font-black text-red-400">
            404
          </h1>
          <p className="text-3xl font-normal text-center">ขอโทษครับ</p>
          <p className="text-2xl md:px-12 text-center">
            อะไรที่มันแตกไปแล้ว มันยากที่จะกลับมาจริงๆ แหละ เช่น แบงก์พัน
          </p>
          <div className="flex flex-row justify-between gap-8">
            <Link
              href="/"
              className="flex justify-center items-center px-5 py-2 text-xl rounded-md text-black border border-indigo-500 hover:bg-indigo-500 hover:text-white"
            >
              ย้อนกลับ
            </Link>

            <Link
              href="xdpage"
              className="flex justify-center items-center px-5 font-serif font-light py-2 text-xl rounded-md text-black border border-green-500 hover:bg-green-500 hover:text-white"
            >
              หน้าหลัก
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Selectone;
