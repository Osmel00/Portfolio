"use client";
import { FC, SetStateAction, Dispatch } from "react";
import "../globals.css";
import Link from "next/link";
type Props = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const Navbar: FC<Props> = ({ isOpen, setOpen }) => {
  const toggleLink = () => {
    setOpen((prev) => !isOpen);
  };
  return (
    <>
      <ul
        className={`navbar backdrop-blur-xl bg-[#000051]/10 font-fontCanela text-4xl uppercase z-10   ${
          isOpen ? "open" : null
        }  fixed flex flex-col space-y-10  items-center  justify-center text-black h-screen w-full inset-0 `}
      >
        <li
          onClick={toggleLink}
          className="cursor-pointer transition duration-300  hover:scale-110 "
        >
          <Link href={"#projects"}>Projects</Link>
        </li>
        <li
          onClick={toggleLink}
          className="cursor-pointer transition duration-300  hover:scale-110 "
        >
          <Link href={"#about"}>About</Link>
        </li>
        <li
          onClick={toggleLink}
          className="cursor-pointer transition duration-300  hover:scale-110 "
        >
          <Link href={"#skills"}>Skills</Link>
        </li>
        <li
          onClick={toggleLink}
          className="cursor-pointer transition duration-300  hover:scale-110 "
        >
          <Link href={"#contact"}>Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
