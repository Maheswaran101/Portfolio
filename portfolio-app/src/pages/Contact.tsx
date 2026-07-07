import { motion } from "framer-motion";
import { MapPin, Phone, Mail, FileDown } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";

const fade = (d = 0) => ({ initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: d } });

const info = [
  { icon: <MapPin size={20} />, title: "Location", value: "Coimbatore, Tamil Nadu, India", href: null },
  { icon: <Phone size={20} />, title: "Phone", value: "+91 9677571902", href: "tel:+919677571902" },
  { icon: <Mail size={20} />, title: "Email", value: "mahesrmm05@gmail.com", href: "mailto:mahesrmm05@gmail.com" },
  { icon: <FileDown size={20} />, title: "Resume", value: "Download PDF", href: "https://docs.google.com/document/d/1uL5365_66oHX_aeEatipu3y7hL1gJCajaQM8K52GW7I/export?format=pdf" },
];

const socials = [
  { icon: <FaLinkedin size={22} />, label: "LinkedIn", href: "https://www.linkedin.com/in/maheswaranrm1", color: "#0a66c2" },
  { icon: <FaGithub size={22} />, label: "GitHub", href: "https://github.com/Maheswaran101", color: "#e2e8f0" },
  { icon: <FaInstagram size={22} />, label: "Instagram", href: "https://www.instagram.com/its_me_mahes05/", color: "#e1306c" },
  { icon: <FaFacebook size={22} />, label: "Facebook", href: "http://facebook.com/mahes.prathap.3", color: "#1877f2" },
  { icon: <SiKaggle size={22} />, label: "Kaggle", href: "https://www.kaggle.com/", color: "#20beff" },
];

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: 90, paddingBottom: 80, position: "relative" }}>
      <div style={{ position: "relative", zIndex: 10 }}>
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div {...fade()} style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ color: "#00d4ff", fontSize: 12, fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: 12 }}>Get In Touch</p>
          <h1 style={{ fontSize: "clamp(36px,6vw,60px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.5px", marginBottom: 12 }}>
            Contact <span className="gradient-text">Me</span>
          </h1>
          <p style={{ color: "#cbd5e1", maxWidth: 480, margin: "0 auto 28px", fontSize: 15, lineHeight: 1.7 }}>
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <div style={{ width: 56, height: 3, borderRadius: 2, background: "linear-gradient(90deg,#00d4ff,#a855f7)", margin: "0 auto 28px" }} />

          {/* Availability badge */}
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3 }}>
            <span className="pulse-ring" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 22px", borderRadius: 30, background: "rgba(34,197,94,0.07)", border: "1px solid rgba(34,197,94,0.25)", color: "#22c55e", fontSize: 13, fontWeight: 700 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", flexShrink: 0 }} />
              Available for Freelance & Full-time Opportunities
            </span>
          </motion.div>
        </motion.div>

        {/* Contact Info Grid */}
        <motion.div {...fade(0.1)}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16, marginBottom: 36 }}>
          {info.map((c, i) => (
            <motion.div key={c.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: 0.1 + i * 0.08 }}
              whileHover={{ y: -5 }}
              className="glass glow-card"
              style={{ borderRadius: 20, padding: "26px 22px", textAlign: "center" }}>
              <div style={{ width: 50, height: 50, borderRadius: 14, background: "rgba(0,212,255,0.1)", color: "#00d4ff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                {c.icon}
              </div>
              <h3 style={{ fontSize: 13, fontWeight: 800, color: "#fff", marginBottom: 8 }}>{c.title}</h3>
              {c.href ? (
                <a href={c.href} target={c.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                  style={{ fontSize: 12, color: "#cbd5e1", wordBreak: "break-all", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#00d4ff")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#64748b")}>
                  {c.value}
                </a>
              ) : (
                <p style={{ fontSize: 12, color: "#cbd5e1" }}>{c.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div {...fade(0.25)} className="glass"
          style={{ borderRadius: 24, padding: "36px", marginBottom: 28, textAlign: "center" }}>
          <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fff", marginBottom: 8 }}>Find me on</h3>
          <p style={{ color: "#cbd5e1", fontSize: 14, marginBottom: 28 }}>Let's connect and build something great together.</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {socials.map((s) => (
              <motion.a key={s.label} whileHover={{ scale: 1.1, y: -4 }} whileTap={{ scale: 0.95 }}
                href={s.href} target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 22px", borderRadius: 14, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#94a3b8", textDecoration: "none", fontSize: 14, fontWeight: 600, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = s.color + "50"; e.currentTarget.style.color = "#fff"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "#94a3b8"; }}>
                <span style={{ color: s.color }}>{s.icon}</span>
                {s.label}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Let's work together */}
        <motion.div {...fade(0.3)}
          style={{ padding: "48px 36px", borderRadius: 24, background: "linear-gradient(135deg,rgba(0,212,255,0.06),rgba(168,85,247,0.06))", border: "1px solid rgba(0,212,255,0.15)", textAlign: "center" }}>
          <div style={{ fontSize: 42, marginBottom: 14 }}>🚀</div>
          <h3 style={{ fontSize: 26, fontWeight: 900, color: "#fff", marginBottom: 10 }}>Let's Work Together!</h3>
          <p style={{ color: "#cbd5e1", fontSize: 14, maxWidth: 440, margin: "0 auto 28px", lineHeight: 1.7 }}>
            Whether it's a data science project, ML deployment, or just a chat about AI — I'd love to hear from you.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="mailto:mahesrmm05@gmail.com"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 30px", borderRadius: 30, background: "linear-gradient(135deg,#00d4ff,#a855f7)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none" }}>
              <Mail size={16} /> Send an Email
            </motion.a>
            <motion.a whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              href="https://www.linkedin.com/in/maheswaranrm1/" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 30, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.12)", color: "#94a3b8", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              <FaLinkedin size={16} style={{ color: "#0a66c2" }} /> Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <div style={{ marginTop: 48, textAlign: "center", color: "#cbd5e1", fontSize: 13 }}>
          <p style={{ fontStyle: "italic", letterSpacing: "0.5px" }}>"Turning data into intelligence, and intelligence into <span style={{ color: "#00d4ff", fontWeight: 600 }}>impact</span>."</p>
          <p style={{ marginTop: 4 }}>© 2025 Maheswaran R M · All rights reserved</p>
        </div>

      </div>
      </div>
    </div>
  );
}
