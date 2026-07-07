import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Download, Briefcase, GraduationCap } from "lucide-react";

type TimelineItem = { year: string; title: string; org: string; location: string; desc: string; bullets: string[]; type: "work" | "edu" };

const experience: TimelineItem[] = [
  {
    year: "2025 — 2026",
    title: "Machine Learning Engineer",
    org: "Onedata Software Solutions",
    location: "Coimbatore, Tamil Nadu",
    desc: "Building end-to-end ML pipelines and deploying machine learning models into production.",
    bullets: [
      "Developing scalable ML pipelines and optimizing model performance for real-world business problems",
      "Building data-driven dashboards and reports using Python & visualization tools to support decision-making",
      "End-to-end data workflows: cleaning, analysis, insights generation & stakeholder presentation",
    ],
    type: "work",
  },
  {
    year: "Dec 2025 — Feb 2026",
    title: "Business Analyst",
    org: "Uplogic Technology",
    location: "Madurai, Tamil Nadu",
    desc: "Gathering business requirements and translating them into data-driven analytical solutions.",
    bullets: [
      "Collaborated with stakeholders to define project requirements and KPIs",
      "Analyzed business processes and recommended data-centric improvements",
      "Facilitated communication between technical and non-technical teams for smooth delivery",
    ],
    type: "work",
  },
  {
    year: "2025",
    title: "Cognitive Fatigue Prediction System",
    org: "Self-Initiated Project",
    location: "Remote",
    desc: "Developed an end-to-end ML system to predict user cognitive fatigue from session behavior patterns.",
    bullets: [
      "Trained classification models using session-level behavioral features to predict fatigue levels",
      "Applied SHAP explainability for transparent and trustworthy model predictions",
      "Deployed interactive Streamlit dashboard for real-time insights and feature impact visualization",
    ],
    type: "work",
  },
  {
    year: "Oct 2024 — Nov 2024",
    title: "Data Analyst Trainee",
    org: "Medtoureasy",
    location: "Madurai, Tamil Nadu",
    desc: "Designed end-to-end ETL pipelines and automated data validation workflows.",
    bullets: [
      "Designed end-to-end ETL pipelines using Python (Pandas) to ingest and validate data from 4 sources across 10,000+ records",
      "Built automated data validation workflows that flagged anomalies in clinical records, cutting erroneous entries by ~20%",
      "Developed 3 Power BI dashboards monitoring 8+ operational KPIs with automated refresh, reducing manual reporting effort by 50%",
      "Redesigned flat schema into a normalized data model, improving SQL query performance by ~30%"
    ],
    type: "work",
  },
];

const education: TimelineItem[] = [
  {
    year: "May 2025 - Nov 2025",
    title: "Master Program in Data Science & AI",
    org: "FITA Academy",
    location: "Madurai, Tamil Nadu",
    desc: "Completed with distinction — comprehensive program covering the full ML stack.",
    bullets: ["Machine Learning & Deep Learning", "NLP & Computer Vision", "Data Engineering & Cloud"],
    type: "edu",
  },
  {
    year: "2022 — 2025",
    title: "Bachelor of Science in Physics",
    org: "Thiagarajar College",
    location: "Madurai, Tamil Nadu",
    desc: "CGPA: 6.4 — Strong mathematical and analytical foundation.",
    bullets: ["Statistical Analysis & Probability", "Research Methodology", "Problem Solving & Critical Thinking"],
    type: "edu",
  },
];

