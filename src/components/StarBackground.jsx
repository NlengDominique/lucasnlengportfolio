import { useEffect, useState } from "react";
import { motion } from "motion/react";

// id, size, x, y, opacity, animationDuration
// id, size, x, y, delay, animationDuration

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  return (
    <motion.div 
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="star"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: star.opacity,
            scale: 1
          }}
          transition={{ 
            duration: 0.5,
            delay: Math.random() * 2
          }}
        >
          <motion.div
            animate={{ 
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: star.animationDuration,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full bg-white rounded-full"
          />
        </motion.div>
      ))}

      {meteors.map((meteor) => (
        <motion.div
          key={meteor.id}
          className="meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
          }}
          initial={{ 
            opacity: 0,
            x: -100,
            y: -100
          }}
          animate={{
            opacity: [0, 1, 0],
            x: [0, 200, 400],
            y: [0, 200, 400]
          }}
          transition={{
            duration: meteor.animationDuration,
            delay: meteor.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white to-transparent rounded-full" />
        </motion.div>
      ))}
    </motion.div>
  );
};
