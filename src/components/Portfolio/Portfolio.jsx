import React from "react";
import items from "./items";
import { motion } from "framer-motion";
import { IoLogoAngular } from "react-icons/io5";
import { FaNodeJs, FaReact, FaApple, FaCss3, FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiDjango } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress } from "react-icons/si";

import "./Portfolio.scss";

const Item = ({ title, image, demo, technologies, github, desc, index }) => {
  const textVariants = {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        staggerChildren: 0.1,
      },
    },
  };

  const techIcons = {
    angular: IoLogoAngular,
    node: FaNodeJs,
    react: FaReact,
    apple: FaApple,
    css: FaCss3,
    html: FaHtml5,
    mongodb: SiMongodb,
    django: SiDjango,
    postgresql: DiPostgresql,
    android: IoLogoAndroid,
    js: IoLogoJavascript,
    express: SiExpress,
  };

  return (
    <motion.section
      className="item"
      style={index === 0 ? { height: "calc(100vh - 120px)" } : {}}
    >
      <img src={image} alt={title} />

      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="text"
      >
        <h3>{title}</h3>
        <p>{desc}</p>
        <div className="btns">
          <a href={demo} target="_blank" rel="noopener noreferrer">
            <button className="demo-btn">Demo</button>
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <button className="github-btn">GitHub</button>
          </a>
        </div>

        <div className="technologies">
          {technologies.map((tech, index) => (
            <span key={index}>
              {React.createElement(techIcons[tech], {
                className: "tech-icon",
              })}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

const Portfolio = () => {
  const [color, setColor] = React.useState(0);
  const colors = ["White", "Orange", "Purple"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColor((color + 1) % colors.length);
    }, 8000);

    return () => clearInterval(interval); // Clean up on component unmount
  }, [color, colors.length]);
  return (
    <div className="portfolio">
      <div className="progress">
        <h1>
          <span className={colors[color]}>Featured</span> Projects
        </h1>
        <div className="progressBar"></div>
      </div>

      {items.map((item, index) => (
        <Item key={item.id} {...item} index={index} />
      ))}
    </div>
  );
};

export default Portfolio;
