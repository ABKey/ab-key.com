"use client";
import Router from "next/router";
import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

export default function Contact() {
  const [form, setForm] = React.useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
  }

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
                <div className="relative flex flex-col justify-between h-full p-6 bg-black rounded-xl">
                  <div>
                    <h2 className="py-2">Andres Baker</h2>
                    <p>Full-Stack Developer</p>
                    <p className="py-4">
                      I am available for freelance or full-time opportunities.
                      Get in contact and let&apos;s chat.
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
                      <a
                        href="mailto:andresbakerv@outlook.com"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="relative group">
                          <div className="absolute rounded-lg opacity-50 -inset-0.5 bg-gradient-to-r duration-300 ease-in from-yellow-600 via-orange-600 to-red-600 group-hover:scale-105"></div>
                          <div className="relative flex items-center justify-center p-6 duration-300 ease-in bg-black rounded-lg cursor-pointer group-hover:scale-105">
                            <AiOutlineMail />
                          </div>
                        </div>
                      </a>
                      <a
                        href="https://drive.google.com/file/d/1T5RMbD72KAZXD8r_2L8_YM2G9iB6xyFK/view?usp=drive_link"
                        target=""
                        rel="noreferrer"
                      >
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
          <div className="relative w-full h-auto col-span-3 rounded-xl">
            <div className="absolute rounded-xl -inset-0.5 bg-white opacity-5 md:opacity-40 blur"></div>
            <div className="relative p-6 bg-black rounded-xl ">
              <form
                action="https://getform.io/f/c1e94f24-67e2-4569-99bf-92bbba80faa5"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                      type="text"
                      name="name"
                      maxLength={100}
                      onChange={onChangeHandler}
                      value={form.name}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                      type="tel"
                      name="phone"
                      minLength={10}
                      maxLength={13}
                      onChange={onChangeHandler}
                      value={form.phone}
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                    type="email"
                    name="email"
                    maxLength={100}
                    onChange={onChangeHandler}
                    value={form.email}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 bg-black rounded-lg ring-1 ring-white"
                    type="text"
                    name="subject"
                    maxLength={100}
                    onChange={onChangeHandler}
                    value={form.subject}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 bg-black rounded-lg ring-1 ring-white"
                    rows={10}
                    name="message"
                    onChange={onChangeHandler}
                    value={form.message}
                  ></textarea>
                </div>
                <button type="submit" className="w-full p-4 mt-4">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        <div className="flex justify-center py-12">
          <a href="/#home">
            <div className="p-4 ease-in rounded-full cursor-pointer hover:duration-300 active:scale-95 active:duration-50 hover:scale-110">
              <HiOutlineChevronDoubleUp
                className="m-auto text-[#f7795a]"
                size={30}
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
