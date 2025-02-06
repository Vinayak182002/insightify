import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <div className="logo-brand">
          <NavLink to="/" className="logo">
            PCCOE
          </NavLink>
        </div>
        <nav>
          <ul className="nav-links">
            <li>
              <NavLink to="/" activeClassName="active" className="nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" activeClassName="active" className="nav-link">
                Registration
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClassName="active" className="nav-link">
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
