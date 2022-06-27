import React, { FC } from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/aboutNavbar.css'

const NavBar: FC = () => {
  return (
    <nav className="about_navbar">
      <NavLink to="/birthsday" className="navLink">
        Birthsday
      </NavLink>
      <NavLink to="/tours" className="navLink">
        Tours
      </NavLink>
      <NavLink to="/reviews" className="navLink">
        Reviews
      </NavLink>
    </nav>
  );
}

export default NavBar