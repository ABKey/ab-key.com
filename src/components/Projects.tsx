import Image from "next/image";
import Link from "next/link";
import React from "react";
import flashcards from "public/assets/projects/flashcards.png";
import reservations from "public/assets/projects/reservations.png";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#f7795a]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Reservation Application"
            backgroundImg={reservations}
            projectUrl="/https://project-restaurant-reservation-fe.onrender.com"
          />
          <ProjectItem
            title="Flashcard Application"
            backgroundImg={flashcards}
            projectUrl=""
          />
        </div>
      </div>
    </div>
  );
}
