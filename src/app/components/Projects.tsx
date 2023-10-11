import { FC } from "react";
import { projectsData } from "../../../lib/data";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
export const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="projects xl:h-screen xl:flex xl:flex-col xl:justify-end "
    >
      <h1 className="font-fontCanela text-4xl text-center pb-7 xl:text-5xl">
        My<span className="text-acentColor"> Projects</span>
      </h1>
      <div className="xl:flex xl:flex-wrap xl:justify-center ">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

type ProjectProps = {
  title: string;
  tags: string[];
  imageUrl: StaticImageData;
};
//type ProjectProps = ( typeof  projectsData)[number];
const Project = ({ title, tags, imageUrl }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      className=" space-y-2  mb-10 p-2 grid  place-content-center xl:space-y-3  "
    >
      <figure className="xl:overflow-hidden rounded-2xl">
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={310}
          height={208}
          className="h-[208px]  object-cover rounded-2xl overflow-hidden shadow-2xl  xl:shadow-black/70 sm:h-[300px] sm:w-[396px] sm:object-left-top xl:h-[250px] xl:w-[300px] xl:hover:transform xl:hover:scale-125 xl:hover:translate-y-1/4 xl:transition-transform xl:ease-in-out xl:duration-500 xl:transform xl:scale-150 xl:origin-bottom-left xl:rounded-none"
        />
      </figure>
      <h3 className="font-fontCanela text-2xl justify-start leading-relaxed">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-2 ">
        {tags.map((tags, index) => (
          <li className="text-gray-600 underline" key={index}>
            {tags}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
