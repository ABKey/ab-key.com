import Image from "next/image";
import React from "react";

export default function About() {
  const headshotImg = "/assets/Headshot.png";

  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f7795a]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-200">
            I&apos;m a sound engineer turned software engineer based out of Phoenix,
            Arizona. I have a love for building things and solving problems. I&apos;m
            currently working as a freelancer while I hone my skills in new
            stacks and frameworks. I&apos;m also taking on side projects to help me learn and grow as
            a developer.
          </p>
          <p className="py-4">
            My professional focus is making an impact in the field of software
            engineering. I&apos;m passionate about building products that make a
            difference in peoples&apos; lives.
          </p>
          <p className="py-2 text-gray-200 underline cursor-pointer">
            <a href="/#projects">
            Check out my latest projects below.
            </a>
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto duration-300 ease-in cursor-pointer hover:scale-105">
          <div className=" bg-black rounded-xl ring-1 ring-white ">
            <Image
              className="w-full h-auto rounded-xl"
              src={headshotImg}
              alt="/"
              width={0}
              height={0}
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
