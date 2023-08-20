import React from "react";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const reservationImg = "/assets/projects/reservations.png";
  const flashcardsImg = "/assets/projects/flashcards.png";

  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#f7795a]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve built</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectItem
            title="Reservation Application"
            backgroundImg={reservationImg}
            projectUrl="reservation-project"
            
          />
          <ProjectItem
            title="Flashcard Application"
            backgroundImg={flashcardsImg}
            projectUrl="flashcard-project"
          />
        </div>
      </div>
    </div>
  );
}
