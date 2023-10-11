"use client";
import AboutMe from "./components/AboutMe";
import { Contact } from "./components/Contact";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import { Projects } from "./components/Projects";
import Skills from "./components/Skills";
import { useEffect, useState } from "react";
//bg-gradient-to-b from-[#8b701f]/25  to-white hermoso
export default function Home() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const hadleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", hadleScroll);
    return () => window.removeEventListener("scroll", hadleScroll);
  });

  return (
    <div className="xl:w-[1280px]  mx-auto">
      <section className="h-screen grid content-center sm:max-w-lg sm:mx-auto xl:max-w-7xl ">
        <Hero isTopOfPage={isTopOfPage} />
        <Profile />
      </section>
      <main className="main px-10  pb-20 space-y-20 ">
        
        <Projects />
        <AboutMe />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
