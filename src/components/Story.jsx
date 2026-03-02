import { useReveal } from "../hooks";

export default function Story() {
  const [ref, vis] = useReveal();
  const cards = [
    { title: "Purest Dairy", desc: "Sourced daily from our private farms in Ratlam.", icon: "🥛" },
    { title: "Real Extracts", desc: "No artificial flavors, just pure fruit and nut extracts.", icon: "🌿" },
    { title: "Zero Shortcuts", desc: "Slow-churned for the creamiest texture possible.", icon: "✨" },
  ];

  return (
    <section id="story" ref={ref} style={{ padding: "clamp(60px, 8vw, 100px) 24px", background: "var(--warm-bg)" }}>
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24
      }}>
        {cards.map((c, i) => (
          <div key={i} className={`reveal reveal-delay-${i + 1} ${vis ? 'reveal-active' : ''}`} style={{
            background: "rgba(166, 124, 82, 0.1)", // Subtle warm accent tint
            padding: "40px",
            borderRadius: "var(--r-lg)",
            textAlign: "left",
            border: "1px solid rgba(60, 47, 47, 0.05)"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: 20 }}>{c.icon}</div>
            <h4 style={{
              fontFamily: "var(--serif)",
              fontSize: "1.4rem",
              fontWeight: 700,
              color: "var(--warm-dark)",
              marginBottom: 12
            }}>
              {c.title}
            </h4>
            <p style={{
              fontFamily: "var(--sans)",
              fontSize: "0.95rem",
              lineHeight: 1.6,
              color: "var(--muted)"
            }}>
              {c.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
