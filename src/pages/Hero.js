import React from "react";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <>
      <div className="hero__wrapper">
        <div className="container">
          <h5>Hi, my name is</h5>
          <TypeAnimation
            sequence={[
              "Fariz Eza Syauqi.", // Types 'One'
              2000, // Waits 1s
              "Eza Syauqi.", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "Eza.", // Types 'Three' without deleting 'Two'
              2000,
            ]}
            wrapper="h1"
            cursor={true}
            repeat={Infinity}
            className="big__heading"
            speed="50"
          />
          {/* <h1 className="big__heading">Fariz Eza Syauqi.</h1> */}
          <p>
            I’m a Front-End Web Developer specialized in building and developing
            a Web App. I'm currently working at{" "}
            <span style={{ color: "#0165d3" }}>Yokesen</span> as a Web
            Developer. Mainly work with{" "}
            <span style={{ color: "#0165d3" }}>ReactJS</span> and{" "}
            <span style={{ color: "#0165d3" }}>Laravel</span>, but i'm still
            open to explore other technology.
          </p>
          <button>Check out my works!</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
