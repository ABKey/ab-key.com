import ProjectPage from "@/components/ProjectPage";
import React from "react";

export default function Project1() {
  const reservationImg = "/assets/projects/reservations.png";
  return (
    <>
      <ProjectPage
        title="Reservation Application"
        metaDescription="Application that allows restaurants to handle reservations."
        description="This react application was built with the goal of allowing restaurants to handle reservations. 
        Users can edit and seat reservations, create tables, search for existing reservations and tables. 
        The dashboard lets users see the reservations for the current day / time, see what table they're assigned to, and their status."
        thoughts="This project was a great learning experience for me. It was my first experience integrating a backend to a React project. It was especially entertaining to learn PostgreSQL (via ElephantSQL) and Knex.js on the process."
        backgroundImg={reservationImg}
        projectCodeUrl="https://github.com/ABKey/project-restaurant-reservation"
        projectUrl="https://project-restaurant-reservation-fe.onrender.com/dashboard"
      />
    </>
  );
}
