import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/images/e-logo.png";
import resume from "../resume.pdf";

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
            <div>
              <a href="/#hero">
                <svg
                  viewBox="0 0 1067 975"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M891.105 435.49H349.96C378.122 516.512 450.91 570.548 535.46 570.548C586.36 570.548 628.962 558.329 671.367 530.102L777.218 635.953C711.028 688.486 626.675 719.588 535.46 719.588C432.158 719.588 344.08 685.546 272.467 616.286C200.855 547.025 164.46 461.299 164.46 359.239C164.46 335.586 166.486 312.913 170.341 291.154H349.96H503.248H722.071C697.438 207.781 624.649 156.162 535.46 156.162C474.433 156.162 420.789 182.037 385.375 224.834H189.159C207.193 179.946 235.028 139.501 272.467 103.302C344.08 34.0421 432.158 0 535.46 0C636.41 0 722.071 35.2182 793.683 104.478C865.296 173.739 900.514 259.399 900.514 359.239C900.514 382.696 896.986 408.505 891.105 435.49Z"
                    fill="#272343"
                  />
                  <path
                    d="M915.934 600.735L1051.71 685.088C944.03 858.696 751.801 974.348 532.52 974.348C313.239 974.348 120.944 858.696 13.3293 685.088L149.106 600.735C228.494 728.997 370.542 814.461 532.52 814.461C694.497 814.461 836.481 728.997 915.934 600.735V600.735Z"
                    fill="#272343"
                    className="bottom_svg"
                  />
                  <path
                    d="M159.821 640.331C159.821 684.435 124.015 720.241 79.9107 720.241C35.7409 720.241 0 684.435 0 640.331C0 596.161 35.7409 560.42 79.9107 560.42C124.015 560.42 159.821 596.161 159.821 640.331Z"
                    fill="#272343"
                    className="bottom_svg"
                  />
                  <path
                    d="M1067 637.717C1067 681.822 1031.19 717.628 987.089 717.628C942.92 717.628 907.179 681.822 907.179 637.717C907.179 593.547 942.92 557.806 987.089 557.806C1031.19 557.806 1067 593.547 1067 637.717Z"
                    fill="#272343"
                    className="bottom_svg"
                  />
                  <path
                    d="M803.68 579.761C803.68 621.447 769.899 655.293 728.213 655.293C686.526 655.293 652.745 621.447 652.745 579.761C652.745 538.074 686.526 504.293 728.213 504.293C769.899 504.293 803.68 538.074 803.68 579.761Z"
                    fill="#272343"
                  />
                </svg>
              </a>
            </div>
            <div className="d-flex align-items-center">
              <ul>
                <a href="/#about">
                  <li>about</li>
                </a>
                <a href="/#works">
                  <li>work</li>
                </a>
                <a href="/#contact">
                  <li>contact</li>
                </a>
              </ul>
              <a href={resume} target="_blank" rel="noreferrer noopener">
                <button>Resume</button>
              </a>
            </div>
          </div>

          <div className="header__wrapper mobile">
            <div>
              <a href="/#hero">
                <img src={logo} alt="" className="logo" />
              </a>
            </div>
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
          <a href="/#about" onClick={toggleDrawer}>
            <li>about</li>
          </a>
          <a href="/#works" onClick={toggleDrawer}>
            <li>work</li>
          </a>
          <a href="/#contact" onClick={toggleDrawer}>
            <li>contact</li>
          </a>
        </ul>
        <a href={resume} target="_blank" rel="noreferrer noopener">
          <button>Resume</button>
        </a>
      </Drawer>
    </>
  );
}

export default Header;
