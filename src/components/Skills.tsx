import React from "react";
import Image from "next/image";
import { TbBrandNextjs } from "react-icons/tb";
import { BsBootstrap } from "react-icons/bs";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiJavascript, SiHtml5, SiTailwindcss } from "react-icons/si";
import { BiLogoCss3, BiLogoPostgresql } from "react-icons/bi";
import { AiOutlineGithub } from "react-icons/ai";
import { SiExpress, SiVercel } from "react-icons/si";

export default function Skills() {
  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="uppercase text-xl tracking-widest text-[#f7795a]">
          Skills
        </p>
        <h2 className="py-4">What my strengths are</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <SiJavascript size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <SiHtml5 size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <BiLogoCss3 size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <FaReact size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>REACT</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <TbBrandNextjs size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NEXT.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <SiTailwindcss size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TAILWIND</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <BsBootstrap size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>BOOTSTRAP</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <FaNodeJs size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NODE.JS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <AiOutlineGithub size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GITHUB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <BiLogoPostgresql size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>POSTGRESQL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <SiVercel size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>VERCEL</h3>
              </div>
            </div>
          </div>
          <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
            <div className="grid items-center justify-center grid-cols-2 gap-4">
              <div className="m-auto">
                <SiExpress size={50} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>EXPRESS.JS</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
