import React from "react";

export default function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f7795a]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-200">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla quo nesciunt aut deleniti corporis, unde dolores similique sequi ducimus ipsam officiis ipsum ab voluptates voluptas iste explicabo iusto tempore? Illo?</p>
          <p className="py-2 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aspernatur ut esse impedit dolore quidem velit accusantium dolorum consequatur quis!</p>
          <p className="py-2 text-gray-200 underline cursor-pointer">
            Check out my latest projects below.
          </p>
        </div>
        <div className="relative flex items-center justify-center duration-300 ease-in cursor-pointer hover:scale-105">
          <div className="absolute rounded-xl -inset-0.5 bg-white opacity-25 blur"></div>
          <div className="relative bg-black rounded-xl ring-1 ring-white ">
            <img className="rounded-xl" src="" alt="/" />
          </div>
        </div>
      </div>
    </div>
  );
}
