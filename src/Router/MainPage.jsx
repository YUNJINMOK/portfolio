import React from "react";

import About from "../Component/About";
import Header from "../Component/Header";
import NavBar from "../Component/NavBar";
import Skills from "../Component/Skills";
import Project from "../Component/Project";

export default function MainPage() {
  return (
    <div className="w-full h-auto">
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Project />
    </div>
  );
}
