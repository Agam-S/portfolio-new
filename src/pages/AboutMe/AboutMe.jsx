import "./AboutMe.css";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <>
      <div className="containerAboutMe">
        <h1 id="AboutMe" className="aboutme">
          About Me
        </h1>
        <motion.p className="textAboutMe">
          Hello, thank you for visiting my portfolio. I have created several
          full-stack applications both for personal projects and as part of a
          team. I have 4 years of experience working with JavaScript
          frameworks/libraries such as Express and React as well as languages
          like C#, Php, and Java.
        </motion.p>
      </div>
    </>
  );
};

export default AboutMe;
