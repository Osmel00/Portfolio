'use client'
import Image from "next/image";
import { FC } from "react";
import { motion } from "framer-motion";
const AboutMe: FC = () => {
  const fadeLeft = {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 1 },
    },
  };
  return (
    <motion.div
      variants={fadeLeft}
      initial="initial"
      whileInView="animate"
      id="about"
      className="flex flex-col space-y-10 xl:h-screen xl:justify-center"
    >
      <h2 className="font-fontCanela text-4xl text-center xl:text-5xl">
        About <span className="text-acentColor">Me</span>
      </h2>
      <div className="xl:flex xl:items-center   ">
      <div className="relative h-[295px]  after:content-[''] after:absolute after:left-0 after:top-0 after:rotate-6 after:bg-[#666] after:w-full after:h-full sm:h-[395px] sm:w-[395px] sm:mx-auto">
        <Image
          width={408}
          height={408}
          src={"/originCv.png"}
          alt="img about me"
          className="h-full w-full object-cover object-top rounded-xl relative z-[5] bg-slate-400 shadow-2xl  "
        />
      </div>
      <div className="content text-gray-600  sm:w-[395px] sm:mx-auto xl:text-xl xl:tracking-wide xl:w-[450px]">
        <p className="py-3">Hi There!</p>
        <p>
          I am a passionate and dedicated web developer with a love for creating
          innovative and functional websites. I have experience in front-end and
          back-end development, I thrive on turning ideas into user-friendly
          digital experiences.
        </p>
      </div>
      </div>
    </motion.div>
  );
};

export default AboutMe;
