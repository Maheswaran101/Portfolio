import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Tag } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects, categories } from "../data/projects";

const fade = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d } });

export default function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80, position: "relative" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div {...fade()} style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>My Work</p>
          <h1 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", marginBottom: 12 }}>
            Featured <span className="gradient-text">Projects</span>
          </h1>
          <p style={{ color: "#cbd5e1", maxWidth: 500, margin: "0 auto 28px", fontSize: 15, lineHeight: 1.7 }}>
            A curated collection of ML projects — from predictive modeling to recommendation systems.
          </p>
          <div style={{ width: 56, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#00d4ff,#a855f7)", margin: "0 auto" }} />
        </motion.div>

        {/* Category Pills */}
        <motion.div {...fade(0.1)} style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center", marginBottom: 44 }}>
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <motion.button key={c} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}
                onClick={() => setActive(c)}
                style={{
                  padding: "9px 20px", borderRadius: 30, fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", border: "none",
                  background: isActive ? "linear-gradient(135deg,#00d4ff,#a855f7)" : "rgba(255,255,255,0.04)",
                  color: isActive ? "#fff" : "#64748b",
                  outline: isActive ? "none" : "1px solid rgba(255,255,255,0.07)",
                }}>
                {c}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Project Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={active}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
            {filtered.map((p, i) => (
              <motion.div key={p.id}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="moving-border-card"
                style={{ borderRadius: 20 }}>
                <div className="moving-border-inner" style={{ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>

                {/* Thumbnail */}
                <div style={{ position: "relative", height: 190, overflow: "hidden" }}>
                  <img src={p.image} alt={p.title}
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://via.placeholder.com/400x190/0a0f1e/00d4ff?text=${encodeURIComponent(p.category)}`; }}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.08)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(2,8,23,0.9) 0%, transparent 60%)" }} />
                  {/* Category + links overlay */}
                  <div style={{ position: "absolute", top: 12, left: 12 }}>
                    <span className="chip chip-cyan">{p.category}</span>
                  </div>
                  <div style={{ position: "absolute", top: 12, right: 12, display: "flex", gap: 8 }}>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(10,15,30,0.85)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "transform 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                      <FaGithub size={14} />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(10,15,30,0.85)", border: "1px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", textDecoration: "none", transition: "transform 0.2s" }}
                      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
                      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}>
                      <ExternalLink size={13} />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 800, color: "#fff", lineHeight: 1.45, flex: 1 }}>{p.title}</h3>
                    <span style={{ fontSize: 11, color: "#334155", flexShrink: 0, marginLeft: 8, marginTop: 2 }}>{p.year}</span>
                  </div>
                  <p style={{ fontSize: 12, color: "#cbd5e1", lineHeight: 1.65, marginBottom: 16, flex: 1 }}>{p.description}</p>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                    {p.tags.map((t) => (
                      <span key={t} className="chip chip-purple">{t}</span>
                    ))}
                  </div>

                  {/* Role */}
                  <div style={{ display: "flex", alignItems: "center", gap: 6, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                    <Tag size={11} style={{ color: "#334155" }} />
                    <span style={{ fontSize: 11, color: "#334155", fontWeight: 500 }}>{p.role.join(" · ")}</span>
                  </div>
                </div>

                {/* Bottom gradient bar */}
                <div style={{ height: 3, background: "linear-gradient(90deg,#00d4ff,#a855f7)", borderRadius: "0 0 20px 20px" }} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* GitHub CTA */}
        <motion.div {...fade(0.3)} style={{ marginTop: 64, padding: "48px 36px", borderRadius: 24, background: "linear-gradient(135deg,rgba(0,212,255,0.06),rgba(168,85,247,0.06))", border: "1px solid rgba(0,212,255,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: 36, marginBottom: 12 }}>⚡</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 8 }}>
            More projects on <span className="gradient-text">GitHub</span>
          </h3>
          <p style={{ color: "#cbd5e1", fontSize: 14, marginBottom: 24 }}>I love to solve business problems & uncover hidden data stories</p>
          <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
            href="https://github.com/Maheswaran101" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 32px", borderRadius: 30, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
            <FaGithub size={16} /> View GitHub Profile
          </motion.a>
        </motion.div>

      </div>
      </div>
    </div>
  );
}
