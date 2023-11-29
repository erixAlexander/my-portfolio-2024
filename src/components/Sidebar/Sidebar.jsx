import React from "react";
import ToggleButton from "./ToggleButton/ToggleButton";
import Links from "./Links/Links";
import { motion } from "framer-motion";
import "./Sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = React.useState(false);

  const variants = {
    open: {
      clipPath: "circle(1500px at 45px 45px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 100,
        damping: 80,
      },
    },
    closed: {
      clipPath: "circle(25px at 45px 45px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 250,
        damping: 40,
      },
    },
  };
  return (
    <motion.div
      className="sidebar"
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} open={open} />
    </motion.div>
  );
};

export default Sidebar;
