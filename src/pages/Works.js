import React from "react";
import gdgn from "../assets/images/gudangin-dash.png";
import gdgnlp from "../assets/images/gudangin.png";
import csb from "../assets/images/csb.png";

function Works() {
  return (
    <>
      <section id="works">
        <div className="container">
          <div className="works">
            <h3 className="subheading">My Works</h3>
            <div className="row">
              <div className="col-lg-7">
                <img src={gdgnlp} alt="" />
              </div>
              <div className="col-lg-5">
                <h4>gudangin</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-5">
                <h4>gudangin dashboard</h4>
              </div>
              <div className="col-lg-7">
                <img src={gdgn} alt="" />
              </div>
            </div>

            <div className="row">
              <div className="col-lg-7">
                <img src={csb} alt="" />
              </div>
              <div className="col-lg-5">
                <h4>club sobat badak</h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
