import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "motion/react";

const projects = [
  {
    id: 1,
    title: "Site web Congres ADNA",
    description: "ADNA est un site web d'evenements culturels Bassa",
    image: "/projects/mangog.png",
    tags: ["Vue", "TailwindCSS", "Laravel"],
    demoUrl: "https://mangog2025.congresadnandogbatjeck.com/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "CinéMania",
    description:
      "votre portail ultime vers le monde du cinéma",
    image: "/projects/movie.png",
    tags: ["React", "TailwindCSS", "Motion"],
    demoUrl: "#",
    githubUrl: "https://github.com/NlengDominique/MyMovies",
  },
  {
    id: 3,
    title: "Pixel Position",
    description:
      "Plateforme  de publication et de recherche d'offres d'emploi",
    image: "/projects/pixel.png",
    tags: ["React", "Laravel", "TailwindCSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/NlengDominique/pixel-position",
  },
  {
    id: 4,
    title: "Caline House",
    description:
      "Application mobile de recherche de logement",
    image: "/projects/caline.png",
    tags: ["React Native", "Nest Js"],
    demoUrl: "https://www.calinehouse.com/",
    githubUrl: "#",
  },
    {
    id: 5,
    title: "Davinci CI/CD",
    description:
      "Infrastracture Devops pour la chaine CI/CD",
    image: "/projects/infra.png",
    tags: ["Gitea", "Jenkins", "Sonarqube","Docker"],
    demoUrl: "https://gitea.infravincipoc.site/",
    githubUrl: "https://github.com/NlengDominique/infraOps",
  },
];

export const ProjectsSection = () => {
  return (
    <motion.section 
      id="projects" 
      className="py-24 px-4 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2 
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-primary  text-2xl md:text-3xl lg:text-4xl">Mes Projets</span>
        </motion.h2>

        <motion.p 
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Voici quelques-uns de mes projets récents. Chacun a été soigneusement conçu avec une attention particulière aux détails, aux performances et à l'expérience utilisateur.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {projects.map((project, key) => (
            <motion.div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * key,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <motion.div 
                className="h-48 overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>

              <div className="p-6">
                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.2 + 0.1 * key }}
                  viewport={{ once: true }}
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span 
                      key={tag} 
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.05 * tagIndex }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.h3 
                  className="text-xl font-semibold mb-1"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + 0.1 * key }}
                  viewport={{ once: true }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-muted-foreground text-sm mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + 0.1 * key }}
                  viewport={{ once: true }}
                >
                  {project.description}
                </motion.p>
                
                <motion.div 
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + 0.1 * key }}
                  viewport={{ once: true }}
                >
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      whileHover={{ scale: 1.2, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github size={20} />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NlengDominique"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir mon Github <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};