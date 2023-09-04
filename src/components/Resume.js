import React from "react";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
        {/* <UsersIcon className="w-10 inline-block mb-4" /> */}
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          My Resume
        </h1>

        <div className="bg-white p-5 rounded-lg shadow-lg">
          {/* Use an iframe to display the PDF */}
          <iframe
            title="Resume"
            src="./resume.pdf" // Path to your PDF file in the public folder
            width="100%"
            height="800px" // Adjust the height as needed
          ></iframe>
        </div>
      </div>
    </section>
  );
}
