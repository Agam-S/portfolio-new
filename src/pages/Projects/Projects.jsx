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
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien. Sed ut sapien euismod, tincidunt sapien quis, aliquam sapien.",
      link: "https://private-chat-app-agam.netlify.app/",
      github: "https://github.com/Agam-S/chat-app",
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
      <span className="projects"></span>
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
              <motion.h2>{item.title}</motion.h2>
              <motion.h3>{item.subtitle}</motion.h3>
              <p>Click for more info.</p>
            </motion.div>
          ))}
          {openId && (
            <motion.div
              className="popup-card"
              ref={popupCardRef}
              initial={{ opacity: 0, y: "-500%", x: "300%" }}
              animate={{ opacity: 1, y: "-180%", x: "0%" }}
              exit={{ opacity: 0, y: "-50%" }}
            >
              <h2>{items[openId - 1].title}</h2>
              <h3>{items[openId - 1].subtitle}</h3>
              <p>{items[openId - 1].description}</p>
              <a
                href={items[openId - 1].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Project
              </a>
              <button onClick={() => toggleOpen(null)}>Close</button>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
