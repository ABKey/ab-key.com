import Link from "next/link";
import React from "react";
import Router from "next/router";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="text-gray-100">
            Hello, I'm <span className="text-[#f7795a]">Andy</span>
          </h1>
          <h1 className="py-2 text-gray-100">Full-Stack Developer</h1>
          <p className="py-4 text-gray-200 max-w-[70%] m-auto">
          I enjoy building things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build pixel-perfect, performant experiences. I'm always looking for new opportunities, so feel free to reach out if you're looking for a developer, have a question, or just want to connect.
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
            <a href="mailto:andresbakerv@outlook.com" target="_blank" rel="noreferrer">
              <div className="relative group">
                <div className="absolute rounded-full opacity-75 -inset-0.5 md:-inset-1 bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 blur group-hover:animate-pulse"></div>
                <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-full cursor-pointer md:p-7">
                  <AiOutlineMail />
                </div>
              </div>
            </a>
            <a href="https://drive.google.com/file/d/1T5RMbD72KAZXD8r_2L8_YM2G9iB6xyFK/view?usp=drive_link" target="" rel="noreferrer">
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
