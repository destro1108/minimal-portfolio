import React from "react";

const Navbar = () => {
  return (
    <header style={{ position: "sticky", top: 0 }}>
      <div className="brandName">swnnd.</div>
      <nav className="mobileMenuList">
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#skills">
            <li>Skills</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
