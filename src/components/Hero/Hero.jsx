import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
  const textVariants = {
    initial: {
      opacity: 0,
      x: -500,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 14,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const sliderVariants = {
    initial: {
      x: "0",
    },
    animate: {
      opacity: 1,
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 20,
      },
    },
  };

  return (
    <div className="background-gradient">
      <div className="hero">
        <motion.div
          variants={textVariants}
          className="title"
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Erix Gutierrez</motion.h2>
          <motion.div variants={textVariants}>
            <h1>Full Stack Developer</h1>
            <h1>& UI Designer</h1>
          </motion.div>
          <div className="btns">
            <motion.a
              variants={textVariants}
              href="#portfolio"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button id="projects-btn">
                See My Latest Projects
              </motion.button>
            </motion.a>
            <motion.a
              variants={textVariants}
              href="#contact"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button id="contact-btn">Contact Me</motion.button>
            </motion.a>
          </div>
          <motion.a
            variants={textVariants}
            animate="scrollButton"
            href="#parallax-services"
          >
            <motion.img className="scroll" src="scroll.png" alt="scroll" />
          </motion.a>
        </motion.div>
        <div className="imgContainer">
          <img src="me.png" alt="hero" />
        </div>
      </div>
      <motion.p
        variants={sliderVariants}
        animate="animate"
        initial="initial"
        className="sliding-text"
      >
        Software Developer and UI Designer
      </motion.p>
    </div>
  );
};

export default Hero;
