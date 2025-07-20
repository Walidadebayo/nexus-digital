import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // You can add actual submission logic here
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background" id="contact">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We'd love to hear from you! Reach out with questions, feedback, or just to say hello.
          </p>
        </motion.div>
        <Card className="relative rounded-[30px] shadow-2xl border-0 bg-gradient-to-br from-background/90 to-accent/10">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold mb-2">Send a Message</CardTitle>
            <p className="text-muted-foreground">Fill out the form and our team will get back to you soon.</p>
          </CardHeader>
          <CardContent>
            {!submitted ? (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="rounded-full px-5 py-3 border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="rounded-full px-5 py-3 border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="rounded-2xl w-full px-5 py-3 border border-border bg-background/60 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white flex items-center justify-center gap-2 shadow-lg"
                  disabled={submitted}
                >
                  <Send className="w-4 h-4" />
                  {submitted ? "Message Sent!" : "Send Message"}
                </Button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
                className="flex flex-col items-center justify-center py-16"
              >
                <motion.div
                  className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-2xl mb-6"
                  initial={{ scale: 0.7, rotate: -20 }}
                  animate={{ scale: [1, 1.1, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Send className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-4 text-center max-w-md">
                  Thank you for reaching out. Our team will get back to you soon.
                  <br />
                  Have a wonderful day!
                </p>
                <motion.div
                  className="w-32 h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-lg mt-4"
                  initial={{ scaleX: 0.7 }}
                  animate={{ scaleX: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            )}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-6 h-6 text-blue-500" />
                <span className="text-sm text-muted-foreground">hello@nexusdigital.com</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Phone className="w-6 h-6 text-green-500" />
                <span className="text-sm text-muted-foreground">+1 (675) 345-7836</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <MapPin className="w-6 h-6 text-purple-500" />
                <span className="text-sm text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
