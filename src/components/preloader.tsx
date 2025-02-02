import { useEffect, useState } from "react";
import { Typewriter } from "./typewriter";
import { AnimatePresence, motion } from "framer-motion";

// the goal of this component is to show a preloader and after making the loading it disappears
export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsVisible(false), 4000); // Adjust delay as needed
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 1.5,
            y: 50,
            transition: { duration: 0.5 },
          }}
          transition={{ duration: 0.3 }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <Typewriter />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
