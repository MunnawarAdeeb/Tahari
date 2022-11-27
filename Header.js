import { Link} from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Logo">
          <h2>Tahari Restaurants</h2>
        </div>
        <div className="Content">
          <Link to="/">Home</Link>
        </div>
        <div className="Content">
          <Link to="about">About</Link>
        </div>
        <div className="Content">
          <Link to="customers">Add Hotels</Link>
        </div>
        <div className="Content">
          <Link to="contact">Contact</Link>
        </div>
        <div className="Content">
            <Link to="Restaurants">Restaurants</Link>
        </div>
      </div>
    </>
  );
};
export default Header;

