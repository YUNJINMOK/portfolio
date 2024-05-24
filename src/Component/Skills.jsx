import React from "react";
import SkillBar from "react-skillbars";

export default function Skills() {
  const skills = [
    { type: "JavaScript", level: 85 },
    { type: "React", level: 80 },
    { type: "Node", level: 75 },
    { type: "php", level: 70 },
    { type: "mysql", level: 70 },
  ];
  const skills2 = [
    { type: "Figma", level: 85 },
    { type: "Adobe XD", level: 80 },
    { type: "photoshop", level: 75 },
    { type: "Illustrator", level: 60 },
  ];
  const skills3 = [
    { type: "html", level: 85 },
    { type: "css", level: 85 },
    { type: "jquery", level: 80 },
  ];
  return (
    <div
      className="w-full h-screen bg-[#1E2022] flex justify-center"
      id="skills"
    >
      <div className="max-w-[1400px] w-full h-full flex flex-col items-center">
        <span className="w-full text-center text-5xl text-white font-semibold py-12 border-b-2 border-red-400">
          Skills
        </span>
        <div className="w-full h-full flex justify-between items-center gap-6">
          <div className="w-[33%] h-[300px]  rounded-lg flex-col items-center">
            <span className="w-full  text-3xl font-semibold text-white flex justify-center mb-4">
              Dev
            </span>
            <SkillBar
              skills={skills}
              style={{
                width: "100%",
                height: "100%",
                // 여기에 추가적인 스타일 지정 가능
              }}
            />
          </div>
          <div className="w-[33%] h-[300px]  rounded-lg flex-col items-center">
            <span className="w-full  text-3xl font-semibold text-white flex justify-center mb-4">
              Design
            </span>
            <SkillBar skills={skills2} />
          </div>
          <div className="w-[33%] h-[300px]  rounded-lg flex-col items-center">
            <span className="w-full  text-3xl font-semibold text-white flex justify-center mb-4">
              Publisher
            </span>
            <SkillBar skills={skills3} />
          </div>
        </div>
      </div>
    </div>
  );
}
