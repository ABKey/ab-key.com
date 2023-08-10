import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  backgroundImg: any;
  projectUrl: string;
}

const ProjectItem: React.FC<Props> = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div className="relative flex items-center justify-center w-full h-auto duration-500 ease-in rounded-xl group hover:bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600">
      <Image
        className="rounded-xl group-hover:opacity-10 h-full w-full"
        src={backgroundImg}
        alt="/"
        width={0}
        height={0}
        sizes="100vw"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl tracking-wider text-center text-white">
          {title}
        </h3>
        <Link href={projectUrl}>
          <p className="py-3 text-lg font-bold text-center text-white rounded-lg cursor-pointer bg-gray">
            More info here
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem
