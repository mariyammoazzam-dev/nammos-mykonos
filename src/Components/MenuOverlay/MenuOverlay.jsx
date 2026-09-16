import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./MenuOverlay.css";
import menuImage from "../../assets/summer12.jpg";

const MenuOverlay = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  return (
    <div className={`menu-overlay ${isOpen ? "active" : ""}`}>
      <div className="menu-left">
        <img src={menuImage} alt="Nammos" />

        <div className="left-content">
          <p className="location">◀️ CHANGE LOCATION</p>

          <h2>NAMMOS MYKONOS</h2>

          <ul>
            <li>HOME</li>
            <li>RESTAURANT</li>
            <li>CABANAS</li>
            <li>BEACH LIFE</li>
            <li>YACHTING</li>
            <li>PRIVATE CELEBRATIONS</li>
            <li>EVENTS</li>
            <li>News</li>
            <li>Location & Access</li>
            <li>Contact</li>
            <li>Reservations</li>
          </ul>
        </div>
      </div>

      <div className="menu-right">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <ul>
          <li onClick={() => navigate("/nammos")}>Nammos</li>
          <li>Events</li>
          <li>News</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>

        <div className="social-icons">
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaLinkedinIn />
        </div>
      </div>
    </div>
  );
};

export default MenuOverlay;
