import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Nav.scss";

const sections = ["Home", "AboutMe", "Projects", "Contact"];

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
          activeClass="active-scroll"
          smooth={true}
          duration={500}
          className="nav-link"
          onClick={() => handleNavItemClick(section.toLowerCase())}
        >
          <motion.div
            key={section}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.5 }}
            onClick={() => handleNavItemClick(section.toLowerCase())}
            className={`label ${
              selectedSection === section.toLowerCase() ? "active" : "inactive"
            }`}
            style={{ rotate: -90 }}
          >
            <span>{section}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
