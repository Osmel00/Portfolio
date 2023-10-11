"use client";
import { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Profile: FC = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition:{duration:0.5}
      }
    }
  return (
    <motion.section 
    variants={fadeIn}
    initial='initial'
    whileInView='animate'
    viewport={{
      once: true,
    }}
    className="profile  flex flex-col justify-center items-center space-y-5 xl:flex xl:flex-row xl:gap-x-20 ">
      <Image
        className="bg-slate-400  rounded-full border-2 border-[#c49809] h-[250px] w-[250px]  object-top object-cover xl:h-[400px] xl:w-[400px] xl:shadow-lg   xl:bg-slate-400/50"
        src="/originCv.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <div className=" flex flex-col justify-center items-center space-y-5 xl:flex xl:flex-col xl:space-y-6 ">
      <p>Hello, I'm</p>
      <h1 className="font-fontCanela  text-4xl text-[#202020] xl:text-5xl xl:font-extrabold ">Osmel Faure</h1>
      <p className="text-2xl text-[#333333]">Fullstack Developer</p>
      <div className="social space-x-5 pt h-">
        <button onClick ={() => window.open('https://portfolio-eight-sooty-15.vercel.app/myCV.pdf')} className="py-4 px-6  border-[#c49809]  rounded-full shadow-xl transition duration-300  hover:scale-110">
          Download CV
        </button>
        <button className="py-4 px-6 bg-[#c49809]  rounded-full shadow-xl transition duration-300  hover:scale-110 ">
         <Link href={'#contact'}> Contact Info  </Link> 
        </button>
        <div className="flex justify-center space-x-5 mt-10 cursor-pointer ">
          <Image 
            className=" h-[36px] w-[36px] object-top object-cover transition duration-300  hover:scale-110 "
            src="/linkedin.png"
            width={36}
            height={36}
            alt="Picture linkedin"
          />
          <Image
            className="h-[36px] w-[36px] object-top object-cover transition duration-300  hover:scale-110 "
            src="/github.png"
            width={36}
            height={36}
            alt="Picture github"
          />
        </div>
      </div>
      </div>
    </motion.section>
  );
};

export default Profile;
