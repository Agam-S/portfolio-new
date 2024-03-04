// Home.js
import { motion } from "framer-motion";
import "./Home.css";

function Home() {
  const textVariant = {
    initial: {
      opacity: 0,
      y: -50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        mass: 5,
        damping: 10,
        delay: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <>
      <div className="home">
        <motion.div className="container">
          <motion.div
            className="textSlider"
            variants={textVariant}
            initial="initial"
            animate="animate"
          >
            <div className="text">
              <motion.h1
                variants={textVariant}
                initial="initial"
                animate="animate"
              >
                Agam Singh
              </motion.h1>
              <motion.h3
                variants={textVariant}
                initial="initial"
                animate="animate"
              >
                Full Stack Developer
              </motion.h3>
            </div>
          </motion.div>
          <motion.div
            className="box"
            animate={{
              scale: [1, 2, 2, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "20%", "50%", "20%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: 1,
              repeatDelay: 1,
            }}
          >
            {" "}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Home;
