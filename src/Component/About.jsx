import React from "react";
import AboutTextBox from "./AboutTextBox";
import { FaUser, FaBirthdayCake } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaMap } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdCastForEducation } from "react-icons/md";

export default function About() {
  return (
    <div
      className="w-full h-screen bg-[#1E2022] flex justify-center"
      id="about"
    >
      <div className="max-w-7xl w-full h-full flex flex-col items-center">
        <span className=" w-full text-center text-5xl text-white font-semibold py-12 border-b-2 border-red-400 ">
          About
        </span>
        <div className="w-full h-full flex flex-wrap items-center justify-around">
          <AboutTextBox IconComponent={FaUser} title="이름" text="윤진목" />
          <AboutTextBox
            IconComponent={FaBirthdayCake}
            title="생년월일"
            text="1999.07.06"
          />
          <AboutTextBox
            IconComponent={MdEmail}
            title="이메일"
            text="aprnaprn114@naver.com"
          />
          <AboutTextBox
            IconComponent={FaMap}
            title="주소"
            text="경북 경산시 압량읍 부적리 423-13"
          />
          <AboutTextBox
            IconComponent={FaPhone}
            title="전화번호"
            text="010-2423-2601"
          />
          <AboutTextBox
            IconComponent={MdCastForEducation}
            title="학력"
            text="경산고등학교 졸업"
          />
        </div>
      </div>
    </div>
  );
}
