import React, { useState } from 'react';
import logo from '../../../../../vite.svg';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        block: 'end', 
      });
    }
  };

  return (
    <div className='header'>
      <div className='header__container'>
        <img src={logo} width={90} height={100} alt='logo' />
        <button className='header__menu-button' onClick={toggleMenu}>
          ☰
        </button>
        <div className={`header__wrapper ${isMenuOpen ? 'header__wrapper--open' : ''}`}>
          <button className='header__menu-button header__menu-close' onClick={toggleMenu}>
            X
          </button>
          <a href="#statistics" className='header__wrapper-text' onClick={(e) => { toggleMenu(); handleClick(e); }}>statistics</a>
          <a href="#recomendations" className='header__wrapper-text' onClick={(e) => { toggleMenu(); handleClick(e); }}>recomendations</a>
          <a href="#therapy" className='header__wrapper-text' onClick={(e) => { toggleMenu(); handleClick(e); }}>cognitive therapy</a>
        </div>
      </div>
    </div>
  );
}
