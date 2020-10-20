//imported dependencies
import React from "react" //React
//importing navigation links
import Links from "../constants/links"
//importing social media links
import SocialLinks from "../constants/socialLinks"
//importing icons
import { FaTimes } from "react-icons/fa"

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`sidebar ${isOpen ? "show-sidebar" : ""} `} >
      <button className="close-btn" onClick={toggleSidebar}>
        <FaTimes />
      </button>

      <div className="side-container">
        <Links styleClass={`${isOpen ? "sidebar-links" : ""}`} />
        <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`}/> 
      </div>
    </aside>
  )
}

export default Sidebar