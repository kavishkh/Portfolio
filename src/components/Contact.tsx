import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const [terminalText, setTerminalText] = useState("$ ");

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <div>
          <h2 className="text-5xl font-bold text-light-grey mb-16 text-center">Initialize Contact</h2>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="bg-card/80 backdrop-blur-sm border border-primary/30 rounded-xl p-8 font-mono"
            >
              <div className="flex items-center gap-2 mb-6 border-b border-primary/30 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
                <span className="text-primary ml-4">contact@kavishkhanna.space</span>
              </div>

              <div className="space-y-4 text-primary">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-accent">kavish@terminal</span>
                  <span className="text-secondary">:</span>
                  <span className="text-primary">~$</span>
                  <span className="ml-2">status --connection</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="text-foreground ml-4"
                >
                  ✓ All systems operational
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.6 }}
                  className="mt-6"
                >
                  <span className="text-accent">kavish@terminal</span>
                  <span className="text-secondary">:</span>
                  <span className="text-primary">~$</span>
                  <span className="ml-2">list --social-channels</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.8 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 ml-4"
                >
                  {[
                    { icon: Mail, label: "Email", link: "Kavishkhanna06@gmail.com" },
                    { icon: Github, label: "GitHub", link: "https://github.com/kavishkh" },
                    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com" },
                    { icon: Twitter, label: "Twitter", link: "https://twitter.com" },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.1, color: "hsl(180 100% 50%)" }}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-3 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/50"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm">{social.label}</span>
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.2 }}
                  className="mt-8 flex items-center"
                >
                  <span className="text-accent">kavish@terminal</span>
                  <span className="text-secondary">:</span>
                  <span className="text-primary">~$</span>
                  <span className="ml-2 animate-pulse">_</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ delay: 1.4 }}
              className="text-center text-foreground mt-8"
            >
              // Ready to collaborate on something extraordinary? Let's connect.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
