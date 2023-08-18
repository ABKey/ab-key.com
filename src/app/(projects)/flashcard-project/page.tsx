import ProjectPage from "@/components/ProjectPage";

export default function Project2() {
  const flashcardImg = "/assets/projects/flashcards.png";

  return (
    <>
      <ProjectPage
        title="Flashcard Application"
        metaDescription="Application for creating flashcards to study."
        description="This paragraph is a placeholder for the description of the project."
        backgroundImg={flashcardImg}
        projectCodeUrl=""
        projectUrl=""
      />
    </>
  );
}
