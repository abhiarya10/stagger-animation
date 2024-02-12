import React, { useState, useEffect } from "react";
import { useAnimate, motion, stagger } from "framer-motion";
import "./App.css";

function App() {
  const items = ["Home", "About", "Contact", "Location"];
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const staggerList = stagger(0.1, { startDelay: 0.25 });

  function ToggleButton() {
    setOpen(!open);
  }

  useEffect(() => {
    animate(
      ".main-box",
      {
        width: open ? 250 : 0,
        height: open ? 300 : 0,
        opacity: open ? 1 : 0,
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      ".each-item",
      open
        ? { opacity: 1, scale: 1, x: 0 }
        : { opacity: 0, scale: 0.3, x: -120 },
      {
        duration: 0.25,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  return (
    <div className="app-body" ref={scope}>
      <motion.button
        whileTap={{ scale: 0.9 }}
        className="btn"
        onClick={ToggleButton}
      >
        Click me
      </motion.button>
      <div className="main-box">
        {items.map((item, index) => (
          <div key={index} className="each-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
