//imported dependencies
import React, { useState } from "react" //React & use state
//imported components
import Navbar from "./Navbar" //Nav
import Sidebar from "./Sidebar" //Sidebar
import Footer from "./Footer" //Footer

const Layout = ({ children }) => {
  //handling state for isOpen for navbar
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer />
    </>
  )
}

export default Layout