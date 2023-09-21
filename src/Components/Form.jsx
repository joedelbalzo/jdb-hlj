import React from "react";
import { FadeComponent } from "./FadeComponent";

import { useForm, ValidationError } from "@formspree/react";

function Form() {
  const [state, handleSubmit] = useForm("mgejadwz");
  if (state.succeeded) {
    return <div className="after-submit">Thank you! I'll be in touch shortly.</div>;
  }
  return (
    <FadeComponent>
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
    </FadeComponent>
  );
}

export default Form;
