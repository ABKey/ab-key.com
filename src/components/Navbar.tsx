"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#030303]">
      <div className="flex items-center justify-between h-full px-2 mt-1 2xl:px-16">
        <Image
          src="/../public/assets/MyLogo.png"
          alt="/"
          width={100}
          height={100}
        />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNavbar} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          navbar
            ? " md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            navbar
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#080808f6] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex items-center justify-between w-full">
              <Image
                src="/../public/assets/MyLogo.png"
                alt="/"
                width="87"
                height="35"
              />
              <div className="relative">
                <div className="absolute rounded-full -inset-0.5 bg-white opacity-25 blur"></div>
                <div
                  onClick={handleNavbar}
                  className="relative flex items-center justify-center p-3 ease-in bg-black rounded-full cursor-pointer ring-white active:scale-95 duration-50"
                >
                  <AiOutlineClose />
                </div>
              </div>
            </div>
            <div className="flex flex-col py-4 text-white md:block">
              <ul className="uppercase">
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-40">
                <p className="uppercase tracking-widest text-[#f7795a]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="p-3 ring-1 ring-[#464646] bg-black duration-50 ease-in rounded-full shadow-lg cursor-pointer active:scale-95">
                    <FaLinkedinIn />
                  </div>
                  <div className="p-3 ring-1 ring-[#464646] bg-black duration-50 ease-in rounded-full shadow-lg cursor-pointer active:scale-95">
                    <FaGithub />
                  </div>
                  <div className="p-3 ring-1 ring-[#464646] bg-black duration-50 ease-in rounded-full shadow-lg cursor-pointer active:scale-95">
                    <AiOutlineMail />
                  </div>
                  <div className="p-3 ring-1 ring-[#464646] bg-black duration-50 ease-in rounded-full shadow-lg cursor-pointer active:scale-95">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
