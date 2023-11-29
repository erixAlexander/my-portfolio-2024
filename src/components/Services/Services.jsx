import React from "react";
import { motion } from "framer-motion";
import { IoLogoAngular } from "react-icons/io5";
import { FaNodeJs, FaReact, FaApple, FaCss3 , FaHtml5 } from "react-icons/fa";
import { SiMongodb, SiDjango } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { IoLogoAndroid } from "react-icons/io";
import "./Services.scss";

const Services = () => {
  const [color, setColor] = React.useState(0);
  const colors = ["White", "Orange", "Purple"];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setColor((color + 1) % colors.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [color, colors.length]);

  const textVariants = {
    initial: {
      opacity: 0,
      x: 500,
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
  };

  return (
    <div className="services">
      <motion.div
        variants={textVariants}
        initial="initial"
        whileInView="animate"
        className="text-container"
      >
        <h5>
          We Focus On Making Your Brand <b>Grow</b> And Move <b>Forward</b>
        </h5>
        <hr />
      </motion.div>
      <div className="title">
        <div className="upper">
          <div className="people-img"></div>
          <h1>
            <b className={colors[color]}>Unique</b>
            <span> Ideas</span>
          </h1>
        </div>
        <div className="lower">
          <h1>
            <b className={colors[color]}>For Your</b> <span>Business</span>
          </h1>
          <a href="#portfolio">
            <button>What Can We Do?</button>
          </a>
        </div>
      </div>
      <div className="services-list">
        <div className="service-item">
          <h1>Full Stack Development</h1>
          <p>
            We cover every aspect of full-stack development - front-end and
            back-end, databases, servers, APIs, DevOps, and version controlling
            systems.
          </p>
          <a href="#portfolio">
            <button>
              <IoLogoAngular />
              <FaReact />
              <FaNodeJs />
              <SiMongodb />
              <SiDjango />
              <DiPostgresql />
            </button>
          </a>
        </div>
        <div className="service-item">
          <h1>Mobile App Development</h1>
          <p>
            Creates native, cross-platform and progressive applications with
            stable performance, and API integration.
          </p>
          <a href="#portfolio">
            <button>
              <IoLogoAndroid />
              <FaApple />
              <FaReact />
              <FaNodeJs />
              <FaCss3 />
            </button>
          </a>
        </div>
        <div className="service-item">
          <h1>Front-end Development</h1>
          <p>
            Mobile app development, web development, UI/UX, and other software
            development projects that improve usability.
          </p>
          <a href="#portfolio">
            <button>
              <FaHtml5 />
              <FaCss3 />
              <FaReact />
              <IoLogoAngular />
              <IoLogoAndroid />
              <FaApple />
            </button>
          </a>
        </div>
        <div className="service-item">
          <h1>Backend & API Development</h1>
          <p>
            Designed with best industry practices and agile principles to craft
            quality solutions
          </p>
          <a href="#portfolio">
            <button>
              <FaNodeJs />
              <SiMongodb />
              <SiDjango />
              <DiPostgresql />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
