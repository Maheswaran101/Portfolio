import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { skills, tools } from "../data/skills";
import { MapPin, Briefcase, GraduationCap, Heart, CheckCircle2 } from "lucide-react";

/* ── Animated Skill Bar ── */
function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} style={{ marginBottom: 18 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7, alignItems: "center" }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: "#cbd5e1" }}>{name}</span>
        <span style={{ fontSize: 12, fontWeight: 700, color: "#00d4ff" }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay: index * 0.06 }}
        />
      </div>
    </div>
  );
}

const fade = (delay = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay } });

const infoCards = [
  { icon: <Briefcase size={16} />, label: "Current Role", value: "Machine Learning Engineer" },
  { icon: <MapPin size={16} />, label: "Location", value: "Coimbatore, Tamil Nadu, India" },
  { icon: <GraduationCap size={16} />, label: "Education", value: "B.Sc. Physics — Thiagarajar College" },
  { icon: <Heart size={16} />, label: "Interests", value: "AI Research · Traveling · Music" },
];

const currently = [
  "Large Language Models (LLMs) & RAG pipelines",
  "MLOps & production deployment with FastAPI + Docker",
  "Real-time data streaming with Apache Kafka",
  "Reinforcement Learning for decision systems",
];

export default function About() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80, position: "relative" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div {...fade(0)} style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>Get to know me</p>
          <h1 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, color: "#fff", marginBottom: 8, letterSpacing: "-0.5px" }}>
            About <span className="gradient-text">Me</span>
          </h1>
          <div style={{ width: 56, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#00d4ff,#a855f7)", margin: "0 auto" }} />
        </motion.div>

        {/* Main grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 48, alignItems: "start" }}>

          {/* Left column */}
          <div>
            {/* Profile image */}
            <motion.div {...fade(0.1)} style={{ display: "flex", justifyContent: "center", marginBottom: 36 }}>
              <div className="float-anim" style={{ position: "relative", width: 220, height: 220 }}>
                <div style={{ position: "absolute", inset: -3, borderRadius: 24, background: "linear-gradient(135deg,#00d4ff,#a855f7)", opacity: 0.4 }} />
                <img
                  src="/images/about-me.png"
                  alt="Maheswaran RM"
                  onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Maheswaran+RM&background=0a0f1e&color=00d4ff&size=220&bold=true&font-size=0.35`; }}
                  style={{ position: "relative", width: "100%", height: "100%", objectFit: "cover", borderRadius: 22, border: "2px solid rgba(0,212,255,0.3)" }}
                />
                <div style={{ position: "absolute", bottom: -10, right: -10, padding: "6px 14px", borderRadius: 20, background: "rgba(10,15,30,0.9)", border: "1px solid rgba(34,197,94,0.4)", fontSize: 12, fontWeight: 700, color: "#22c55e", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
                  Open to Work
                </div>
              </div>
            </motion.div>

            {/* Quick info */}
            {infoCards.map((card, i) => (
              <motion.div key={card.label} {...fade(0.15 + i * 0.07)}
                className="glow-card glass"
                style={{ borderRadius: 14, padding: "14px 18px", marginBottom: 12, display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(0,212,255,0.1)", color: "#00d4ff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  {card.icon}
                </div>
                <div>
                  <p style={{ fontSize: 11, color: "#cbd5e1", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 2 }}>{card.label}</p>
                  <p style={{ fontSize: 13, color: "#e2e8f0", fontWeight: 600 }}>{card.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Availability chips */}
            <motion.div {...fade(0.5)} style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 20 }}>
              {["Freelance", "Full-time", "Collaboration"].map((b) => (
                <span key={b} className="chip chip-cyan">{b}</span>
              ))}
            </motion.div>

            {/* Philosophy / Mission */}
            <motion.div {...fade(0.6)} style={{ marginTop: 40, padding: 24, borderRadius: 16, background: "rgba(0,212,255,0.03)", borderLeft: "4px solid #00d4ff" }}>
              <p style={{ color: "#e2e8f0", fontSize: 14, lineHeight: 1.7, fontStyle: "italic" }}>
                "I believe in the power of data to tell hidden stories and solve complex problems. My goal is to build intelligent systems that don't just predict the future, but help shape it for the better."
              </p>
            </motion.div>

            {/* Core Focus */}
            <motion.div {...fade(0.7)} style={{ marginTop: 24, padding: "24px 24px", borderRadius: 16, background: "rgba(168,85,247,0.03)", borderLeft: "4px solid #a855f7" }}>
              <h3 style={{ color: "#fff", fontSize: 16, fontWeight: 700, marginBottom: 12 }}>My Core Focus</h3>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7, marginBottom: 10 }}>
                I specialize in translating raw data into actionable business insights. My daily work revolves around training scalable models, optimizing neural networks, and deploying AI into production environments.
              </p>
              <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.7 }}>
                Whether it's building deep learning pipelines, NLP systems, or predictive algorithms, I thrive on the edge of innovation where raw engineering meets real-world value.
              </p>
            </motion.div>
          </div>

          {/* Right column */}
          <div>
            {/* Bio */}
            <motion.div {...fade(0.2)} style={{ marginBottom: 36 }}>
              <h2 style={{ fontSize: 24, fontWeight: 800, color: "#fff", marginBottom: 16 }}>Who I Am</h2>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 14, fontSize: 15 }}>
                ML Engineer at <span style={{ color: "#00d4ff", fontWeight: 700 }}>Onedata Software Solutions</span>, Coimbatore —
                building end-to-end machine learning pipelines and deploying production-ready AI systems.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, marginBottom: 14, fontSize: 15 }}>
                I specialize in developing interpretable ML models using Python, scikit-learn, and SHAP, with hands-on experience in real-world projects ranging from cognitive fatigue prediction to Netflix-scale recommendation systems.
              </p>
              <p style={{ color: "#94a3b8", lineHeight: 1.8, fontSize: 15 }}>
                Holding a strong academic background in Physics from Thiagarajar College and a Master Program in Data Science & AI from FITA Academy — I bridge the gap between scientific thinking and practical ML engineering.
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div {...fade(0.3)}>
              <h3 style={{ fontSize: 18, fontWeight: 800, color: "#fff", marginBottom: 20 }}>Technical Skills</h3>
              {skills.map((s, i) => <SkillBar key={s.name} name={s.name} level={s.level} index={i} />)}
            </motion.div>
          </div>
        </div>

        {/* Tools Grid */}
        <motion.div {...fade(0.3)} style={{ marginTop: 72 }}>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: "#fff", textAlign: "center", marginBottom: 8 }}>
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <p style={{ color: "#cbd5e1", textAlign: "center", marginBottom: 36, fontSize: 14 }}>Technologies I use in my day-to-day work</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(110px, 1fr))", gap: 14 }}>
            {tools.map((t, i) => (
              <motion.div key={t.name}
                initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.08, y: -4 }}
                className="moving-border-card"
                style={{ borderRadius: 16 }}>
                <div className="moving-border-inner" style={{ padding: "18px 10px", textAlign: "center" }}>
                  <div style={{ fontSize: 30, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ fontSize: 11, fontWeight: 700, color: "#cbd5e1", letterSpacing: "0.3px" }}>{t.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Currently Exploring */}
        <motion.div {...fade(0.2)} style={{ marginTop: 56, padding: 36, borderRadius: 24, background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.12)" }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 20 }}>🔭 Currently Exploring</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {currently.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", borderRadius: 12, background: "rgba(255,255,255,0.03)" }}>
                <CheckCircle2 size={15} style={{ color: "#00d4ff", flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
      </div>
    </div>
  );
}
