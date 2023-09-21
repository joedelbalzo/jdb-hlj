import React, { useRef, useState, useEffect } from "react";
import { FadeComponent } from "./FadeComponent";
import { motion, useAnimation } from "framer-motion";
import { useWindowSize } from "@react-hook/window-size";
import Contact from "./Contact";
import Icons from "./Icons";

const Home = () => {
  console.log("process env", process.env.NODE_ENV);
  const controls = useAnimation();
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  // const controls3 = useAnimation();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  // const ref3 = useRef(null);

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
            // if (entry.target === ref3.current) controls3.start({ opacity: 1 });
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px 50px 0px" }
    );

    observer.observe(ref1.current);
    observer.observe(ref2.current);
    // observer.observe(ref3.current);

    return () => observer.disconnect();
  }, []);

  return (
    <FadeComponent>
      <div className="home-intro-paragraph" style={{ marginBottom: "4rem" }}>
        <h1 className="home-intro-paragraph" style={{ display: "inline" }}>
          Hayley Jozwiak
        </h1>
      </div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, y: "200px" }}
        animate={controls1}
        transition={transition}
      >
        <Contact />
      </motion.div>
      <motion.div
        ref={ref2}
        initial={{ opacity: 0, y: "40px" }}
        animate={controls2}
        transition={transition}
      ></motion.div>
    </FadeComponent>
  );
};

export default Home;