function TCard({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const isWork = item.type === "work";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ position: "relative", paddingLeft: 32, marginBottom: 28 }}
    >
      <div className="timeline-dot" />
      <div className="moving-border-card" style={{ borderRadius: 18 }}>
        <div className="moving-border-inner" style={{ padding: "24px 26px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "space-between", marginBottom: 10 }}>
          <div>
            <span style={{ display: "block", fontSize: 11, fontWeight: 700, color: "#00d4ff", letterSpacing: "1px", textTransform: "uppercase", marginBottom: 4 }}>{item.year}</span>
            <h3 style={{ fontSize: 17, fontWeight: 800, color: "#fff", marginBottom: 3 }}>{item.title}</h3>
            <p style={{ fontSize: 13, color: "#cbd5e1", fontWeight: 500 }}>{item.org} · {item.location}</p>
          </div>
          <span className={`chip ${isWork ? "chip-cyan" : "chip-purple"}`} style={{ height: "fit-content", marginTop: 4 }}>
            {isWork ? <Briefcase size={10} /> : <GraduationCap size={10} />}
            {isWork ? "Work" : "Education"}
          </span>
        </div>
        <p style={{ fontSize: 13, color: "#94a3b8", lineHeight: 1.6, marginBottom: 12 }}>{item.desc}</p>
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
          {item.bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: 8, fontSize: 12, color: "#cbd5e1", alignItems: "flex-start" }}>
              <span style={{ color: "#00d4ff", flexShrink: 0, marginTop: 3 }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
        </div>
      </div>
    </motion.div>
  );
}

const fade = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d } });

export default function Resume() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80, position: "relative" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px" }}>

          {/* Header */}
          <motion.div {...fade()} style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>My Journey</p>
            <h1 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", marginBottom: 14 }}>
              Resume & <span className="gradient-text">Timeline</span>
            </h1>
            <p style={{ color: "#cbd5e1", fontSize: 15, maxWidth: 520, margin: "0 auto 28px", lineHeight: 1.7 }}>
              Results-driven ML Engineer with practical experience applying data-driven algorithms to solve real-world problems.
            </p>
            <div style={{ width: 56, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#00d4ff,#a855f7)", margin: "0 auto 32px" }} />
            {/* Download CTA */}
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="https://docs.google.com/document/d/1uL5365_66oHX_aeEatipu3y7hL1gJCajaQM8K52GW7I/export?format=pdf"
              target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 30px", borderRadius: 30, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              <Download size={16} /> Download Resume
            </motion.a>
          </motion.div>

          {/* Experience */}
          <div style={{ marginBottom: 52 }}>
            <motion.div {...fade(0.1)} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(0,212,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Briefcase size={18} style={{ color: "#00d4ff" }} />
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Experience</h2>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(0,212,255,0.3),transparent)" }} />
            </motion.div>
            <div className="timeline-line">
              {experience.map((e, i) => <TCard key={e.title} item={e} index={i} />)}
            </div>
          </div>

          {/* Education */}
          <div style={{ marginBottom: 52 }}>
            <motion.div {...fade(0.15)} style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(168,85,247,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <GraduationCap size={18} style={{ color: "#a855f7" }} />
              </div>
              <h2 style={{ fontSize: 22, fontWeight: 800, color: "#fff" }}>Education</h2>
              <div style={{ flex: 1, height: 1, background: "linear-gradient(90deg,rgba(168,85,247,0.3),transparent)" }} />
            </motion.div>
            <div className="timeline-line" style={{ borderColor: "rgba(168,85,247,0.15)" }}>
              {education.map((e, i) => <TCard key={e.title} item={e} index={i} />)}
            </div>
          </div>

          {/* Certifications Banner */}
          <motion.div {...fade(0.2)}
            style={{ padding: "40px 36px", borderRadius: 24, background: "linear-gradient(135deg,rgba(0,212,255,0.06),rgba(168,85,247,0.06))", border: "1px solid rgba(0,212,255,0.15)", textAlign: "center" }}>
            <div className="gradient-text" style={{ fontSize: 52, fontWeight: 900, lineHeight: 1 }}>10+</div>
            <div style={{ color: "#94a3b8", fontWeight: 600, fontSize: 15, margin: "8px 0 20px" }}>Licenses & Certifications Completed</div>
            <a href="https://www.linkedin.com/in/maheswaranrm1/" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", padding: "11px 26px", borderRadius: 30, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontWeight: 700, fontSize: 13, textDecoration: "none" }}>
              View on LinkedIn →
            </a>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
