import React from "react";
import { motion } from "framer-motion";

const Links = () => {
  const linkItems = ["Homepage", "Services", "Portfolio", "Contact"];
  const variants = {
    open: {
      transition: { staggerChildren: 0.1, delayChildren: 0.6 },
    },
    closed: {
      transition: { staggerChildren: 0.06, staggerDirection: -1 },
    },
  };

  const itemvariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <motion.div className="links" variants={variants}>
      {linkItems.map((item) => (
        <motion.a
          variants={itemvariants}
          href={`#${item.toLowerCase()}`}
          key={item}
          className="link"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
