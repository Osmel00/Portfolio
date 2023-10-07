"use client";
import { FC, useState } from "react";
import Navbar from "./Navbar";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import {CiMenuFries} from "react-icons/ci";
import {TfiClose} from "react-icons/tfi"

const Hero: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(false);
//from-[#5c4b16]  esta bien pero...
  return (
    <header className="  header  pb-4  flex justify-between items-center   px-10">
      <div className=" text-[#333333] text-2xl flex items-center  font-fontCanela  z-20 ">
        Osmel Faure <span className="text-[#c49809] pb-1 font-bold text-4xl">.</span>
      </div>
      <div className="flex items-center text-[#333333] ">
        <BsSun class="hidden cursor-pointer text-3xl " />
        {!isOpen ? (
          <div className="cursor-pointer z-20  ">
            <CiMenuFries class='text-gray-700'  size={40} onClick={() => setOpen(!isOpen)} />
          </div>
        ) : (
          <div className='cursor-pointer z-20 '>
            <TfiClose  size={35} onClick={() => setOpen(!isOpen)} />
          </div>
        )}

         <Navbar isOpen={isOpen} />
      </div>
     
    </header>
     
  );
};
//npm install react-icons
export default Hero;
