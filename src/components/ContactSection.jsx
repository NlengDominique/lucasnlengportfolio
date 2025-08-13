import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser"

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formDta, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e) => {
    setIsSubmitting(true)
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,e.target, 
      { publicKey: import.meta.env.VITE_PUBLIC_KEY })
    .then(() => {
      setFormData({
        name: "",
        email: "",
        message: "",
      }) 
      toast({
        title: "Message envoye",
        description: "Je vous reviens bientot!",
      })
    }).catch((error) => {
      console.error(error)
    }).finally(()=>{
      setTimeout(()=>{
        setIsSubmitting(false)
      },1000)
     
    })
  
  }
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "luc5@gmail.com",
      href: "mailto:luqnleng5@gmail.com"
    },
    {
      icon: Phone,
      title: "Telephone",
      value: "+237 698203241",
      href: "tel:+237698203241"
    },
    {
      icon: MapPin,
      title: "Ville",
      value: "Douala Cameroun",
      href: null
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitch, href: "#" }
  ];

  return (
    <motion.section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
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
          <span className="text-primary">Contactez-moi</span>
        </motion.h2>

        <motion.p
          className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Vous avez un projet en tête ou envie de collaborer ? N'hésitez pas à me contacter. Je suis toujours ouvert à discuter de nouvelles opportunités.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Infos Contact
            </motion.h3>

            <div className="space-y-6 flex flex-col justify-center items-center ">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex  space-x-4"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                  <motion.div
                    className="p-3 rounded-full bg-primary/10"
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <info.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <div>
                    <h4 className="font-medium">{info.title}</h4>
                    {info.href ? (
                      <motion.a
                        href={info.href}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {info.value}
                      </motion.a>
                    ) : (
                      <span className="text-muted-foreground">{info.value}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="font-medium mb-4">Mes reseaux</h4>
              <div className="flex space-x-4 justify-center">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.2,
                      rotate: 10,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-card p-8 rounded-lg shadow-xs"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.h3
              className="text-2xl font-semibold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Me Contacter
            </motion.h3>

            <motion.form
              className="space-y-6"
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formDta.name} 
                  onChange={(e) => setFormData({...formDta, name: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Lucas Nleng..."
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
                
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  name="email"
                  value={formDta.email} 
                  onChange={(e) => setFormData({...formDta, email: e.target.value})}
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="luqnleng5@gmail.com"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formDta.message} 
                  onChange={(e) => setFormData({...formDta, message: e.target.value})}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Bonjour, j'aimerais parler de… "
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "En Cours..." : "Envoyer"}
                <motion.div
                  animate={isSubmitting ? { rotate: 360 } : {}}
                  transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                >
                  <Send size={16} />
                </motion.div>
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};