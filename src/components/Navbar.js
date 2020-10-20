//imported dependencies
import React from "react" //React
//imported logo
import logo from "../assets/logo.png"
//imported icons
import { FaAlignRight } from "react-icons/fa"
//imported links
import PageLinks from "../constants/links"

const Navbar = ({ toggleSidebar }) => {
  return <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo" className="logo" />
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignRight />
        </button>
      </div>
      <PageLinks styleClass="nav-links" />
    </div>
  </nav>
}

export default Navbar