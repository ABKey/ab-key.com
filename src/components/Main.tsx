import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="text-sm tracking-widest text-gray-100 uppercase">
            moto
          </p>
          <h1 className="text-gray-100">
            Hi, I'm <span className="text-[#f7795a]">Andy</span>
          </h1>
          <h1 className="py-2 text-gray-100">Full-Stack Developer</h1>
          <p className="py-4 text-gray-200 max-w-[70%] m-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            repellendus in. Autem accusamus impedit at sapiente provident
            veritatis suscipit odio veniam facere tempore architecto porro velit
            ipsam ex esse amet, obcaecati maxime, minima quisquam voluptate iste
            labore soluta rem! Consectetur?
          </p>

          <div className="flex items-center justify-between max-w-[600px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/andres-baker/"
              target=""
              rel="noreferrer"
            >
              <div className="relative group">
                <div className="absolute rounded-full opacity-75 -inset-0.5 md:-inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 blur group-hover:animate-pulse"></div>
                <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-full cursor-pointer md:p-7">
                  <FaLinkedinIn />
                </div>
              </div>
            </a>
            <a href="https://github.com/ABKey" target="" rel="noreferrer">
              <div className="relative group">
                <div className="absolute rounded-full opacity-75 -inset-0.5 md:-inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 blur group-hover:animate-pulse"></div>
                <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-full cursor-pointer md:p-7">
                  <FaGithub />
                </div>
              </div>
            </a>
            <a href="" target="" rel="noreferrer">
              <div className="relative group">
                <div className="absolute rounded-full opacity-75 -inset-0.5 md:-inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 blur group-hover:animate-pulse"></div>
                <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-full cursor-pointer md:p-7">
                  <AiOutlineMail />
                </div>
              </div>
            </a>
            <a href="" target="" rel="noreferrer">
              <div className="relative group">
                <div className="absolute rounded-full opacity-75 -inset-0.5 md:-inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 blur group-hover:animate-pulse"></div>
                <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-full cursor-pointer md:p-7">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
