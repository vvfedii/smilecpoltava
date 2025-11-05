import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Navbar/Navbar.css";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="nav">
      <div className="burger" onClick={toggleMenu}>
        {isOpen ? (
          <FontAwesomeIcon
            icon={faXmark}
            size="lg"
            style={{ color: "#0b3d2e" }}
          />
        ) : (
          <FontAwesomeIcon
            icon={faBars}
            size="lg"
            style={{ color: "#0b3d2e" }}
          />
        )}
      </div>

      <div className={`nav__links ${isOpen ? "show" : ""}`}>
      <Link
        className="nav__link"
        activeClass="active"
        to="courses"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Напрями
      </Link>
      <Link
        className="nav__link"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Про нас
      </Link>
      <Link
        className="nav__link"
        activeClass="active"
        to="reviews"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Відгуки
      </Link>
      <Link
        className="nav__link"
        activeClass="active"
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
        onClick={closeMenu}
      >
        Контакти
      </Link>
      </div>
    </nav>
  );
}
