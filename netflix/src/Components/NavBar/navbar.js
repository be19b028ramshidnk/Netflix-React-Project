import React, { useState } from 'react';
import "./NavBar.css";


function NavBar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);}

  const logoUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png";

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoUrl} alt="Logo" />
      </div>
      <div className="navbar-user">
      <button className="button"
          onClick={toggleDropdown}
        >Login/Sign up</button>
        {dropdownVisible && (
          <div className="dropdown-menu">
            <a href="/login">Login</a>
            <a href="/sign_up">Sign up</a>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar