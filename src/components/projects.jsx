import React from "react";
import { Skill } from "./skills";
import CodeImg from "../assets/pankajUnsplash.jpg";

const ProjectCard = ({ img, title, subtitle, desc, stack, live, code }) => {
  return (
    <div className="projectCard">
      <img src={img} />
      <div className="title">{title}</div>
      <div className="subtitle">{subtitle}</div>
      <div className="desc">{desc}</div>
      <ul className="teckStack">
        {stack.map((tech) => (
          <Skill key={tech} name={tech} />
        ))}
      </ul>
      <div className="links">
        <a href={live} target="_blank">
          Live
        </a>
        <a href={code} target="_blank">
          Code
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      img: CodeImg,
      title: "playnloot",
      subtitle: "WebApp",
      desc: "A platform for PUBG players to host or participate in various tournaments with cash prizes.",
      stack: ["reactJS", "Firebase"],
      live: "https://playnloot.netlify.com/",
      code: "https://github.com",
    },
    {
      img: CodeImg,
      title: "playnloot2",
      subtitle: "WebApp",
      desc: "A platform for PUBG players to host or participate in various tournaments with cash prizes.",
      stack: ["reactJS", "Firebase"],
      live: "https://playnloot.netlify.com/",
      code: "https://github.com",
    },
    {
      img: CodeImg,
      title: "playnloot3",
      subtitle: "WebApp",
      desc: "A platform for PUBG players to host or participate in various tournaments with cash prizes.",
      stack: ["reactJS", "Firebase"],
      live: "https://playnloot.netlify.com/",
      code: "https://github.com",
    },
  ];
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="projectCardsContainer">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
