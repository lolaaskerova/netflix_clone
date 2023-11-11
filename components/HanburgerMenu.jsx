import React, { useRef } from "react";
import { motion } from "framer-motion";

const HanburgerMenu = ({ showMenu, setShowMenu }) => {
  const ref = useRef(null);
  return (
    <motion.aside
      key={showMenu}
      initial={{ left: -200, opacity: 0 }}
      animate={{ left: 0, opacity: 1 }}
      exit={{ right: -200, opacity: 0 }}
      transition={{
        duration: 0.1,
        opacity: { ease: "linear" },
      }}
      ref={ref}
      className={`lg:hidden transition fixed h-full lg:w-[40%] w-[50%] bg-black bg-opacity-90 p-9 z-50 ${
        showMenu ? "block" : "hidden"
      }`}
    >
      <span
        onClick={() => setShowMenu(false)}
        className="text-white text-2xl absolute top-2 right-3 cursor-pointer transition hover:text-red-600"
      >
        ×
      </span>
      <ul className="list-none text-white flex flex-col gap-5 cursor-pointer mt-10">
        <li className="hover:text-red-600 transition">Movies</li>
        <li className="hover:text-red-600 transition">Series</li>
        <li className="hover:text-red-600 transition">New & Popular</li>
        <li className="hover:text-red-600 transition">My List</li>
      </ul>
    </motion.aside>
  );
};

export default HanburgerMenu;
