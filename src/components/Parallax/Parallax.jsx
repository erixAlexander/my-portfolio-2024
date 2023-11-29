import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Parallax.scss";

const Parallax = ({ type }) => {
  const ref = React.useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "300%"]);
  const planetY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, #111132, #0c0c1d)"
            : "linear-gradient(180deg, #111132, #505064)",
      }}
    >
      <motion.h1 style={{ y: titleY }}>
        {type === "services" ? "What Can I Offer?" : "Check My Work!"}
      </motion.h1>
      <motion.div style={{ x: planetY }} className="stars"></motion.div>
      <motion.div style={{ y: planetY }} className="planets"></motion.div>
      <motion.div className="mountains"></motion.div>
    </div>
  );
};

export default Parallax;
