import { useEffect, useState, useRef } from "react";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/Navbar";
import LivingBackground from "./components/LivingBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const sections = [
  { id: "home", bg: "/images/bg_1.jpg" },
  { id: "about", bg: "/images/bg_about.png" },
  { id: "resume", bg: "/images/bg_resume.png" },
  { id: "projects", bg: "/images/bg_projects.png" },
  { id: "contact", bg: "/images/bg_contact.png" },
];

export default function App() {
  const [currentBg, setCurrentBg] = useState(sections[0].bg);
  const activeIdRef = useRef(sections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const triggerOffset = windowHeight / 3; // Top 1/3 of screen dictates active section
      
      let activeId = sections[0].id;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= triggerOffset && rect.bottom > triggerOffset) {
            activeId = section.id;
          }
        }
      }
      
      // Find matching background
      const newBg = sections.find(s => s.id === activeId)?.bg || sections[0].bg;
      setCurrentBg(prev => {
        if (prev !== newBg) return newBg;
        return prev;
      });
      
      // Dispatch event to update Navbar active tab ONLY if changed to prevent lag
      if (activeIdRef.current !== activeId) {
        activeIdRef.current = activeId;
        window.dispatchEvent(new CustomEvent('sectionChange', { detail: activeId }));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initially
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", color: "#f8fafc", position: "relative" }}>
        
        {/* Global Living Background */}
        <LivingBackground image={currentBg} id="global-bg" />

        <Navbar />

        {/* Scrollable Content */}
        <main style={{ position: "relative", zIndex: 10 }}>
          <section id="home" style={{ minHeight: "100vh", position: "relative" }}>
            <Home />
          </section>
          
          <section id="about" style={{ minHeight: "100vh", position: "relative" }}>
            <About />
          </section>
          
          <section id="resume" style={{ minHeight: "100vh", position: "relative" }}>
            <Resume />
          </section>
          
          <section id="projects" style={{ minHeight: "100vh", position: "relative" }}>
            <Projects />
          </section>
          
          <section id="contact" style={{ minHeight: "100vh", position: "relative" }}>
            <Contact />
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}
