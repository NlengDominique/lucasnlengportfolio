import { ArrowDown } from "lucide-react";
import {motion} from 'motion/react'
import { fadeIn } from "../../variants";

export const HeroSection = () => {
  return (
    <motion.div
    variants={fadeIn('up',0.5)}
    initial="hidden"
    whileInView={"show"}
    viewport={{once:false,amount:0.7}}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"></span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
            Développeur Fullstack passionné,
            </span>
          
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            je navigue entre interfaces intuitives et logiques métiers complexes, avec un souci constant de qualité, de performance et d’expérience utilisateur.
Mon travail, c’est du code propre, scalable et orienté produit.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              Voir mes projets
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Defiler </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </motion.div>
  );
};
