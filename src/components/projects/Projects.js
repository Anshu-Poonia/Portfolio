import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Hand-bag Website using Backend"
          des="In this project, I developed a hand-bag website using backend technologies. The website allows users to browse and purchase various hand-bag products. I implemented features such as user authentication, product management, and order processing. The backend was built using Node.js and Express, while the frontend was created with EJS. This project demonstrates my ability to create a full-stack web application with a focus on e-commerce functionality."
          src={projectTwo}
          githubLink="https://github.com/Anshu-Poonia/Project--Scatch.git" // Replace with actual link
          // liveLink="https://your-ecommerce-live-url.com" // Replace with actual link
        />
        <ProjectsCard
          title="JWT Authentication System using MERN Stack"
          des="Built a secure authentication system using the MERN stack (MongoDB, Express, React, Node.js) with JWT-based authentication. Implemented user registration, login, and protected routes. Added password reset functionality for account recovery and email verification to ensure valid users. The project demonstrates full-stack development skills, focusing on security, scalability, and real-world application features.
"
          src={projectOne}
          githubLink="https://github.com/Anshu-Poonia/Authentication-Authorisation-Project.git" // Replace with actual link
          // liveLink="https://your-ecommerce-live-url.com" // Replace with actual link
        />
        <ProjectsCard
          title="Personal Portfolio Website"
          des="Developed a responsive personal portfolio website to showcase my skills, projects, and experience. The website features a modern design with smooth animations and a clean layout. Built with React and styled-components for a dynamic user experience."
          src={projectThree}
          githubLink="https://github.com/Anshu-Poonia/Portfolio.git" // Replace with actual link
          // liveLink="https://your-portfolio-live-url.com" // Replace with actual link
        />
      </div>
    </section>
  );
}

export default Projects
