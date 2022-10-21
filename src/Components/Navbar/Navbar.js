import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../../assets/logo.ico";
import "./Navbar.css";

const Navbar = () => {
const [click, setClick] = useState(false);
const handleClick = () => {
  setClick(!click);
}


  return (
    <>
        <nav className="navbar-container">
          <div className="logo">
            <Link to="/" className="navbar-logo">
              <img src={logo} alt="logo" /> 
            </Link>
            <Link to='/' className="navbar-logo">
                <h2>Toolhub</h2>
            </Link>
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'} >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/records">Records</Link>
            </li>
            <li>
              <Link to="/leaderboard">Leaderboard</Link>
            </li>
          </ul>
          <div className="hamburger"onClick={handleClick} >
            {click ? (<FaTimes style={{color: '#fff' }} />) : (<FaBars style={{color: '#fff' }} />) }
          </div>
          </nav>
    </>
  );
};

export default Navbar;