import React from 'react';
import { NavLink } from 'react-router-dom'; // If using React Router
import "./Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
            <li>
                <NavLink exact to="/" activeClassName="active-link">Home</NavLink>
            </li>
            <li>
                <NavLink to="/favourite" activeClassName="active-link">Favourite</NavLink>
            </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;