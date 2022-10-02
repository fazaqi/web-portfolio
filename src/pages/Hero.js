import React from "react";

function Hero() {
  return (
    <>
      <div className="hero__wrapper">
        <div className="container">
          <h5>Hi, my name is</h5>
          <h1 className="big__heading">Fariz Eza Syauqi.</h1>
          <p>
            I’m a Front-End Web Developer specialized in building and developing
            a Web App. I'm currently working at{" "}
            <span style={{ color: "#f9bc60" }}>Yokesen</span> as a Web
            Developer. Mainly work with{" "}
            <span style={{ color: "#f9bc60" }}>ReactJS</span> and{" "}
            <span style={{ color: "#f9bc60" }}>Laravel</span>, but i'm still
            open to explore other technology.
          </p>
          <button>Check out my works!</button>
        </div>
      </div>
    </>
  );
}

export default Hero;
