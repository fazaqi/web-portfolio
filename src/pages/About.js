import React from "react";

function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="row">
              <div className="col-lg-7">
                <h3 className="subheading">About Me</h3>

                <p>
                  Hello, Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Dolorum, doloribus nobis. Cumque, autem, ipsam corporis
                  officia blanditiis nihil nulla esse facilis aliquam, earum
                  velit nisi?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi
                  recusandae harum facilis quas odit earum.
                </p>
                <p>
                  Here are a few technologies I’ve been working with recently:
                </p>

                <div className="about__tech">
                  <ul>
                    <li>JavaScript</li>
                    <li>ReactJS</li>
                    <li>Redux</li>
                  </ul>
                  <ul>
                    <li>Laravel</li>
                    <li>Websocket</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="my__img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
