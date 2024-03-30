import { useState } from 'react'

function Navbar() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <nav>
      <div id='brand'>Design with MohamedAmiin</div>
      <div id="nav-menu">
        <span onClick={() => setShowMenu(!showMenu)} className="mobile-menu">
          Menu
        </span>
        <ul className={`${showMenu ? "active" : "hide"}`}>
          <li onClick={() => setShowMenu(false)}>
            <a href="#hero">Home</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#Skills">Skills </a>
          </li>
          
          <li onClick={() => setShowMenu(false)}>
            <a href="#about">About Me</a>
          </li>
          <li onClick={() => setShowMenu(false)}>
            <a href="#contact">Contact</a>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
