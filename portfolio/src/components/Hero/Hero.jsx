import React, { useRef } from "react";
import "./Hero.scss";
import { motion, useInView } from "framer-motion";

export default function Hero() {
  const titleRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);

  const titleInView = useInView(titleRef, { once: true });
  const imgInView = useInView(imgRef, { once: true });
  const textInView = useInView(textRef, { once: true });

  return (
    <div id="About" className="hero">
      <div className="hero--wrapper">
        <motion.div className="hero--textContainer">
          <div className="hero--title">
            <motion.h2
              ref={titleRef}
              className="hero--h1"
              initial={{ opacity: 0 }}
              animate={titleInView ? { opacity: 1, scale: [1, 1, 1, 1, 2, 1, 1, 1], x: 0 } : {}}
              transition={{ duration: 1.5 }}
            >
              ABOUT ME
            </motion.h2>
            <motion.img
              ref={imgRef}
              initial={{ opacity: 0.5, x: 50 }}
              animate={imgInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="hero--profile"
              src="/me.jpg"
            />
          </div>
          <motion.div
            ref={textRef}
            className="text"
            initial={{ opacity: 0, y: 200 }}
            animate={textInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.25 }}
          >
            <h1 className="hero--h2">
              I'm a current Master's student at Cornell studying computer science. I have been programming for over
              5 years and have experience in CV, NLP, and Bayesian ML research
              as well as industry software engineering projects.
            </h1>
            <br />
            <h1 className="hero--h2">
              I like to unwind by staying active, reading sci-fi, gaming, watching
              thought-provoking films, and eating the spiciest cuisines.
            </h1>
            <br />
            <h1 className="hero--h2">
              Inspired by <a href="https://www.youtube.com/user/penguinz0" target="_blank" rel="noopener noreferrer">MoistCr1TiKaL's</a> "Moist Meter",
              I've started rating movies I've watched. You can check out my ratings <a href="https://letterboxd.com/shahrukh0/" target="_blank" rel="noopener noreferrer">here</a>.
            </h1>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
