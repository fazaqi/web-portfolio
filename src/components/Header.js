import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [burgerState, setburgerState] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen((prevState) => !prevState);
    setburgerState((prevState) => !prevState);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper desktop">
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

          <div className="header__wrapper mobile">
            <div></div>
            <div onClick={toggleDrawer}>
              <div
                className={`hamburger ${
                  burgerState === true ? "is-active" : ""
                }`}
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={drawerOpen}
        onClose={toggleDrawer}
        direction="right"
        className="mobile__drawer"
        style={{ width: "min(75vw, 400px)", position: "fixed" }}
      >
        <ul>
          <li>about</li>
          <li>work</li>
          <li>contact</li>
        </ul>
        <button>Resume</button>
      </Drawer>
    </>
  );
}

export default Header;
