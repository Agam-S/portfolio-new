import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Nav.scss";

const sections = ["Home", "AboutMe", "Contact"];

const Nav = () => {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleNavItemClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="vertical-navbar">
      {sections.map((section) => (
        <Link
          key={section}
          to={section.toLowerCase()}
          spy={true}
          smooth={true}
          duration={500}
          className="nav-link"
        >
          <motion.div
            key={section}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 0.5 }}
            onClick={() => handleNavItemClick(section.toLowerCase())}
            className={`nav-dot ${
              selectedSection === section.toLowerCase() ? "active" : ""
            }`}
          >
            {selectedSection === section.toLowerCase() && (
              <motion.div
                className="dot-label"
                initial={{ opacity: 0, y: -10, rotate: -90 }}
                animate={{ opacity: 1, x: -120, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                {section}
              </motion.div>
            )}
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
