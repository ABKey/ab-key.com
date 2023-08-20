import ProjectPage from "@/components/ProjectPage";
import React from "react";

export default function Project2() {
  const flashcardImg = "/assets/projects/flashcards.png";

  return (
    <>
      <ProjectPage
        title="Flashcard Application"
        metaDescription="Application for creating flashcards to study."
        description="This react application was built with the goal of allowing users to create flashcards to study. 
        Users can create decks of cards for any subject they like, add or remove cards on the go, and delete them whenever they're done with it. 
        The application gives you two options to see your decks. 
        View mode lets the user see all the cards of the deck in one screen to review the answers, and Study mode makes the cards appear one by one to test the user's knowledge."
        thoughts="This was my first project using React. 
        I learned a lot about the framework and how to use it to build a full application.
        Using React Router was a great way to learn how to navigate between pages and how to pass data between them."
        backgroundImg={flashcardImg}
        projectCodeUrl="https://github.com/ABKey/project-flashcards-app"
        projectUrl=""
      />
    </>
  );
}
