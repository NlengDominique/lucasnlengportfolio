import { ArrowUp } from "lucide-react";
import { motion } from "motion/react";

export const Footer = () => {
  return (
    <motion.footer
      className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.p
        className="text-sm text-muted-foreground"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        &copy; {new Date().getFullYear()} <span className="font-bold">Lucas Nleng</span> Tous droits réservés.
      </motion.p>

      <motion.a
        href="#hero"
        className="fixed right-6 bottom-6 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{
          scale: 1.1,
          rotate: -10,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
          stiffness: 200
        }}
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowUp size={20} />
        </motion.div>
      </motion.a>
    </motion.footer>
  );
};
