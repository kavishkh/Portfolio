import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Copy, Check } from "lucide-react";

const EMAIL = "Kavishkhanna06@gmail.com";

const Contact = () => {
  const [emailPopup, setEmailPopup] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-transparent border-b ${
      focused === field ? "border-primary" : "border-primary/30"
    } text-foreground placeholder-foreground/30 outline-none py-1 transition-colors duration-200 font-mono text-sm`;

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
              {/* Terminal title bar */}
              <div className="flex items-center gap-2 mb-6 border-b border-primary/30 pb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-destructive" />
                  <div className="w-3 h-3 rounded-full bg-accent" />
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <span className="text-primary ml-4">contact@kavishkhanna.space</span>
              </div>

              <div className="space-y-4 text-primary">
                {/* Status line */}
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

                {/* Social links */}
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
                  {/* Email button with popup */}
                  <div className="relative">
                    <motion.button
                      onClick={() => setEmailPopup((v) => !v)}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: 0.8 }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-3 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/50 w-full"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="text-sm">Email</span>
                    </motion.button>

                    <AnimatePresence>
                      {emailPopup && (
                        <motion.div
                          initial={{ opacity: 0, y: 8, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 8, scale: 0.95 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full mt-2 left-0 z-50 bg-card border border-primary/40 rounded-lg p-3 shadow-lg shadow-primary/10 min-w-max"
                        >
                          <p className="text-xs text-foreground/60 mb-1.5 font-mono">// my email</p>
                          <div className="flex items-center gap-2">
                            <span className="text-primary text-sm font-mono">{EMAIL}</span>
                            <motion.button
                              onClick={handleCopy}
                              whileHover={{ scale: 1.15 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-foreground/50 hover:text-primary transition-colors"
                              title="Copy"
                            >
                              {copied
                                ? <Check className="w-4 h-4 text-green-400" />
                                : <Copy className="w-4 h-4" />
                              }
                            </motion.button>
                          </div>
                          {copied && (
                            <p className="text-xs text-green-400 mt-1 font-mono">copied!</p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Other social links */}
                  {[
                    { icon: Github,   label: "GitHub",   link: "https://github.com/kavishkh",  delay: 0.9 },
                    { icon: Linkedin, label: "LinkedIn", link: "https://linkedin.com",          delay: 1.0 },
                    { icon: Twitter,  label: "Twitter",  link: "https://twitter.com",           delay: 1.1 },
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: social.delay }}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center gap-2 text-foreground hover:text-primary transition-colors p-3 bg-muted/30 rounded-lg border border-primary/20 hover:border-primary/50"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-sm">{social.label}</span>
                    </motion.a>
                  ))}
                </motion.div>



                {/* Blinking cursor */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: 1.3 }}
                  className="mt-4 flex items-center"
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
