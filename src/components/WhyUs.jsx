import { useReveal } from "../hooks";
import { WHY } from "../data/content";

export default function WhyUs() {
  const [ref, vis] = useReveal();

  return (
    <section id="why" style={{
      padding: "clamp(12px, 3vw, 48px) 24px",
      background: "var(--warm-bg)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto", position: "relative" }}>
        <div style={{ marginBottom: 36 }} className={`reveal ${vis ? 'reveal-active' : ''}`}>
          <h2 className="reveal-delay-1" style={{
            fontFamily: "var(--serif)",
            fontWeight: 800,
            fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
            letterSpacing: "-0.02em",
            color: "var(--ice-brown)",
            lineHeight: 1.1
          }}>
            Purity in<br /><span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ice-pink)" }}>Every Promise</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 32 }}>
          {WHY.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.t} className={`wc reveal reveal-delay-${(i % 3) + 1} ${vis ? "reveal-active" : ""}`} style={{
                textAlign: "left",
                background: "var(--ice-white)",
                borderRadius: "24px",
                padding: "32px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.02)"
              }}>
                <div style={{ display: "block", marginBottom: 20, color: "var(--ice-pink)" }}>
                  <Icon size={36} strokeWidth={1.5} />
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.25rem", color: "var(--ice-brown)", marginBottom: 12 }}>{p.t}</h3>
                <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.95rem", color: "rgba(60,47,47,0.7)", lineHeight: 1.7 }}>{p.b}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
