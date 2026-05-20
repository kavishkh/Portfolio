import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";

const EMAIL = "Kavishkhanna06@gmail.com";

const socialLinks = [
  { icon: Github, label: "GitHub", link: "https://github.com/kavishkh", delay: 0.9 },
  { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com", delay: 1.0 },
  { icon: Twitter, label: "Twitter", link: "https://twitter.com", delay: 1.1 },
];

const Contact = () => {
  const [emailPopup, setEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6">
        <div>
          <h2 className="mb-10 text-center text-3xl font-bold text-light-grey sm:mb-16 sm:text-4xl lg:text-5xl">Initialize Contact</h2>

          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              className="rounded-lg border border-primary/30 bg-card/80 p-4 font-mono backdrop-blur-sm sm:p-6 lg:p-8"
            >
              <div className="mb-6 flex min-w-0 items-center gap-2 border-b border-primary/30 pb-4">
                <div className="flex shrink-0 gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive" />
                  <div className="h-3 w-3 rounded-full bg-accent" />
                  <div className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <span className="ml-2 truncate text-xs text-primary sm:ml-4 sm:text-base">contact@kavishkhanna.space</span>
              </div>

              <div className="space-y-4 break-words text-sm text-primary sm:text-base">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="text-accent">kavish@terminal</span>
                  <span className="text-secondary">:</span>
                  <span className="text-primary">~$</span>
                  <span className="ml-2 inline-block">status --connection</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.4 }}
                  className="text-foreground sm:ml-4"
                >
                  OK: All systems operational
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
                  <span className="ml-2 inline-block">list --social-channels</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.8 }}
                  className="ml-0 mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 md:ml-4 md:grid-cols-4 md:gap-4"
                >
                  <div className="relative">
                    <motion.button
                      onClick={() => setEmailPopup((v) => !v)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.04 }}
                      className="flex w-full items-center gap-2 rounded-lg border border-primary/20 bg-muted/30 p-3 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Mail className="h-5 w-5 shrink-0" />
                      <span className="text-sm">Email</span>
                    </motion.button>

                    <AnimatePresence>
                      {emailPopup && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full z-50 mt-2 w-[min(22rem,calc(100vw-3rem))] rounded-lg border border-primary/40 bg-card p-3 shadow-lg shadow-primary/10"
                        >
                          <p className="mb-1.5 text-xs text-foreground/60">// my email</p>
                          <div className="flex min-w-0 items-center gap-2">
                            <span className="min-w-0 break-all text-sm text-primary">{EMAIL}</span>
                            <motion.button
                              onClick={handleCopy}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              className="shrink-0 text-foreground/50 transition-colors hover:text-primary"
                              title="Copy"
                            >
                              {copied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                            </motion.button>
                          </div>
                          {copied && <p className="mt-1 text-xs text-green-400">copied!</p>}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: social.delay }}
                      whileHover={{ scale: 1.04 }}
                      className="flex items-center gap-2 rounded-lg border border-primary/20 bg-muted/30 p-3 text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <social.icon className="h-5 w-5 shrink-0" />
                      <span className="text-sm">{social.label}</span>
                    </motion.a>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.3 }}
                  className="mt-4 flex flex-wrap items-center"
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
              className="mt-8 text-center text-sm text-foreground sm:text-base"
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
