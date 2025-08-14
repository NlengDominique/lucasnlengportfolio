import { Code } from "lucide-react";
import { BiMobile } from "react-icons/bi";
import { VscAzureDevops } from "react-icons/vsc";
import { motion } from "motion/react";

export const AboutSection = () => {
  const services = [
    {
      icon: Code,
      title: "Developpement Web",
      description: "Création de sites web et d'applications web avec des frameworks modernes."
    },
    {
      icon: BiMobile,
      title: "Developpement Mobile", 
      description: "Conception d'interfaces utilisateur intuitives et d'expériences mobiles fluides."
    },
    {
      icon: VscAzureDevops,
      title: "Devops",
      description: "Pratiques DevOps et des méthodologies agiles pour assurer fiabilité et performance."
    }
  ];

  return (
    <motion.div
      id="about"
      className="py-24 px-4 relative"
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
          <span className="text-primary text-2xl md:text-3xl lg:text-4xl">A Propos</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Développeur fullstack passionné & créateur tech
            </motion.h3>

            <motion.p
              className="text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Je me spécialise dans la création d'applications réactives, accessibles et performantes en utilisant des technologies modernes.
              Passionné par la résolution élégante de problèmes complexes, je continue d'explorer de nouvelles technologies et méthodes pour rester à la pointe de l'évolution du web.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#contact"
                className="cosmic-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Me Contacter
              </motion.a>

              <motion.a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Mon CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="gradient-border p-6 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="p-3 rounded-full bg-primary/10"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <service.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">{service.title}</h4>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};