import { FC } from "react";
import { projectsData } from "../../../lib/data";
import Image, { StaticImageData } from "next/image";
export const Projects: FC = () => {
  return (
    <div className="projects ">
      <div>
        <h1 className="font-fontCanela text-4xl text-center pb-7">
          My<span className="text-acentColor"> Projects</span>
        </h1>
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
    <div className=" space-y-2  mb-10 p-2 grid  place-content-center">
      
        <Image
          src={imageUrl}
          alt={title}
          quality={95}
          width={310}
          height={208}
          className="h-[208px] object-top object-cover rounded-2xl overflow-hidden shadow-2xl"
        />
      
      <h3 className="font-fontCanela text-2xl justify-start leading-relaxed">{title}</h3>

      <ul className="flex flex-wrap  gap-2">
        {tags.map((tags, index) => (
          <li className="text-gray-600 underline" key={index}>
            {tags}
          </li>
        ))}
      </ul>
    </div>
  );
};
