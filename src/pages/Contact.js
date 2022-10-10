import React from "react";

function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container text-center">
          <h2>Contact Me</h2>
          <p>
            I'm currently seeking a new opportunity. My inbox is always open, so
            feel free to contact me if you are interested in knowing more about
            me or if you need me to build a website / web app for you. I will do
            my best to help.
          </p>
          <a
            href="mailto:syauqieza@gmail.com"
            target="_blank"
            rel="noreferrer noopener"
          >
            <button>Say Hi!</button>
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
