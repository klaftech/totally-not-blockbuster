import { NavLink } from "react-router-dom";
import "./../assets/css/NavBar.css";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Charts
      </NavLink>
      <NavLink to="/wishlist" className="nav-link">
        Wishlist
      </NavLink>
      <NavLink to="/cart" className="nav-link">
        Cart
      </NavLink>
    </nav>
  );
};

export default NavBar;