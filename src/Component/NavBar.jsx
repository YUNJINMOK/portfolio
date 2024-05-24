import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [showNavBar, setShowNavBar] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.target.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // 스크롤을 내릴 때 네비게이션 바 보이기
        setShowNavBar(true);
      } else {
        // 스크롤을 올릴 때 네비게이션 바 숨기기
        setShowNavBar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 w-full h-[80px] flex justify-center transition-transform duration-300 ${
        showNavBar ? "translate-y-0" : "-translate-y-full"
      }`}
      style={{
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottom: "2px solid white", // 테두리를 흰색으로 설정
      }}
    >
      <div className="max-w-[1200px] h-full flex justify-center gap-6">
        <div className="w-[100px] h-full text-white text-xl flex justify-center items-center cursor-pointer">
          <a href="#home" onClick={smoothScroll}>
            {" "}
            Home
          </a>
        </div>
        <div className="w-[100px] h-full text-white text-xl flex justify-center items-center cursor-pointer">
          <a href="#about" onClick={smoothScroll}>
            About
          </a>
        </div>
        <div className="w-[100px] h-full text-white text-xl flex justify-center items-center cursor-pointer">
          <a href="#skills" onClick={smoothScroll}>
            {" "}
            Skills
          </a>
        </div>
        <div className="w-[100px] h-full text-white text-xl flex justify-center items-center cursor-pointer">
          <a href="#project" onClick={smoothScroll}>
            Project
          </a>
        </div>
      </div>
    </div>
  );
}
