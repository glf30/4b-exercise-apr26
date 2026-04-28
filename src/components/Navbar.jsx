import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="nav-links" to="/">
        Home
      </Link>
      <Link className="nav-links" to="/watchlist">
        Watch-List
      </Link>
      <Link className="nav-links" to="/addmovie">
        Add Movie Form
      </Link>
    </nav>
  );
};

export default Navbar;
