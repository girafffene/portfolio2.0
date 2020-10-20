//imported dependencies
import React from "react" //React
//importing social media links
import SocialLinks from "../constants/socialLinks"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links" />
        <h4>copyright&copy;{new Date().getFullYear()}</h4>
        <span>IPerez</span> all rights reserved
      </div>

    </footer>
  )
}

export default Footer