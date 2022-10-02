import React from "react";

function Header() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <div></div>
            <div className="d-flex align-items-center">
              <ul>
                <li>about</li>
                <li>work</li>
                <li>contact</li>
              </ul>

              <button>Resume</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
