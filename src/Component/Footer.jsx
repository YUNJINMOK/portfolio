import React from "react";

export default function Footer() {
  return (
    <div className="w-full h-screen bg-[#1E2022] flex justify-center items-center">
      <div className="max-w-[1400px] w-full h-full flex flex-col items-center">
        <span className="w-full text-center text-5xl text-white font-semibold py-12 border-b-2 border-red-400">
          Contact
        </span>
        <span className="font-semibold text-4xl text-white py-10">궁금한 점이 있으신가요 ?</span>
        <span className="font-semibold text-2xl text-white py-4">언제나 연락 가능합니다</span>
        <div className="w-full flex flex-wrap gap-6 justify-center py-6">
          <input type="text" placeholder="이름" className="w-[40%] h-[50px] rounded-lg p-4 border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-lg bg-white placeholder-gray-500 transition duration-300 ease-in-out transform focus:scale-105 outline-none"></input>
          <input type="text" placeholder="이메일" className="w-[40%] h-[50px] rounded-lg p-4 border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-lg bg-white placeholder-gray-500 transition duration-300 ease-in-out transform focus:scale-105 outline-none"></input>
          <input type="text" placeholder="제목" className="w-[1144px] h-[50px] rounded-lg p-4 border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-lg bg-white placeholder-gray-500 transition duration-300 ease-in-out transform focus:scale-105 outline-none"></input>
          <input type="text" placeholder="내용" className="w-[1144px] h-[200px] rounded-lg p-4 border-2 border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 shadow-lg bg-white placeholder-gray-500 transition duration-300 ease-in-out transform focus:scale-105 outline-none"></input>
          
        </div>
        
        
      <button className="w-[250px] h-[50px] bg-slate-100 rounded-xl shadow-lg hover:bg-slate-200 active:bg-slate-300 focus:ring-4 focus:ring-blue-300 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105 active:scale-95 text-gray-700 font-semibold mt-3">메일보내기</button>
      </div>
    </div>
  );
}
