import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  backgroundImg: any;
  projectUrl: string;
  projectCodeUrl: string;
  metaDescription: string;
  description: string;
  thoughts: string;
}

const ProjectPage: React.FC<Props> = ({
  title,
  backgroundImg,
  projectUrl,
  projectCodeUrl,
  metaDescription,
  description,
  thoughts,
}) => {
  return (
    <div>
      <div>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
      </div>

      <div className="w-full">
        <div className="w-screen h-[50vh] relative">
          <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/60 z-10"></div>
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            src={backgroundImg}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">{title}</h2>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <h2>Overview</h2>
            <p className="py-2">{description}</p>
            <p className="py-2 ">{thoughts}</p>
            <a href={projectUrl}>
              <button className="px-8 py-2 mt-4 mr-8">Demo</button>
            </a>
            <a href={projectCodeUrl}>
              <button className="px-8 py-2 mt-4">Code</button>
            </a>
            <a href="/#projects">
              <p className="pt-4 underline cursor-pointer">Back</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
