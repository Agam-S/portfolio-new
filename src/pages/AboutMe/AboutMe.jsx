import "./AboutMe.css";
import { motion, useAnimation } from "framer-motion";

const AboutMe = () => {
  const controls = useAnimation();

  const handleScroll = () => {
    const yOffset = window.pageYOffset;
    console.log(yOffset);
    if (yOffset > 650) {
      controls.start({ opacity: 1, scale: 1, x: 0 });
    } else {
      controls.start({ opacity: 0, scale: 0.8, x: -500 });
    }
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <span id="AboutMe" className="aboutme"></span>
      <br />
      <h1 id="AboutMe" className="aboutme">
        About Me
      </h1>
      <motion.div className="containerAboutMe" animate={controls}>
        <motion.p className="textAboutMe">
          Hey! I am Agam. I am a full-stack developer. <br></br>
          <br></br>I specialise in the backend and web appliaction development.
          Currently, I have 4 years of experience with web development.{" "}
          <br></br>
          <br></br>I have created several full-stack applications both for
          personal projects and as part of a team.<br></br>
          <br></br>I am excited to show you my projects.
          <br></br>
          <br></br>
          <p className="icon">
            Icons by <a href="https://icons8.com">Icons8</a>
          </p>
        </motion.p>
        <div className="techSection">
          <h2 className="techTitle">Technologies I have worked with</h2>
          <div className="techIcons">
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
              alt="html"
            />

            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/css3.png"
              alt="css"
            />

            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
              alt="javascript"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
              alt="java"
            />
            {/* while hover show text label */}
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/python--v1.png"
              alt="python"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/typescript.png"
              alt="typescript"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/azure-1.png"
              alt="azure"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/firebase.png"
              alt="firebase"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/google-cloud-platform.png"
              alt="google cloud"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/heroku.png"
              alt="heroku"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png"
              alt="netlify"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/net-framework.png"
              alt=".NET"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/nodejs.png"
              alt="node.js"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/ios/50/express-js.png"
              alt="express.js"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/angularjs.png"
              alt="angular"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/bootstrap.png"
              alt="bootstrap"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/java-web-token.png"
              alt="JWT"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/next.png"
              alt="NextJS"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/react-native.png"
              alt="react"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/microsoft-sql-server.png"
              alt="microsoft sql server"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/mongodb.png"
              alt="mongoDB"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/adobe-xd.png"
              alt="adobe xd"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/canva.png"
              alt="canva"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/figma--v1.png"
              alt="figma"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/notion.png"
              alt="notion"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/dusk/64/000000/postman-api.png"
              alt="postman"
            />
            <motion.img
              whileHover={{ scale: 1.4 }}
              src="https://img.icons8.com/color/48/000000/trello.png"
              alt="trello"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
