"use client"

import { Link } from "react-router-dom"
import "../styles/Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/icons/icon-48x48.png" alt="Nexus Store Logo" className="logo-icon" />
          <div className="logo-text-container">
            <span className="logo-text">NEXUS</span>
            <span className="logo-subtitle">STORE</span>
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header