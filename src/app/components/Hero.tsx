"use client";
import { FC, useState } from "react";
import Navbar from "./Navbar";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import { CiMenuFries } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";
import Link from "next/link";
import { motion } from "framer-motion";

type Props = {
  isTopOfPage: boolean;
} 
const Hero: FC<Props> = ({isTopOfPage}) => {
  const [isOpen, setOpen] = useState<boolean>(false);
  
  //from-[#5c4b16]  esta bien pero...
  //bg-slate-300/20
  
  return (
    <motion.header
      initial={{y:-100,  opacity:0}}
      whileInView={{y:0,  opacity:1}}
      viewport={{
        once: true,
      }}
       className={`header  pb-10  flex justify-between items-center   px-10   xl:mx-auto xl:fixed  xl:right-0  xl:left-0  xl:py-10 xl:justify-around xl:transition-shadow   ${isTopOfPage ? null : "headerXL" }   `}>

      <div className=" cursor-pointer text-[#333333] text-2xl flex items-center  font-fontCanela  z-20 xl:text-3xl">
       <Link href={'/'}> Osmel Faure{" "}
        <span className="text-[#c49809] pb-1 font-bold text-4xl">.</span>
        </Link>
      </div>
      <div className="flex items-center text-[#333333] xl:hidden">
        <BsSun class="hidden cursor-pointer text-3xl " />
        {!isOpen ? (
          <div className="cursor-pointer z-20  ">
            <CiMenuFries
              class="text-gray-700"
              size={40}
              onClick={() => setOpen(!isOpen)}
            />
          </div>
        ) : (
          <div className="cursor-pointer z-20 ">
            <TfiClose size={35} onClick={() => setOpen(!isOpen)} />
          </div>
        )}

        <Navbar isOpen={isOpen} setOpen={setOpen} />
      </div>


      <div className="hidden xl:block  ">
        <ul className="flex gap-10 text-2xl text-[#333333]">
          
          <li
            ///onClick={toggleLink}
            className="cursor-pointer transition duration-300  hover:scale-110  xl:hover:text-acentColor xl:hover:border-b border-gray-400 pb-2"
          >
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li
            
            className="cursor-pointer transition duration-300  hover:scale-110  xl:hover:text-acentColor xl:hover:border-b  border-gray-400 pb-2"
          >
            <Link href={"#about"}>About</Link>
          </li>
          <li
            //onClick={toggleLink}
            className="cursor-pointer transition duration-300  hover:scale-110   xl:hover:text-acentColor xl:hover:border-b  border-gray-400 pb-2"
          >
            <Link href={"#skills"}>Skills</Link>
          </li>
          <li
            //onClick={toggleLink}
            className="cursor-pointer transition duration-300  hover:scale-110  xl:hover:text-acentColor xl:hover:border-b  border-gray-400 pb-2"
          >
            <Link href={"#contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </motion.header>
  );
};
//npm install react-icons
export default Hero;
