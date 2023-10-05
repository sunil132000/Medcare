import React from "react";

function Header() {
  return (
    <div class="header">
      <a href="#home" class="logo">
        {" "}
        <i class="fas fa-heartbeat"></i> medcare.{" "}
      </a>

      <nav class="navbar">
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#doctors">Doctors</a>
        <a href="#book">Book</a>
        <a href="#review">Review</a>
        <a href="#blogs">Blogs</a>
      </nav>

      <div id="menu-btn" class="fas fa-bars"></div>
    </div>
  );
}

export default Header;
