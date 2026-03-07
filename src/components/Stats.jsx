import { useReveal, useCounter } from "../hooks";
import { STATS } from "../data/content";

function StatNum({ target, suffix }) {
  const [ref, vis] = useReveal();
  const v = useCounter(target, vis);
  return (
    <span ref={ref} style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(2.5rem,5vw,4rem)", color: "var(--white)", letterSpacing: "-0.03em", lineHeight: 1 }}>
      {vis ? v : 0}{suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section style={{ background: "var(--warm-dark)", padding: "clamp(20px, 4vw, 40px) 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 32 }}>
        {STATS.map((s) => (
          <div key={s.label} className="stat-block" style={{ textAlign: "center", padding: "20px" }}>
            <StatNum target={s.val} suffix={s.suf} />
            <div style={{ fontFamily: "var(--sans)", fontWeight: 700, fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginTop: 12 }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
