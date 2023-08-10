import React from "react";
import Link from "next/link";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-xl tracking-widest text-[#f7795a]">
          Contact
        </p>
        <h2 className="py-4">Get in touch</h2>
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left side */}
          <div className="w-full h-auto col-span-3 lg:col-span-2 rounded-xl">
            <div className="h-full lg:px-4">
              <div className="relative h-full">
                <div className="absolute rounded-xl -inset-0.5 bg-white opacity-5 md:opacity-40 blur"></div>
                <div className="relative h-full p-6 bg-black rounded-xl">
                  <div>
                    <h2 className="py-2">Andres Baker</h2>
                    <p>Full-Stack Developer</p>
                    <p className="py-4">
                      I am available for freelance or full-time positions. Get
                      in contact and let&apos;s chat.
                    </p>
                  </div>
                  <div>
                    <p className="pt-8 uppercase">Connect With Me</p>
                    <div className="flex items-center justify-between py-4">
                      <a
                        href="https://www.linkedin.com/in/andres-baker/"
                        target=""
                        rel="noreferrer"
                      >
                        <div className="relative group">
                          <div className="absolute rounded-lg opacity-50 -inset-0.5 bg-gradient-to-r duration-300 ease-in from-yellow-600 via-orange-600 to-red-600 group-hover:scale-105"></div>
                          <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-lg cursor-pointer group-hover:scale-105">
                            <FaLinkedinIn />
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://github.com/ABKey"
                        target=""
                        rel="noreferrer"
                      >
                        <div className="relative group">
                          <div className="absolute rounded-lg opacity-50 -inset-0.5 bg-gradient-to-r duration-300 ease-in from-yellow-600 via-orange-600 to-red-600 group-hover:scale-105"></div>
                          <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-lg cursor-pointer group-hover:scale-105">
                            <FaGithub />
                          </div>
                        </div>
                      </a>
                      <a href="" target="" rel="noreferrer">
                        <div className="relative group">
                          <div className="absolute rounded-lg opacity-50 -inset-0.5 bg-gradient-to-r duration-300 ease-in from-yellow-600 via-orange-600 to-red-600 group-hover:scale-105"></div>
                          <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-lg cursor-pointer group-hover:scale-105">
                            <AiOutlineMail />
                          </div>
                        </div>
                      </a>
                      <a href="" target="" rel="noreferrer">
                        <div className="relative group">
                          <div className="absolute rounded-lg opacity-50 -inset-0.5 bg-gradient-to-r duration-300 ease-in from-yellow-600 via-orange-600 to-red-600 group-hover:scale-105"></div>
                          <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-lg cursor-pointer group-hover:scale-105">
                            <BsFillPersonLinesFill />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="w-full h-auto col-span-3 rounded-xl">
            <div className="relative">
              <div className="absolute rounded-xl -inset-0.5 bg-white opacity-5 md:opacity-40 blur"></div>
              <div className="relative p-6 bg-black rounded-xl ">
                <form action="" method="POST" encType="multipart/form-data">
                  <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">Name</label>
                      <input
                        className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                        type="text"
                        name="name"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="py-2 text-sm uppercase">
                        Phone Number
                      </label>
                      <input
                        className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                        type="text"
                        name="phone"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Email</label>
                    <input
                      className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Subject</label>
                    <input
                      className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                      type="text"
                      name="subject"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="py-2 text-sm uppercase">Message</label>
                    <textarea
                      className="p-3 bg-black rounded-lg ring-1 ring-white"
                      rows={10}
                      name="message"
                    ></textarea>
                  </div>
                  <button className="w-full p-4 mt-4 ">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="p-4 ease-in rounded-full cursor-pointer hover:duration-300 active:scale-95 active:duration-50 hover:scale-110">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#f7795a]"
                size={30}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
