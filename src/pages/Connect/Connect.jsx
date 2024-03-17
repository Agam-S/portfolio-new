import { motion } from "framer-motion";
import "./Connect.css";
import resume from "../../assets/Agam_Singh_Resume.pdf";

const Connect = () => {
  return (
    <>
      <span className="connect"></span>
      <br />
      <br />
      <div className="connect-container">
        <h1>Connect</h1>
        <div className="buttons-connect">
          <a
            href="https://github.com/Agam-S"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button className="linkedin-button">GitHub</motion.button>
          </a>
          <a
            href="https://www.linkedin.com/in/agamsingh0009/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button className="github-button">LinkedIn</motion.button>
          </a>
          <a href={resume} download="Agam_Singh_Resume.pdf">
            <motion.button className="resume-button">Resume</motion.button>
          </a>
          <a
            href="mailto:singh.agam0009@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button className="email-button">Email</motion.button>
          </a>
        </div>
        <br />
        <div className="p-end">Thank you for looking at my portfolio!</div>
      </div>
    </>
  );
};

export default Connect;
