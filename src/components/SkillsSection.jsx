import { useState } from "react";
import { cn } from "@/lib/utils";
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
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
           <span className="text-primary"> Competences</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
                  <span
                    key={key}
                    className="text-primary  py-1 px-3 text-xl rounded-full flex items-center gap-2 
                         transition-all "
                  >
                    <span > {skill.icon}</span>
                    <span>{skill.name}</span>
                  </span>
              </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};
