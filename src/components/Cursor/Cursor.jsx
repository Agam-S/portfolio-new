import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Cursor.scss";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <motion.div
      className="cursor"
      style={{ translate: "transform(-50%, -50%)", translateZ: 0 }}
      animate={{
        x: position.x,
        y: position.y,
        scale: 1.2,
        opacity: 0.8,
      }}
      transition={{ duration: 0, ease: "easeInOut" }}
    ></motion.div>
  );
};

export default Cursor;
