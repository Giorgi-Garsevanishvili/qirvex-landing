import giorgiImg from "../assets/photos/Giorgi.webp";
import githubIMG from "../assets/photos/github.png";
import linkedinIMG from "../assets/photos/linkedin.png";
import { SocialButtons } from "./Social-buttons";
import "../style/welcome.scss";
import { ScrollButton } from "./scroll-button";

export const Welcome = () => {
  const gitURL = "https://github.com/Giorgi-Garsevanishvili";
  const LinkedinURL = "https://www.linkedin.com/in/giorgigarsevanishvili/";
  const gitALT = "Git Hub";
  const linkedinALT = "Linkedin";

  return (
    <>
      <section className="welcome-page">
        <div className="welcome-box">
          <div className="into-text-cont fade-slide-up">
            <h1 className="hi-text">
              🫶 Hey! I`m Giorgi <br /> Full-Stack Developer
            </h1>
            <img
              className="welcome-img-mob img-zoom"
              src={giorgiImg}
              alt="Giorgi Garsevanishvili"
            />
            <h3 className="about">
              Qirvex™ is my personal label, a home for all my projects, where I
              explore, build, and share tools that aim to improve everyday
              digital experiences.
            </h3>
            <div className="social-buttons">
              <SocialButtons img={githubIMG} link={gitURL} alt={gitALT} />
              <SocialButtons
                img={linkedinIMG}
                link={LinkedinURL}
                alt={linkedinALT}
              />
            </div>
          </div>
          <div className="img-box">
            <img
              className="welcome-img img-zoom"
              src={giorgiImg}
              alt="Giorgi Garsevanishvili"
            />
          </div>
        </div>
        <ScrollButton targetID={"project-container"} />
      </section>
    </>
  );
};
