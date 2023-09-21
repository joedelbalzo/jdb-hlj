import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const Icons = () => {
  return (
    <div className="social-media-icons">
      <a
        href="https://www.facebook.com/hayley.jozwiak"
        rel="noopener noreferrer"
        alt="Facebook Icon"
        aria-label="Link for Hayley Jozwiak on Facebook"
      >
        <FacebookIcon style={{ fontSize: 60 }} />
      </a>
      <a
        href="https://www.linkedin.com/in/hayley-jozwiak-82980286/"
        target="_blank"
        rel="noopener noreferrer"
        alt="LinkedIn Icon"
        aria-label="Link for Hayley Jozwiak on Linked In"
      >
        <LinkedInIcon style={{ fontSize: 60 }} />
      </a>
      <a
        href="mailto:hlj.editing@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        alt="Email Icon"
        aria-label="Link to email Hayley Jozwiak"
      >
        <EmailIcon style={{ fontSize: 60 }} />
      </a>
    </div>
  );
};

export default Icons;
