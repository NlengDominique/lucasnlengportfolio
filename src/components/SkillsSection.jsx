import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import { FaGithub, FaLaravel, FaNode, FaReact,FaVuejs } from "react-icons/fa";
import { SiExpress, SiPhpstorm, SiTypescript } from "react-icons/si"
import { RiTailwindCssFill } from "react-icons/ri";
import { DiDocker } from "react-icons/di";

const skills = [
  // Frontend
  { name: "React", icon:<FaReact/>, category: "frontend" },
  { name: "TypeScript", icon:< SiTypescript/>, category: "frontend" },
  { name: "Tailwind CSS", icon:< RiTailwindCssFill/>, category: "frontend" },
  { name: "Vue js", icon:< FaVuejs/>, category: "frontend" },

  // Backend
  { name: "Laravel", icon:<FaLaravel/>, category: "backend" },
  { name: "Express", icon:<SiExpress/>, category: "backend" },
  { name: "Node Js", icon:<FaNode/>, category: "backend" },

  // outils
  { name: "Docker", icon:<DiDocker/>, category: "outils" },
  { name: "Github Actions",icon:<FaGithub/> , category: "outils" },
  { name: "PHPStorm", icon:<SiPhpstorm/>, category: "outils" },
];

const categories = ["tous", "frontend", "backend", "outils"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("tous");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "tous" || skill.category === activeCategory
  );

  return (
    <motion.section 
      id="skills" 
      className="py-24 px-4 relative bg-secondary/30"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary text-2xl md:text-3xl lg:text-4xl">Competences</span>
        </motion.h2>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category, key) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 * key }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            {filteredSkills.map((skill, key) => (
              <motion.div
                key={`${skill.name}-${activeCategory}`}
                className="bg-card p-6 rounded-lg shadow-xs card-hover"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ 
                  duration: 0.4, 
                  delay: key * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.span
                  className="text-primary py-1 px-3 text-xl rounded-full flex items-center gap-2 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.span
                    whileHover={{ 
                      rotate: 360,
                      transition: { duration: 0.6 }
                    }}
                  >
                    {skill.icon}
                  </motion.span>
                  <span>{skill.name}</span>
                </motion.span>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};
