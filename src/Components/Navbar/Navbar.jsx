import { useState } from "react";
import "./Navbar.css";
import MenuOverlay from "../MenuOverlay/MenuOverlay";



const Navbar = () => {
    const [menuOpen,setMenuOpen]=useState(false);
    const [showDropdown,setShowDropdown]=useState(false);
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          NAMMOS
        </div>

        <div className="center-title">
          NAMMOS MYKONOS
        </div>

        
        <div className="menu-icon"
            onClick={()=>setMenuOpen(true)}>
          ☰
        </div>
        
      </nav>

      <div className="reservation-container">
        <button className="reservation-btn">
          RESERVATIONS
        </button>
      </div>
      <MenuOverlay
      isOpen={menuOpen}
      onClose={()=>setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;

