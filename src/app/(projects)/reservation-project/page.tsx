import ProjectPage from "@/components/ProjectPage";
import React from "react";

export default function Project1() {
  const reservationImg = "/assets/projects/reservations.png";
  return (
    <>
      <ProjectPage
        title="Reservation Application"
        metaDescription="Application that allows restaurants to handle reservations."
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laudantium nobis voluptatem magni soluta nesciunt cumque recusandae dolore aut ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laudantium nobis voluptatem magni soluta nesciunt cumque recusandae dolore aut ad. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis laudantium nobis voluptatem magni soluta nesciunt cumque recusandae dolore aut ad."
        backgroundImg={reservationImg}
        projectCodeUrl=""
        projectUrl=""
      />
    </>
  );
}
