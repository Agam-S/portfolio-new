import { useState, useRef, useLayoutEffect, useEffect } from "react";
import "./Projects.scss";
import { motion, useAnimation } from "framer-motion";

const Projects = () => {
  const popupCardRef = useRef(null);

  const [openId, setOpenId] = useState(null);

  const toggleOpen = (id) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    if (openId) {
      setTimeout(() => {
        popupCardRef.current.scrollIntoView({ behavior: "smooth" });
        window.scrollBy(0, -65);
      }, 1000);
    }
  }, [openId]);

  const controls = useAnimation();

  useLayoutEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth <= 600) {
        controls.start({ opacity: 1, scale: 1, x: 0 });
        return;
      }

      const yOffset = window.pageYOffset;
      if (yOffset > 1600) {
        controls.start({ opacity: 1, scale: 1, x: 0, y: 0 });
      } else {
        controls.start({ opacity: 0, scale: 0.5, x: 500, y: -500 });
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls]);

  const items = [
    {
      id: 1,
      title: "Private DM App",
      subtitle: "ReactJS, Firebase, Bootstrap",
      description:
        "Developed using React, Firebase, and Firebase Authentication, this app facilitates real-time messaging between users. Users securely log in and can chat with others by searching their username. Additionally, friends can be added to a dedicated DM list for convenient communication. This project prioritizes privacy, real-time interaction, and user convenience, offering a seamless messaging experience while ensuring data security.",
      link: "https://github.com/Agam-S/chat-app",
      live: "https://private-chat-app-agam.netlify.app/",
    },
    {
      id: 2,
      title: "NBA Prediction App",
      subtitle:
        "Angular + Typescript, MongoDB, ExpressJS, Python, Scikit-learn, Auth0",
      description:
        "Crafted as part of the Diploma of IT (Advanced Programming), this project offered users the opportunity to construct personalized NBA teams, complete with their preferred players, and witness their dream teams in action. A standout feature is the utilization of a machine learning algorithm, powered by Python with Scikit-Learn, to compare two teams based on meticulously curated NBA player data spanning two years. The project's API boasts dual functionality: authentication verification via Auth0 and seamless CRUD operations tailored to each logged-in user. Furthermore, a Python script integrated within ExpressJS dynamically computes team win percentages, facilitating comprehensive team comparisons directly on the frontend.",
      link: "https://github.com/Agam-S/DIP-Sem1-TeamProj",
    },
    {
      id: 3,
      title: "Request Invite Form Demo",
      subtitle: "React + Typescript",
      description:
        "This portfolio piece demonstrates my proactive approach to understanding employer interview processes. Utilizing React and TypeScript, I developed a Request Invite Form Demo based on common interview question challenges. The project showcases my frontend development skills and problem-solving abilities in a practical manner. With a user-friendly interface and smooth functionality, the demo underscores my attention to detail and commitment to delivering effective solutions. By developing this demo, I aim to provide a practical solution for job seekers while illustrating my flexibility and proficiency in addressing industry challenges.",
      link: "https://github.com/Agam-S/request-invite-demo",
      live: "https://endearing-banoffee-6b432e.netlify.app/",
    },
    {
      id: 4,
      title: "Donation App",
      subtitle:
        "React + TypeScript, Firebase, ExpressJS, GoogleAPI, PayPal Bootstrap, Azure",
      description:
        "Developed for a real client as part of the Diploma of IT program, this web application facilitates user donations to organizations and donate to different products. PayPal integration ensures secure transactions, while an email bot automates payment notifications. Primarily focused on backend development, I spearheaded the creation of email bots, managed databases, and conducted security testing to identify potential vulnerabilities. Additionally, I contributed to frontend development. Azure Kanban facilitated efficient backlog management and planning, complementing our Agile methodology. We conducted client meetings and retrospectives to ensure project alignment and continuous improvement. This project showcases my versatility in backend and frontend development, as well as my commitment to secure and agile project management practices.",
      link: "https://github.com/Agam-S/edable-donors",
      live: "https://www.edable.org.au/donations",
    },
  ];

  return (
    <>
      <div className="p-div">
        <span className="projects"></span>
        <br />
        <br />
        <br />
        <div className="projects-container">
          <h1 className="title">Projects</h1>
          <div className={`overlay ${openId ? "active" : ""}`}></div>
          <motion.div className="projects-main" animate={controls}>
            {openId && (
              <motion.div className="popup-card" ref={popupCardRef}>
                <h3 className="h3">{items[openId - 1].title}</h3>
                <label className="label">{items[openId - 1].subtitle}</label>
                <p className="p">{items[openId - 1].description}</p>
                <div className="buttons">
                  <a
                    href={items[openId - 1].link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      Github
                    </motion.button>
                  </a>

                  {items[openId - 1].live && (
                    <a
                      href={items[openId - 1].live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        Live
                      </motion.button>
                    </a>
                  )}

                  <motion.button
                    onClick={() => toggleOpen(null)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    Close
                  </motion.button>
                </div>
              </motion.div>
            )}
            {items.map((item) => (
              <motion.div
                key={item.id}
                className="project-card"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  toggleOpen(item.id);
                }}
              >
                <motion.h3 className="h3">{item.title}</motion.h3>
                <motion.label className="label">{item.subtitle}</motion.label>
                <p className="p">Click for more info.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
