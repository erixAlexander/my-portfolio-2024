import React from "react";
import { motion } from "framer-motion";
import "./Navbar.scss";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img id="logo" src="EG-Dev.png" alt="EG-Dev" />
        </motion.span>
        <div className="social">
          <motion.a
            href="https://github.com/erixAlexander"
            target="_blank"
            rel="noreferrer"
            title="Facebook"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/github.png" alt="facebook" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/erix-gutierrez-652a75201/"
            target="_blank"
            rel="noreferrer"
            title="Linkedin"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/linkedin.png" alt="linkedin" />
          </motion.a>
          <motion.a
            href="https://www.credly.com/users/erix-gutierrez"
            target="_blank"
            rel="noreferrer"
            title="Credly"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="/credly.png" alt="credly" />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
