import codeIMG from "../assets/photos/coding-language.png";
import liveIMG from "../assets/photos/web.png";

import { projects } from "../data/projects";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { SocialButtons } from "./Social-buttons";
import TypeComponent from "./type-component";

export const ProjectCard = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <section id="project-container">
      <h1 className="projects-intro">Projects</h1>
      {projects.map((item) => {
        const { title, description, stack, github, live, image, id, type, soon } = item;
        return (
          <div key={id} className="project-card" data-aos="flip-down">
            <div className="img-cont">
              <img src={image} alt={title} className="project-img" />
              <TypeComponent type={type} soon={soon}/>
            </div>
            <div className="project-info">
              <h3 className="project-title">{title}</h3>
              <p className="project-description">{description}</p>
              <div className="stack">
                {stack.map((tech, index) => {
                  return (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  );
                })}
              </div>
              <div className="buttons">
                <SocialButtons
                  link={live}
                  img={liveIMG}
                  alt={"live"}
                ></SocialButtons>
                <SocialButtons
                  link={github}
                  img={codeIMG}
                  alt={"Source Code"}
                ></SocialButtons>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};
