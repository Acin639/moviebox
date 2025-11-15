import React from 'react';
import { FaBell, FaSearch, FaUser } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <img src="/logo192.png" className="logo" alt="logo" />
        <input className="search" placeholder="Search movies..." />
      </div>
      <div className="right">
        <FaSearch className="icon"/>
        <FaBell className="icon"/>
        <FaUser className="icon"/>
      </div>
    </nav>
  );
}