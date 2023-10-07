"use client";
import { FC } from "react";
import Image from "next/image";

const Profile: FC = () => {
  return (
    <section className="profile   flex flex-col justify-center items-center space-y-5">
      <Image
        className="bg-gradient-to-r from-[#000051]/10  to-white  rounded-full border-2 border-[#c49809] h-[250px] w-[250px]  object-top object-cover"
        src="/foto-osmel2.png"
        width={200}
        height={200}
        alt="Picture of the author"
      />
      <p>Hello, I'm</p>
      <h1 className="font-fontCanela  text-4xl text-[#202020]">Osmel Faure</h1>
      <p className="text-2xl text-[#333333]">Fullstack Developer</p>
      <div className="social space-x-5 pt h-">
        <button onClick ={() => window.open('http://localhost:3000/myCV.pdf')} className="py-4 px-6  border-[#c49809]  rounded-full shadow-xl transition duration-300  hover:scale-110">
          Download CV
        </button>
        <button className="py-4 px-6 bg-[#c49809]  rounded-full shadow-xl transition duration-300  hover:scale-110 ">
          Contact Info
        </button>
        <div className="flex justify-center space-x-5 mt-10 cursor-pointer">
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
    </section>
  );
};

export default Profile;
