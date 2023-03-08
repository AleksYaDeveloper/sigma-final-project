import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa"; // импорт иконки бургера
import { Link } from "react-router-dom";
//import './Header.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // состояние меню
  const [progressValue, setProgressValue] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Обработчик скролла страницы
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;

      // Вычисляем прогресс прокрутки страницы
      const progress = Math.round(
        (scrollPosition / (fullHeight - windowHeight)) * 100
      );
      setProgressValue(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="logo">
        <img src="/assets/1.svg" alt="Logo" />
      </div>
      <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li className="header__nav-color">
            <a href="#section1">HOME</a>
          </li>
          <li>
            <a href="#section2">PROJECT</a>
          </li>
          <li>
            <a href="#section3">SERVICES</a>
          </li>
          <li>
            <a href="#section4">ABOUT</a>
          </li>
          <li>
            <a href="#section5">BLOG</a>
          </li>
          <li>
            <a href="#section6">SHOP</a>
          </li>
          <li>
            <a href="#section7">CONTACT</a>
          </li>
        </ul>
      </nav>
      <div className="burger" onClick={toggleMenu}>
        <FaBars />
      </div>
      <div
        className="progress-bar"
        style={{ width: `${progressValue}%` }}
      ></div>{" "}
      <div className="signup-btn">
        <Link to="/signup">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
