import React, { useRef, useState, useEffect } from "react";
import { FadeComponent } from "./FadeComponent";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";
import { Link } from "react-router-dom";
import Form from "./Form";
import Icons from "./Icons";

const Services = () => {
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);

  const transition = {
    type: "spring",
    damping: 10,
    stiffness: 50,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ref1.current) controls1.start({ opacity: 1, y: 0 });
            if (entry.target === ref2.current) controls2.start({ opacity: 1, y: 0 });
            if (entry.target === ref3.current) controls3.start({ opacity: 1, y: 0 });
            if (entry.target === ref4.current) controls4.start({ opacity: 1, y: 0 });
          }
        });
      },
      { threshold: 0.4, rootMargin: "0px 0px 0px 0px" }
    );

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    observer.observe(ref3.current);
    observer.observe(ref4.current);

    return () => observer.disconnect();
  }, []);

  return (
    <FadeComponent>
      <h1 className="page-header" style={{ marginBottom: "1rem" }}>
        SERVICES
      </h1>
      {/* <h3 className="page-subheader">Here's a list of services I offer.</h3> */}
      <div className="services">
        <div style={{ textAlign: "center" }}>Hayley's Services</div>

        <motion.div
          ref={ref1}
          initial={{ opacity: 0, y: "50px" }}
          animate={controls1}
          transition={transition}
        >
          <div className="services-section-title">Proofreading Novels</div>
          <ul style={{ margin: 20, padding: 0 }}>
            <li className="services-list">
              Working with PDFs using comments, and stamps, or on occasion, physical proof page.
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref2}
          initial={{ opacity: 0, y: "50px" }}
          animate={controls2}
          transition={transition}
        >
          <div className="services-section-title">Copyediting Novels</div>
          <ul style={{ margin: 20, padding: 0 }}>
            <li className="services-list">
              Working with Word documents using track changes and comments.
            </li>
          </ul>
        </motion.div>

        <motion.div
          ref={ref3}
          initial={{ opacity: 0, y: "50px" }}
          animate={controls3}
          transition={transition}
        >
          <div className="services-section-title">Reviewing Graphic Novels</div>
          <ul style={{ margin: 20, padding: 0 }}>
            <li className="services-list">
              Reviewing text and art in layouts during any stage of the process.
            </li>
          </ul>
        </motion.div>
        <motion.div
          ref={ref4}
          initial={{ opacity: 0, y: "50px" }}
          animate={controls4}
          transition={transition}
        >
          <div
            style={{
              textAlign: "center",
              margin: "3rem auto",
              fontSize: "calc(14px + 1vw)",
              color: "rgb(20,30,70)",
            }}
          >
            Please feel free to contact me to discuss how I can contribute to your project's
            success!
          </div>
          <Form />
          <Icons />
        </motion.div>
      </div>
    </FadeComponent>
  );
};

export default Services;
