import React from 'react';
import logoHeader from '../images/header-logo.png';

function Header() {
  return(
    <header className="header">
      <div className="header__logo" src={logoHeader} alt="Логотип - Mesto"/>
    </header> 
  );
}

export default Header;