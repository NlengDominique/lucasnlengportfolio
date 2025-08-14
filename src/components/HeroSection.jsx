import { ArrowDown } from "lucide-react";
import { motion, useAnimation } from 'motion/react';
import { useEffect, useState } from 'react';

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const controls = useAnimation();
  
  const fullText = "Développeur Fullstack passionné,";
  const description = "je navigue entre interfaces intuitives et logiques métiers complexes, avec un souci constant de qualité, de performance et d'expérience utilisateur. Mon travail, c'est du code propre, scalable et orienté produit.";

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Typewriter effect
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 100);

    return () => {
      clearInterval(typeInterval);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Responsive particles
  const particleCount = isMobile ? 8 : 15;
  const particles = Array.from({ length: particleCount }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * (isMobile ? 3 : 4) + 2,
    duration: Math.random() * 8 + 8,
    delay: Math.random() * 3,
  }));

  return (
    <motion.div
      id="hero"
      className="relative  min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Responsive Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute bg-primary/20 rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, isMobile ? -15 : -25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Responsive Gradient Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 bg-primary/10 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-24 h-24 sm:w-36 sm:h-36 lg:w-48 lg:h-48 bg-secondary/20 rounded-full blur-2xl sm:blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main Content Container */}
      <div className=" mt-12 container max-w-7xl mx-auto text-center z-10 relative">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* Welcome Text - Mobile Optimized */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xs sm:text-sm lg:text-base text-primary/80 font-medium tracking-wider uppercase px-2"
          >
            {/* <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ✨ Bienvenue dans mon univers
            </motion.span> */}
          </motion.div>

          {/* Responsive Typewriter Title */}
          <motion.div
            className="px-2 sm:px-4 lg:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.h1 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight leading-tight break-words"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 }}
            >
              <motion.span 
                className="text-primary relative inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1 }}
              >
                {displayText}
                {showCursor && (
                  <motion.span
                    className="inline-block w-0.5 sm:w-1 h-6 sm:h-8 md:h-10 lg:h-12 xl:h-14 2xl:h-16 bg-primary ml-1 sm:ml-2"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  />
                )}
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* Responsive Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 2.5 }}
            className="px-4 sm:px-6 lg:px-8 xl:px-0"
          >
            <motion.p 
              className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted-foreground max-w-xs sm:max-w-2xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed sm:leading-relaxed lg:leading-loose"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 3 }}
            >
              {description.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  className=" text-xl inline-block mr-1 sm:mr-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 3 + index * (isMobile ? 0.02 : 0.05)
                  }}
                >
                  {word}
                </motion.span>
              ))}
            </motion.p>
          </motion.div>


          {/* Mobile-Optimized CTA Button */}
          <motion.div 
            className="pt-6 sm:pt-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 4.8 }}
          >
            <motion.a 
              href="#projects" 
              className="cosmic-button relative overflow-hidden inline-block w-full sm:w-auto max-w-sm sm:max-w-none mx-auto text-center py-3 sm:py-4 px-6 sm:px-8"
              whileHover={{ 
                scale: isMobile ? 1.01 : 1.02,
                boxShadow: "0 8px 25px rgba(var(--primary), 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.span
                className="relative z-10 block sm:inline text-sm sm:text-base font-medium"
                whileHover={{ y: isMobile ? 0 : -1 }}
                transition={{ duration: 0.2 }}
              >
                Voir mes projets
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/40"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Mobile-Responsive Scroll Indicator */}
      <motion.div 
        className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 5.2 }}
      >
        {/* <motion.span 
          className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3 font-medium text-center px-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="hidden sm:inline">Découvrir mon travail</span>
          <span className="sm:hidden">Défiler</span>
        </motion.span> */}
        
        <motion.div
          className="relative"
          animate={{ y: [0, isMobile ? 4 : 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-4 h-6 sm:w-5 sm:h-8 lg:w-6 lg:h-10 border-2 border-primary/50 rounded-full flex justify-center"
            whileHover={{ borderColor: "rgba(var(--primary), 0.8)" }}
          >
            <motion.div
              className="w-0.5 sm:w-1 h-1.5 sm:h-2 lg:h-3 bg-primary rounded-full mt-1 sm:mt-1.5 lg:mt-2"
              animate={{ 
                y: [0, isMobile ? 6 : 8, 0],
                opacity: [1, 0.3, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};