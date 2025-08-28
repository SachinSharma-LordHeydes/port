import GridientBtn from "../ui/gridient-btn/GridientBtn";
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className="nav-bar">
      <div>Sachin</div>
      <ul className="nav-lists">
        <li className="nav-list">Home</li>
        <li className="nav-list">About Me</li>
        <li className="nav-list">Service</li>
        <li className="nav-list">Portflio</li>
        <li className="nav-list">Contact</li>
      </ul>
      <div>
        <GridientBtn>Contact with me</GridientBtn>
      </div>
    </div>
  );
};

export default Navbar;
