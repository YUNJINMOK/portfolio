import React from "react";
import mainimg from "../image/mainimg.jpg";

export default function Header() {
  return (
    <div className="relative w-full h-screen " id="home">
      <img className="w-full h-full object-cover" src={mainimg} alt="mainimg" />
      <div className="absolute left-[50%] top-[50%] max-w-4xl w-full h-[400px] flex flex-col justify-center items-center translate-x-[-50%] translate-y-[-50%] gap-4">
        <span className="text-9xl text-white font-semibold">Yun Jin Mok</span>
        <span className="text-6xl text-white font-semibold">Portfolio</span>
      </div>
    </div>
  );
}
