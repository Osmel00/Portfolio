import { FC } from "react";
import { projectsData } from "../../../lib/data";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
export const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="projects xl:h-screen   " //xl:flex xl:flex-col xl:justify-end
    >
      <h1 className="font-fontCanela text-4xl text-center pb-7 xl:text-5xl">
        My<span className="text-acentColor"> Projects</span>
      </h1>
      <div className="xl:flex xl:flex-wrap justify-center gap-2 ">
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
  linkUrl:string;
};
//type ProjectProps = ( typeof  projectsData)[number];
const Project = ({ title, tags, imageUrl,linkUrl }: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{duration:1}}
      viewport={{once: true,amount:0.5}}
      className=" space-y-2  mb-10 p-2 grid  place-content-center  md:w-[390px] sm:mx-auto xl:space-y-3 xl:flex xl:flex-col xl:justify-start"
    >
      <figure className="xl:overflow-hidden rounded-2xl cursor-pointer ">
        <Link href={linkUrl as string}>
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={326}
          height={208}
          className="h-[208px] mx-auto  object-cover rounded-2xl overflow-hidden shadow-2xl   sm:h-[300px] sm:w-[396px] xl:h-[250px] xl:w-[300px] xl:m-0
          
          xl:hover:transform xl:hover:scale-[1.25]  xl:hover:-translate-y-1/4  xl:transition-transform xl:hover:object-right xl:ease-in-out xl:duration-500  xl:origin-top-left xl:rounded-none xl:scale-150"
        />
        </Link>
      </figure>
      <h3 className="font-fontCanela text-2xl justify-start leading-relaxed ">
        {title}
      </h3>

      <ul className="flex flex-wrap gap-2 max-w-[330px]   md:max-w-full">
        {tags.map((tags, index) => (
          <li className="text-gray-600 underline" key={index}>
            {tags}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
