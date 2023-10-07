import Image from "next/image";
import { FC } from "react";

const AboutMe: FC = () => {
  return (
    <div className="flex flex-col space-y-10 " >
      <h2 className="font-fontCanela text-4xl text-center">
        About <span className="text-acentColor">Me</span>
      </h2>
      <div className="relative h-[295px] after:content-[''] after:absolute after:left-0 after:top-0 after:rotate-6 after:bg-[#666] after:w-full after:h-full">
        <Image
          width={408}
          height={408}
          src={"/originCv.png"}
          alt="img about me"
          className="h-full w-full object-cover object-top rounded-xl relative z-[5] bg-slate-400 shadow-2xl  "
        />
      </div>
        <div className="content text-gray-600">
             <p className="py-3">
                Hi There!
             </p>
             <p>
             I am a passionate and dedicated web developer with a love for creating innovative and functional websites.
             I have experience in front-end and back-end development, I thrive on turning ideas into user-friendly digital experiences.
             </p>
       </div>     
    </div>
  );
};

export default AboutMe;
