import "./App.css";
import Home from "./pages/Home/Home";
import Cursor from "./components/Cursor/Cursor";
import Nav from "./components/Nav/Nav";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <>
      <Cursor />
      <Nav />

      <Home />
      <AboutMe />
      <Projects />
    </>
  );
}

export default App;
