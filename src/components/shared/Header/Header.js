import React, { useState } from "react";

const Header = () => {
  const [darkmode, setDarkmode] = useState(3);

  const onSetDarkMode = (num) => setDarkmode(num);
  return (
    <div className="header">
      <div className="header__logo-box">
        <div className="header__logo-image">
          <img src="./assets/images/Instadriver1.png" />
        </div>
        <div className="header__logo-text">
          <span className="header__logo-text--1">Insta</span>
          <span className="header__logo-text--2">driver</span>
        </div>
      </div>
      <div className="header__navs">
        <button
          className={`btn btn--primary ${
            darkmode % 3 == 1 ? "btn--dark" : null
          }`}
          onClick={() => onSetDarkMode(1)}
        >
          Jobs
        </button>
        <button
          className={`btn btn--primary ${
            darkmode % 3 == 2 ? "btn--dark" : null
          }`}
          onClick={() => onSetDarkMode(2)}
        >
          Get Social
        </button>
        <button
          className={`btn btn--primary ${
            darkmode % 3 == 0 ? "btn--dark" : null
          }`}
          onClick={() => onSetDarkMode(3)}
        >
          James Keem
        </button>
      </div>
      <div className="header__menu">
        <div className="header__menu--text">Menu</div>
        <div className="header__menu--iconMain">
          <div className="header__menu--icon">&nbsp;</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
