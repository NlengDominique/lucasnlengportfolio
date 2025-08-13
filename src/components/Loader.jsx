
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onComplete }) {
  const [text, setText] = useState("");
  const fullText = "<> LNDev </>";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-purple-100 text-gray-900 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="text-3xl mb-4 md:text-4xl font-mono font-bold"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
          </motion.span>
          <motion.span
            className="ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            |
          </motion.span>
        </motion.div>

        <motion.div
          className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 200, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.div
            className="h-full bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
            style={{
              boxShadow: "0 0 15px #3b82f6"
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
