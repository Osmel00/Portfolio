import { FC } from "react";
import { projectsData } from "../../../lib/data";
import Image, { StaticImageData } from "next/image";
export const Projects: FC = () => {
  return (
    <div id="projects" className="projects xl:h-screen xl:flex xl:flex-col xl:justify-end ">
      
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
    <div  className=" space-y-2  mb-10 p-2 grid  place-content-center xl:space-y-3 ">
      
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={310}
          height={208}
          className="h-[208px]  object-cover rounded-2xl overflow-hidden shadow-2xl  xl:shadow-black/70 sm:h-[300px] sm:w-[396px] sm:object-left-top xl:h-[250px] xl:w-[300px]"
        />
      
      <h3 className="font-fontCanela text-2xl justify-start leading-relaxed">{title}</h3>

      <ul className="flex flex-wrap gap-2 ">
        {tags.map((tags, index) => (
          <li className="text-gray-600 underline" key={index}>
            {tags}
          </li>
        ))}
      </ul>
    </div>
  );
};
