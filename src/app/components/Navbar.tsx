"use client";
import { FC } from "react";
import "../globals.css";
type Props = {
  isOpen: boolean;
};

const Navbar: FC<Props> = ({ isOpen }) => {
  return (
    <>
      <ul
        className={`navbar backdrop-blur-xl bg-[#000051]/10 font-fontCanela text-4xl uppercase z-10  ${
          isOpen ? "open" : null
        } clip fixed flex flex-col space-y-10  items-center  justify-center text-black h-screen w-full inset-0 `}
      >
        <li className="cursor-pointer transition duration-300  hover:scale-110 ">About</li>
        <li className="cursor-pointer transition duration-300  hover:scale-110 ">Experiece</li>
        <li className="cursor-pointer transition duration-300  hover:scale-110">Proyects</li>
        <li className="cursor-pointer transition duration-300  hover:scale-110">Contact</li>
      </ul>
    </>
  );
};

export default Navbar;
