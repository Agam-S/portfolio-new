import { motion } from "framer-motion";
import "../Nav.css";

const NavItem = ({ isActive, onClick, location }) => {
  return (
    <motion.div
      className="nav-item"
      onClick={onClick}
      whileHover={{ scale: 1.3 }}
      whileTap={{ scale: 0.9 }}
    >
      <motion.div
        className="dot"
        animate={{ scale: isActive ? 1.6 : 1 }}
        transition={{ duration: 0.3 }}
        href={{ location }}
      />
    </motion.div>
  );
};
export default NavItem;
