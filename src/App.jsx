import "./App.css";
import Home from "./pages/Home/Home";
import Cursor from "./components/Cursor/Cursor";
import Nav from "./components/Nav/Nav";
import AboutMe from "./pages/AboutMe/AboutMe";

function App() {
  return (
    <>
      <Cursor />
      <Nav />
      <Home />
      <AboutMe />
    </>
  );
}

export default App;
