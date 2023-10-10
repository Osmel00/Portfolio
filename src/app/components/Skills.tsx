"use client";
import { FC } from "react";
import { skillsData } from "../../../lib/data";
import { motion } from "framer-motion";
const Skills: FC = () => {
  const fadeIn = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index:number) => {
      return {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.05 * index,
        },
      };
    },
  };
  return (
    <div id="skills" className="skills max-w-lg mx-auto">
      <h2 className="font-fontCanela text-4xl text-center pb-6">
        My <span className="text-[#c49809]">Skills</span>{" "}
      </h2>
      <ul className="flex flex-wrap justify-center  gap-2 text-gray-600">
        {skillsData.map(({ name }, index) => (
          <motion.li
            key={index}
            className="bg-acentColor shadow-2xl text-white rounded-xl px-5 py-3"
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            custom={index}
            viewport={{
              once: true,
            }}
          >
            {name}
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
