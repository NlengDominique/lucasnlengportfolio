import { ArrowRight, ExternalLink, Github } from "lucide-react";

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
      "Plateforme  de publication et de recherche d’offres d’emploi",
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
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
           <span className="text-primary"> Mes Projets </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Voici quelques-uns de mes projets récents. Chacun a été soigneusement conçu avec une attention particulière aux détails, aux performances et à l’expérience utilisateur.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NlengDominique"
          >
            Voir mon Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
