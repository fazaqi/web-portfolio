import React from "react";
import gdgn from "../assets/images/gudangin.png";
import csb from "../assets/images/csb.png";
import bkpi from "../assets/images/bkpi.png";
import warisan from "../assets/images/warisan.png";

function Works() {
  return (
    <>
      <section id="works">
        <div className="container">
          <div className="works">
            <h3 className="subheading">My Works</h3>

            {/* gudangin */}
            <div className="row items align-items-center">
              <div className="col-lg-7">
                <img src={gdgn} alt="" />
              </div>
              <div className="col-lg-5"></div>
              <div className="works_desc right">
                <h4>Gudangin</h4>
                <div className="desc">
                  <p>
                    A web app for managing multiple store in multiple
                    marketplace into one dashboard. You can connect your store
                    in marketplace to gudangin so you can organize your stores,
                    orders, products, stocks, and chat from all your stores in
                    one dashboard
                  </p>
                </div>
                <div className="tech__stack right">
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Laravel</li>
                    <li>Pusher</li>
                  </ul>
                </div>
                <div className="works_link">
                  <a
                    href="https://gudangin.id/free-trial"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* CSB */}
            <div className="row items align-items-center">
              <div className="works_desc">
                <h4>Club Sobat Badak</h4>
                <div className="desc">
                  <p>
                    A website for a community. In this website you can collect a
                    point which called 'Baper Poin' by playing games,
                    participate the event, buying the product, etc. And the
                    point that have been collected can be used for the auction
                    that run in this website.
                  </p>
                </div>
                <div className="tech__stack">
                  <ul>
                    <li>jQuery</li>
                    <li>Laravel</li>
                  </ul>
                </div>
                <div className="works_link">
                  <a
                    href="https://sobatbadak.club/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View
                  </a>
                </div>
              </div>

              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <img src={csb} alt="" />
              </div>
            </div>

            {/* Warisan */}
            <div className="row items align-items-center">
              <div className="col-lg-7">
                <img src={warisan} alt="" />
              </div>
              <div className="col-lg-5"></div>
              <div className="works_desc right">
                <h4>Warisan</h4>
                <div className="desc">
                  <p>
                    A website for affiliate marketing. You can get a commision
                    by inviting other people to join warisan or selling the
                    product that available on warisan.
                  </p>
                </div>
                <div className="tech__stack right">
                  <ul>
                    <li>jQuery</li>
                    <li>Laravel</li>
                  </ul>
                </div>
                <div className="works_link">
                  <a
                    href="https://warisan.co.id/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>

            {/* BKPI */}
            <div className="row items align-items-center">
              <div className="works_desc">
                <h4>BKPI Digital</h4>
                <div className="desc">
                  <p>
                    A web app platform for daily work report. This web app is
                    built as a support platform for a workshop that held by a
                    client.
                  </p>
                </div>
                <div className="tech__stack">
                  <ul>
                    <li>React</li>
                    <li>Redux</li>
                    <li>Laravel</li>
                  </ul>
                </div>
                <div className="works_link">
                  <a
                    href="https://oke.link/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View
                  </a>
                </div>
              </div>
              <div className="col-lg-5"></div>
              <div className="col-lg-7">
                <img src={bkpi} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Works;
