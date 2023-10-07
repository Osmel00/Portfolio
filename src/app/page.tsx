
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";

//bg-gradient-to-b from-[#8b701f]/25  to-white hermoso
export default function Home() {
  return ( 
    < div className="">
      <section className="h-screen  grid content-center">
        <Hero />
        <Profile />
      </section>
      <main className="main px-10 space-y-10">
        <AboutMe/>
        <Skills/>
      </main>
    </div>
  );
}
