import {  Code, } from "lucide-react";
import { BiMobile } from "react-icons/bi";
import { VscAzureDevops } from "react-icons/vsc";

export const AboutSection = () => {
  return (
    <div    
   id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-primary">  A Propos</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Développeur fullstack passionné & créateur tech 
            </h3>

            <p className="text-muted-foreground">
              Je me spécialise dans la création d’applications  réactives, accessibles et performantes en utilisant des technologies modernes.
Passionné par la résolution élégante de problèmes complexes, je continue d’explorer de nouvelles technologies et méthodes pour rester à la pointe de l’évolution du web. 
            </p>

    

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Me Contacter
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Mon CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">  Developpement Web</h4>
                  <p className="text-muted-foreground">
                    Création de sites web et d’applications web avec des frameworks modernes. 
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <BiMobile className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Developpement Mobile</h4>
                  <p className="text-muted-foreground">
                    Conception d’interfaces utilisateur intuitives et d’expériences mobiles fluides.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <VscAzureDevops className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Devops</h4>
                  <p className="text-muted-foreground">
                   Pratiques DevOps et des méthodologies agiles pour assurer fiabilité et performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
