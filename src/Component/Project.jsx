import React, { useState } from "react";
import project1 from "../image/poroject1.png";
import project2 from "../image/project2.png";
import project3 from "../image/project3.png";
import teamProject1 from "../image/teamProject1.png";
import teamProject2 from "../image/teamProject2.png";
import teamProject3 from "../image/teamProject3.png";

export default function Project() {
  const [activeTab, setActiveTab] = useState("individual"); // 초기 상태를 빈 문자열로 설정

  // 개인 프로젝트 데이터
  const individualProjects = [
    {
      id: 1,
      title: "Cocar",
      description: "HTML, CSS, JavaScript를 사용",
      imageUrl: project1,
      link: "https://mellow-yeot-2bd0b6.netlify.app/",
    },
    {
      id: 2,
      title: "Marvel",
      description: "React를 사용하여 만들었습니다.",
      imageUrl: project2,
      link: "https://effulgent-alfajores-5b2deb.netlify.app/",
    },
    {
      id: 3,
      title: "Tmdb",
      description: "React를 사용하여 만들었습니다.",
      imageUrl: project3,
      link: "https://polite-moxie-f47304.netlify.app/",
    },
  ];

  // 팀 프로젝트 데이터
  const teamProjects = [
    {
      id: 1,
      title: "동성로",
      description: "담당직무 : 프론트엔드",
      dev: "html,css,JavaScript,php,MongoDB 사용",
      imageUrl: teamProject1,
      link: "http://dongseong.dothome.co.kr/",
    },
    {
      id: 2,
      title: "케어키즈",
      description: "담당직무 : UI/UX 디자인",
      dev: "React,cloudtype,mysql,Express,Figma 사용",
      imageUrl: teamProject2,
      link: "https://kidcare.netlify.app/",
    },
    {
      id: 3,
      title: "대구 수목원",
      description: "담당직무 : 퍼블리셔",
      dev: "React,cloudtype,mysql,Express,Figma 사용",
      imageUrl: teamProject3,
      link: "https://sumokwon.netlify.app/",
    },
  ];

  return (
    <div
      className="w-full md:h-screen flex justify-center bg-[#1E2022]"
      id="project"
    >
      <div className="max-w-[1400px] w-full h-full flex flex-col items-center">
        <span className="w-full text-center text-5xl text-white font-semibold py-12 border-b-2 border-red-500">
          Project
        </span>
        <div className="w-full h-full flex flex-col items-center ">
          <div className="w-[80%] h-[80px] flex justify-between items-center gap-10">
            <div
              className={` w-full text-2xl font-semibold cursor-pointer text-center ${
                activeTab === "individual" ? "text-red-300" : "text-white"
              }`}
              onClick={() => setActiveTab("individual")}
            >
              개인 프로젝트
            </div>
            <div
              className={`w-full text-2xl font-semibold cursor-pointer text-center ${
                activeTab === "team" ? "text-red-300" : "text-white"
              }`}
              onClick={() => setActiveTab("team")}
            >
              팀 프로젝트
            </div>
          </div>

          {/* 프로젝트 내용 */}
          <div className="w-full flex flex-wrap items-center gap-6 py-16 justify-center">
            {activeTab === "individual" &&
              individualProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative md:w-[40%] w-[80%] h-[280px] bg-white p-4 rounded-md shadow-sm"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-md flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h2 className="md:text-4xl text-2xl font-semibold mb-2 text-white shadow-sm">
                      {project.title}
                    </h2>
                    <p className="text-white font-semibold md:text-2xl text-xl text-center shadow-sm">
                      {project.description}
                    </p>
                  </div>
                </a>
              ))}
            {activeTab === "team" &&
              teamProjects.map((project) => (
                <a
                  key={project.id}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative md:w-[40%] w-[80%] h-[280px] bg-white p-4 rounded-md shadow-sm"
                  style={{
                    backgroundImage: `url(${project.imageUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-50 p-4 rounded-md flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <h2 className="md:text-4xl sm:text-2xl font-semibold mb-2 text-white">
                      {project.title}
                    </h2>
                    <p className="text-white font-semibold md:text-2xl text-xl text-center">
                      {project.description}
                    </p>
                    <p className="text-white font-semibold md:text-2xl text-xl text-center">
                      {project.dev}
                    </p>
                  </div>
                </a>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
