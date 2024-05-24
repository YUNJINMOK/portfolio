import React from "react";

export default function AboutTextBox({
  IconComponent,
  text,
  title,
  text2,
  text3,
}) {
  return (
    <div className="w-[400px] h-[200px] bg-white rounded-lg flex justify-center">
      <div className="w-[80%] h-full flex items-center">
        <IconComponent className="w-[35%] text-6xl " />
        <div className="w-[60%] h-full flex flex-col justify-center items-start gap-4">
          <span className="text-3xl w-full text-center">{title}</span>
          <span className="text-xl w-full text-center">{text}</span>
        </div>
      </div>
    </div>
  );
}
