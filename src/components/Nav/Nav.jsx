import "./Nav.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
  const handleClick = () => {
    console.log("fire");
  };

  return (
    <div className="vertical-navbar">
      <NavItem isActive={true} onClick={handleClick} location={"#home"} />
      <NavItem isActive={false} onClick={handleClick} location={"#home"} />
      <NavItem isActive={false} onClick={handleClick} location={"#home"} />
    </div>
  );
};

export default Nav;
