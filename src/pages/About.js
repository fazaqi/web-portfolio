import React from "react";
import me from "../assets/images/photo.jpg";

function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div className="about">
            <div className="row align-items-center">
              <div className="col-lg-7">
                <h3 className="subheading">About Me</h3>
                <p>
                  Hi, My name is Eza. I enjoyed coding, especially in web
                  development. My coding journey started back in 2017. I began
                  to learn how to code and how to build a website, and then I
                  decided to take a coding bootcamp to improve my skills in web
                  development.
                </p>
                <p>
                  After I finished my studies in a coding bootcamp, I got my
                  first web developer job in{" "}
                  <span style={{ color: "#0165d3" }}>Yokesen</span>. Until now,
                  I'm still working at{" "}
                  <span style={{ color: "#0165d3" }}>Yokesen</span>, with the
                  main focus of building a web app to help a marketplace seller
                  manage their store.
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
              <div className="col-lg-5 text-center">
                {/* <div className="my__img"></div> */}
                <img src={me} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
