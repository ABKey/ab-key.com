"use client";
import React, { useEffect, useRef } from "react";
import WebViewer from "@pdftron/webviewer";

function ResumeViewer() {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      { path: "lib", initialDoc: "/assets/resume.pdf" },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {});
  }, []);
  return (
    <html>
      <head>
        <title>Andres Baker | Resume</title>
        <meta name="description" content="" />
      </head>
      <body>
        <div>
          <div className="h-full w-full" ref={viewerDiv}></div>
        </div>
      </body>
    </html>
  );
}

export default ResumeViewer;
