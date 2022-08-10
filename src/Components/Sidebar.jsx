import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../../src/Sidebar.css'
const Sidebar = () => {
    const [isOpen, setOpen] = useState(false)

    const handleIsOpen = () => {
      setOpen(!isOpen)
    }
  
    const closeSideBar = () => {
      setOpen(false)
    }
  return (
    <div>
       <Menu isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}  pageWrapId={"page-wrap"} outerContainerId={"App"}>
        <NavLink className="menu-item" to="/" onClick={closeSideBar} >
          Home
        </NavLink>
        <NavLink className="menu-item" to="/about" onClick={closeSideBar} >
          about
        </NavLink>
        <NavLink className="menu-item" to="/contact" onClick={closeSideBar}>
          contact
        </NavLink>
      </Menu>
    </div>
  )
}
export default Sidebar
