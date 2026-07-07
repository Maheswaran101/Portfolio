import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

// Stagger variants for initial load
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: -20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollY } = useScroll();

  // Scroll animations
  const navHeight = useTransform(scrollY, [0, 50], [84, 64]);
  const navBg = useTransform(scrollY, [0, 50], ["rgba(15, 22, 41, 0)", "rgba(15, 22, 41, 0.75)"]);
  const navBorder = useTransform(scrollY, [0, 50], ["1px solid rgba(255,255,255,0)", "1px solid rgba(255,255,255,0.06)"]);
  
  // Cast to standard CSS string for webkit prefix
  const navBackdropString = useTransform(scrollY, [0, 50], ["blur(0px)", "blur(20px)"]) as any;

  // Listen for section changes from App.tsx intersection observers
  useEffect(() => {
    const handleSectionChange = (e: any) => {
      setActiveSection(e.detail);
    };
    window.addEventListener('sectionChange', handleSectionChange);
    return () => window.removeEventListener('sectionChange', handleSectionChange);
  }, []);

  const scrollToSection = (id: string) => {
    setOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 64; // Navbar height
      const elementRect = element.getBoundingClientRect().top;
      const offsetPosition = window.scrollY + elementRect - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        background: navBg,
        borderBottom: navBorder,
        backdropFilter: navBackdropString,
        WebkitBackdropFilter: navBackdropString,
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <motion.div variants={itemVariants} style={{ height: "100%", display: "flex", alignItems: "center" }}>
          <motion.div style={{ height: navHeight, display: "flex", alignItems: "center" }}>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
              <motion.div 
                whileHover={{ scale: 1.15, rotate: -10, y: -2 }}
                whileTap={{ scale: 0.9, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 12 }}
                style={{ 
                  width: 36, height: 36, 
                  borderRadius: 14, 
                  background: "linear-gradient(135deg,#00d4ff,#a855f7)", 
                  boxShadow: "0 4px 12px rgba(168,85,247,0.4), inset 0 2px 4px rgba(255,255,255,0.4)",
                  display: "flex", alignItems: "center", justifyContent: "center", 
                  fontSize: 18, fontWeight: 900, color: "#fff",
                  textShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}
              >
                M
              </motion.div>
              <span style={{ fontWeight: 800, fontSize: 17, background: "linear-gradient(135deg,#00d4ff,#a855f7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Maheswaran
              </span>
            </a>
          </motion.div>
        </motion.div>

        {/* Desktop nav */}
        <div className="desktop-only" style={{ alignItems: "center", gap: 4 }}>
          {navItems.map((item) => {
            const active = activeSection === item.id;
            return (
              <motion.div key={item.id} variants={itemVariants}>
                <a href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }} style={{ textDecoration: "none", position: "relative", padding: "8px 16px", borderRadius: 30, fontSize: 14, fontWeight: 600, color: active ? "#00d4ff" : "#94a3b8", transition: "color 0.2s", display: "block" }}>
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      style={{ position: "absolute", inset: 0, borderRadius: 30, background: "rgba(0,212,255,0.1)", border: "1px solid rgba(0,212,255,0.25)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ position: "relative", zIndex: 1 }}>{item.label}</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Hire Me CTA (Desktop) */}
        <motion.div variants={itemVariants} className="desktop-only" style={{ alignItems: "center" }}>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:mahesrmm05@gmail.com"
            className="pulse-ring"
            style={{ textDecoration: "none", padding: "9px 22px", borderRadius: 30, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontSize: 13, fontWeight: 700, letterSpacing: "0.5px", position: "relative" }}
          >
            Hire Me
          </motion.a>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button 
          variants={itemVariants}
          onClick={() => setOpen(!open)} 
          className="mobile-only" 
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "6px 10px", color: "#94a3b8", cursor: "pointer", alignItems: "center" }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </motion.button>
      </motion.div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden", borderTop: "1px solid rgba(255,255,255,0.06)", background: "rgba(15, 22, 41, 0.95)", backdropFilter: "blur(20px)" }}
            className="mobile-only"
          >
            <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a key={item.id} href={`#${item.id}`} onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                    style={{
                      textDecoration: "none", padding: "12px 16px", borderRadius: 12, fontSize: 15, fontWeight: 600,
                      color: isActive ? "#00d4ff" : "#94a3b8",
                      background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
                      transition: "all 0.2s"
                    }}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a href="mailto:mahesrmm05@gmail.com" className="pulse-ring" style={{ marginTop: 12, padding: "12px 16px", borderRadius: 12, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontSize: 15, fontWeight: 700, textAlign: "center", textDecoration: "none" }}>
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
