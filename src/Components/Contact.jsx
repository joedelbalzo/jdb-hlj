import React from "react";
import { FadeComponent } from "./FadeComponent";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import Icons from "./Icons";

//notes - create a thanks for your submission page for redirecting. set timeout there for 4 seconds to redirect home

function Contact() {
  const [state, handleSubmit] = useForm("mgejadwz");
  if (state.succeeded) {
    return (
      <div className="after-submit">
        Thank you! I'll be in touch shortly.
        <br />
        <br />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          Home
        </Link>
      </div>
    );
  }
  return (
    <FadeComponent>
      <h1 className="page-header">CONTACT ME</h1>
      <h3 className="page-subheader">Feel free to contact me and I'll be in touch shortly!</h3>
      <form className="main-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="email">Email Address:</label> */}
        <input id="name" type="name" name="name" placeholder="Your Name" />
        <input id="email" type="email" name="email" placeholder="Your Email Address" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        {/* <label htmlFor="subject">Subject:</label> */}
        <input id="subject" type="subject" name="subject" placeholder="Subject" />
        {/* <label htmlFor="message">Message:</label> */}
        <textarea id="message" name="message" placeholder="Your message" />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button type="submit" disabled={state.submitting}>
          SUBMIT
        </button>
        <h3 className="page-subheader">or email me at hlj.editing@gmail.com</h3>
      </form>
      <Icons />
    </FadeComponent>
  );
}

export default Contact;
