import ScrollReveal from "./ScrollReveal";

export default function Story() {
  const cards = [
    { title: "Purest Dairy", desc: "Sourced daily from our private farms in Ratlam.", icon: "🥛" },
    { title: "Real Extracts", desc: "No artificial flavors, just pure fruit and nut extracts.", icon: "🌿" },
    { title: "Zero Shortcuts", desc: "Slow-churned for the creamiest texture possible.", icon: "✨" },
  ];

  return (
    <section id="story" style={{ padding: "clamp(8px, 5vw, 80px) 24px", background: "var(--warm-bg)" }}>
      <div style={{
        maxWidth: 1400,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 24
      }}>
        {cards.map((c, i) => (
          <ScrollReveal
            key={i}
            variant="fadeUp"
            delay={i * 0.1}
          >
            <div style={{
              background: "var(--ice-white)",
              padding: "40px",
              borderRadius: "var(--r-lg)",
              textAlign: "left",
              border: "1px solid rgba(0, 0, 0, 0.05)",
              boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
              height: "100%"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: 20 }}>{c.icon}</div>
              <h4 style={{
                fontFamily: "var(--serif)",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--ice-peach)",
                marginBottom: 12
              }}>
                {c.title}
              </h4>
              <p style={{
                fontFamily: "var(--sans)",
                fontSize: "0.95rem",
                lineHeight: 1.6,
                color: "rgba(60,47,47,0.6)"
              }}>
                {c.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

