import { useEffect } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/Header";
import Hero from "./components/Hero";
import UpcomingEvents from "./components/UpcomingEvents";
import TeamSpotlight from "./components/TeamSpotlight";
import QuickAccess from "./components/QuickAccess";
import NewsAnnouncements from "./components/NewsAnnouncements";
import ProductivitySnapshot from "./components/ProductivitySnapshot";
import Footer from "./components/Footer";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import ContactSection from "./components/ContactSection";

gsap.registerPlugin(ScrollTrigger);

function App() {

  useEffect(() => {
    // Initialize GSAP animations
    gsap.fromTo(
      ".fade-in",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".fade-in",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div
        className={`min-h-screen bg-background text-foreground transition-colors duration-300`}
      >
        <Header  />

        <main className="relative">
          <Hero />

          <motion.section
            className="fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <UpcomingEvents />
          </motion.section>

          <motion.section
            className="fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <TeamSpotlight />
          </motion.section>

          <motion.section
            className="fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <QuickAccess />
          </motion.section>

          <motion.section
            className="fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <NewsAnnouncements />
          </motion.section>

          <motion.section
            className="fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <ProductivitySnapshot />
          </motion.section>

          <motion.section
            className="fade-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            <ContactSection />
          </motion.section>
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
