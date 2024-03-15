import "./App.css";
import Home from "./pages/Home/Home";
import Cursor from "./components/Cursor/Cursor";
import Nav from "./components/Nav/Nav";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
  });
  function progressBarColor(hueValue) {
    return `hsl(${hueValue}, 100%, 50%)`;
  }
  const hue = useTransform(scrollYProgress, [0, 1], [216, 156]);
  return (
    <>
      <Cursor />
      <motion.div
        id="navbar-progress"
        animate={{
          backgroundColor: progressBarColor(hue.get()),
        }}
        style={{
          scaleX: scaleX,
        }}
      />
      <Nav />

      <Home />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
