import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, ChevronDown, Download } from "lucide-react";

const TEXTS = ["Machine Learning Engineer", "Data Scientist", "AI Enthusiast", "Problem Solver"];

function TypingEffect() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = TEXTS[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!del && displayed.length < cur.length) {
      t = setTimeout(() => setDisplayed(cur.slice(0, displayed.length + 1)), 70);
    } else if (!del && displayed.length === cur.length) {
      t = setTimeout(() => setDel(true), 1800);
    } else if (del && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else {
      setDel(false);
      setIdx((i) => (i + 1) % TEXTS.length);
    }
    return () => clearTimeout(t);
  }, [displayed, del, idx]);

  return (
    <span>
      <span className="gradient-text" style={{ fontWeight: 700 }}>{displayed}</span>
      <span style={{ color: "#00d4ff", fontWeight: 300, animation: "pulse 1s infinite" }}>|</span>
    </span>
  );
}

const STATS = [
  { value: "5+", label: "ML Projects" },
  { value: "10+", label: "Certifications" },
  { value: "1+", label: "Years Exp." },
];

export default function Home() {
  return (
    <div style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden", padding: "100px 24px 60px" }}>

      {/* Ambient glows */}
      <div style={{ position: "absolute", top: "20%", left: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 2 }} />
      <div style={{ position: "absolute", bottom: "20%", right: "15%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 2 }} />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 10, maxWidth: 760, width: "100%", textAlign: "center" }}>

        {/* Availability badge */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.6 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 18px", borderRadius: 30, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.25)", color: "#22c55e", fontSize: 11, fontWeight: 700, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: 28 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block", animation: "ping 1.5s ease-in-out infinite" }} />
            Available for Opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>
          <p style={{ color: "#94a3b8", fontSize: 16, fontWeight: 500, marginBottom: 10 }}>Hello, I'm</p>
          <h1 style={{ fontSize: "clamp(42px, 8vw, 80px)", fontWeight: 900, lineHeight: 1.05, color: "#fff", letterSpacing: "-1px", marginBottom: 16 }}>
            Maheswaran{" "}
            <span className="gradient-text glow-text">R M</span>
          </h1>
        </motion.div>

        {/* Typing */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
          <p style={{ fontSize: "clamp(18px, 3vw, 26px)", color: "#cbd5e1", marginBottom: 16, height: 40 }}>
            <TypingEffect />
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          style={{ color: "#cbd5e1", fontSize: 15, lineHeight: 1.7, maxWidth: 540, margin: "0 auto 36px", fontWeight: 400 }}>
          ML Engineer at{" "}
          <span style={{ color: "#00d4ff", fontWeight: 600 }}>Onedata Software Solutions</span>, Coimbatore —
          building end-to-end data-driven solutions, predictive models, and intelligent systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
          style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 52 }}>
          <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            onClick={() => {
              const el = document.getElementById("projects");
              if (el) {
                const offsetPosition = window.scrollY + el.getBoundingClientRect().top - 64;
                window.scrollTo({ top: offsetPosition, behavior: "smooth" });
              }
            }}
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 30, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: "pointer", letterSpacing: "0.3px" }}>
            Explore Projects <ArrowRight size={16} />
          </motion.button>

          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="https://docs.google.com/document/d/1uL5365_66oHX_aeEatipu3y7hL1gJCajaQM8K52GW7I/export?format=pdf"
            target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 28px", borderRadius: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#cbd5e1", fontSize: 14, fontWeight: 600, textDecoration: "none", cursor: "pointer" }}>
            <Download size={15} /> Resume
          </motion.a>

          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="https://github.com/Maheswaran101" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 20px", borderRadius: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            <FaGithub size={16} />
          </motion.a>

          <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            href="https://www.linkedin.com/in/maheswaranrm1/" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 8, padding: "13px 20px", borderRadius: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            <FaLinkedin size={16} />
          </motion.a>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75, duration: 0.6 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 420, margin: "0 auto" }}>
          {STATS.map((s) => (
            <div key={s.label} className="glass" style={{ borderRadius: 16, padding: "20px 12px", textAlign: "center" }}>
              <div className="gradient-text" style={{ fontSize: 28, fontWeight: 900, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#cbd5e1", fontSize: 11, fontWeight: 600, marginTop: 6, textTransform: "uppercase", letterSpacing: "0.5px" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
        style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: "#334155", cursor: "default" }}>
        <span style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase" }}>Scroll</span>
        <ChevronDown size={14} />
      </motion.div>
    </div>
  );
}
