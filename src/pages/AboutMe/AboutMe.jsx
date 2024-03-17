import "./AboutMe.css";
import { motion, useAnimation } from "framer-motion";
import { useState, useLayoutEffect } from "react";

const AboutMe = () => {
  const icons = [
    {
      src: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      alt: "html",
      text: "HTML",
    },
    {
      src: "https://img.icons8.com/color/48/000000/css3.png",
      alt: "css",
      text: "CSS",
    },
    {
      src: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      alt: "JavaScript",
      text: "JavaScript",
    },
    {
      src: "https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png",
      alt: "Java",
      text: "Java",
    },
    {
      src: "https://img.icons8.com/nolan/64/php--v2.png",
      alt: "PHP",
      text: "PHP",
    },
    {
      src: "https://img.icons8.com/color/48/000000/python--v1.png",
      alt: "Python",
      text: "Python",
    },
    {
      src: "https://img.icons8.com/color/48/000000/typescript.png",
      alt: "TypeScript",
      text: "TypeScript",
    },
    {
      src: "https://img.icons8.com/color/48/000000/azure-1.png",
      alt: "Azure",
      text: "Azure",
    },
    {
      src: "https://img.icons8.com/color/48/000000/firebase.png",
      alt: "Firebase",
      text: "Firebase",
    },
    {
      src: "https://img.icons8.com/color/48/000000/google-cloud-platform.png",
      alt: "Google Cloud",
      text: "Google Cloud Platform",
    },
    {
      src: "https://img.icons8.com/color/48/000000/heroku.png",
      alt: "Heroku",
      text: "Heroku",
    },
    {
      src: "https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-netlify-a-cloud-computing-company-that-offers-hosting-and-serverless-backend-services-for-static-websites-logo-shadow-tal-revivo.png",
      alt: "Netlify",
      text: "Netlify",
    },
    {
      src: "https://img.icons8.com/color/48/net-framework.png",
      alt: ".NET",
      text: ".NET",
    },
    {
      src: "https://img.icons8.com/color/48/000000/nodejs.png",
      alt: "Node.js",
      text: "Node.js",
    },
    {
      src: "https://img.icons8.com/ios/50/express-js.png",
      alt: "Express.js",
      text: "Express.js",
    },
    {
      src: "https://img.icons8.com/color/48/000000/angularjs.png",
      alt: "Angular",
      text: "Angular",
    },
    {
      src: "https://img.icons8.com/color/48/000000/bootstrap.png",
      alt: "Bootstrap",
      text: "Bootstrap",
    },
    {
      src: "https://img.icons8.com/color/48/java-web-token.png",
      alt: "JWT",
      text: "JSON Web Token (JWT)",
    },
    {
      src: "https://img.icons8.com/color/48/000000/react-native.png",
      alt: "React",
      text: "React",
    },
    {
      src: "https://img.icons8.com/color/48/000000/microsoft-sql-server.png",
      alt: "Microsoft SQL Server",
      text: "Microsoft SQL Server",
    },
    {
      src: "https://img.icons8.com/color/48/mysql-logo.png",
      alt: "MySql",
      text: "MySQL",
    },
    {
      src: "https://img.icons8.com/color/48/000000/mongodb.png",
      alt: "MongoDB",
      text: "MongoDB",
    },
    {
      src: "https://img.icons8.com/color/48/000000/adobe-xd.png",
      alt: "Adobe XD",
      text: "Adobe XD",
    },
    {
      src: "https://img.icons8.com/color/48/000000/canva.png",
      alt: "Canva",
      text: "Canva",
    },
    {
      src: "https://img.icons8.com/color/48/000000/figma--v1.png",
      alt: "Figma",
      text: "Figma",
    },
    {
      src: "https://img.icons8.com/color/48/000000/notion.png",
      alt: "Notion",
      text: "Notion",
    },
    {
      src: "https://img.icons8.com/dusk/64/000000/postman-api.png",
      alt: "Postman",
      text: "Postman",
    },
    {
      src: "https://img.icons8.com/color/48/000000/trello.png",
      alt: "Trello",
      text: "Trello",
    },
  ];
  const controls = useAnimation();
  const [tooltipMap, setTooltipMap] = useState(false);
  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 600) {
        controls.start({ opacity: 1, scale: 1, x: 0 });
        return;
      }

      const yOffset = window.pageYOffset;
      if (yOffset > 650) {
        controls.start({ opacity: 1, scale: 1, x: 0 });
      } else {
        controls.start({ opacity: 0, scale: 0.8, x: -500 });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const handleHover = (key) => {
    setTooltipMap((prevMap) => ({ ...prevMap, [key]: true }));
  };

  const handleLeave = (key) => {
    setTooltipMap((prevMap) => ({ ...prevMap, [key]: false }));
  };

  const renderTooltip = (key, text) => {
    return (
      <motion.div
        className="tooltip"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        key={key}
      >
        {text}
      </motion.div>
    );
  };

  return (
    <>
      <br />
      <span id="AboutMe" className="aboutme"></span>
      <br /> <br />
      <h1 id="AboutMe" className="aboutme">
        About Me
      </h1>
      <motion.div className="containerAboutMe" animate={controls}>
        <motion.p className="textAboutMe">
          Hey! I am Agam. I am a full-stack developer. <br></br>
          <br></br>I have three years of web development experience.<br></br>
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
            {icons.map(({ src, alt, text }) => (
              <div
                key={alt}
                onMouseEnter={() => handleHover(alt)}
                onMouseLeave={() => handleLeave(alt)}
              >
                <motion.img whileHover={{ scale: 1.2 }} src={src} alt={alt} />
                {tooltipMap[alt] && renderTooltip(alt, text)}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutMe;
