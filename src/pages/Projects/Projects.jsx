import { useState, useRef, useEffect } from "react";
import "./Projects.scss";
import { motion } from "framer-motion";

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
      }, 1000);
    }
  }, [openId]);

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
      title: "Project 2",
      subtitle: "Subtitle 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien.",
      link: "https://www.google.com/",
    },
    {
      id: 3,
      title: "Project 3",
      subtitle: "Subtitle 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien.",
      link: "https://www.google.com/",
    },
    {
      id: 4,
      title: "Project 4",
      subtitle: "Subtitle 4",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien.",
      link: "https://www.google.com/",
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
          <div className="projects-main">
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
            {openId && (
              <motion.div
                className="popup-card"
                ref={popupCardRef}
                initial={{ opacity: 0, y: "-500%", x: "300%" }}
                animate={{ opacity: 1, y: "-70%", x: "-25%" }}
                exit={{ opacity: 0, y: "-50%" }}
              >
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
