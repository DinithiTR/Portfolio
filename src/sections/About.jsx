import {
  User,
  MapPin,
  GraduationCap,
  Code2,
  Coffee,
  Lightbulb,
} from "lucide-react";
import ProfileImg from "../assets/dinithi1.png";

const SKILLS = [
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "TypeScript",
  "Python",
  "REST APIs",
  "JWT Auth",
  "Socket.IO",
  "Docker",
  "Git",
  "Firebase",
  "Stripe API",
  "Machine Learning (Basics)",
  "Three.js / WebGL (Basics)",
  "NPM Package Development",
];

const STATS = [
  { value: "4th", label: "Year", icon: GraduationCap },
  { value: "12+", label: "Projects", icon: Code2 },
  { value: "∞", label: "Coffee Cups", icon: Coffee },
  { value: "1", label: "Goal: Graduate", icon: Lightbulb },
];

export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg-secondary)" }}>
      <div className="section-container">
        <div className="section-label">
          <User size={14} /> About Me
        </div>
        <h2 className="section-title">
          Crafting Code,
          <br />
          <span className="accent-line">Building Tomorrow</span>
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 40,
            marginTop: 48,
          }}
        >
          {/* Left: Bio */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Avatar placeholder */}
            <div
              style={{
                width: 250,
                height: 255,
                borderRadius: 20,
                background:
                  "linear-gradient(135deg, var(--accent), var(--accent-2))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "3rem",
                position: "relative",
                boxShadow: "0 8px 32px var(--glow)",
              }}
            >
              <img
                src={ProfileImg}
                alt="Dinithi Thathsara Rajapaksha"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // crop nicely
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: -4,
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "#22c55e",
                  border: "3px solid var(--bg-secondary)",
                }}
              />
            </div>

            <div>
              <h3
                style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: 6 }}
              >
                Dinithi Thathsara Rajapaksha
              </h3>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  color: "var(--text-muted)",
                  fontSize: "0.88rem",
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                <MapPin size={13} /> Gampaha, Sri Lanka
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              I'm a passionate software engineering student at Sri Lanka
              Institute of Information Technology, currently in my final year. I
              thrive at the intersection of elegant code and meaningful user
              experiences.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8 }}>
              When I'm not debugging at 2am, you'll find me exploring new
              technologies, contributing to open source, or mentoring junior
              students. I believe in writing code that not only works but tells
              a story.
            </p>

            {/* Education card */}
            <div className="card" style={{ padding: "18px 22px" }}>
              <div
                style={{ display: "flex", alignItems: "flex-start", gap: 14 }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: "var(--glow)",
                    border: "1px solid var(--border-accent)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--accent)",
                  }}
                >
                  <GraduationCap size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: "0.95rem" }}>
                    BSc. (Hons) Software Engineering
                  </div>
                  <div
                    style={{
                      color: "var(--text-muted)",
                      fontSize: "0.83rem",
                      marginTop: 2,
                    }}
                  >
                    Sri Lanka Institute of Information Technology • 2022 – 2026
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats + Skills */}
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 14,
              }}
            >
              {STATS.map(({ value, label, icon: Icon }) => (
                <div
                  key={label}
                  className="card"
                  style={{
                    padding: "20px",
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <Icon size={20} style={{ color: "var(--accent)" }} />
                  <div
                    style={{
                      fontSize: "1.8rem",
                      fontWeight: 800,
                      fontFamily: "'Syne', sans-serif",
                      color: "var(--accent)",
                    }}
                  >
                    {value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "var(--text-muted)",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div className="card">
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Tech Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card">
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  color: "var(--accent)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                Interests
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "AI-Powered Personalization",
                  "Human-Computer Interaction",
                  "Behavioral Data Analysis",
                  "Full-Stack Web Development",
                  "Developer Tools & NPM Packages",
                  "Interactive Web Experiences (3D/WebGL)",
                ].map((i) => (
                  <span
                    key={i}
                    style={{
                      padding: "5px 12px",
                      borderRadius: 999,
                      background: "var(--bg-secondary)",
                      border: "1px solid var(--border)",
                      fontSize: "0.82rem",
                      color: "var(--text-secondary)",
                    }}
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
