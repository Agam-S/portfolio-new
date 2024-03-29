import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import "./Nav.scss";

const sections = ["Home", "AboutMe", "Projects", "Connect"];

const Nav = () => {
  const [selectedSection, setSelectedSection] = useState("Home");

  const handleNavItemClick = (section) => {
    setSelectedSection(section);
  };
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className={fix ? "sticky vertical-navbar" : "vertical-navbar"}>
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
            className={`label-nav ${
              selectedSection === section.toLowerCase() ? "active" : "inactive"
            }`}
          >
            <span>{section}</span>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default Nav;
