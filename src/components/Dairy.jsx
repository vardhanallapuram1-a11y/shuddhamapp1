import { Link } from "react-router-dom";
import { useReveal } from "../hooks";
import freshMilkImg from "../assets/fresh_milk.png";
import { DAIRY } from "../data/content";

export default function Dairy() {
  const [ref, vis] = useReveal();

  return (
    <section id="dairy" ref={ref} style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: "var(--warm-bg)" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          marginBottom: 72
        }}>
          <div className={`reveal ${vis ? 'reveal-active' : ''}`}>
            <span style={{
              fontFamily: "var(--sans)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--warm-accent)",
              display: "block",
              marginBottom: 12
            }}>Pure Dairy</span>
            <h2 className="reveal-delay-1" style={{
              fontFamily: "var(--serif)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
              letterSpacing: "-0.03em",
              marginTop: 12,
              marginBottom: 24,
              color: "var(--warm-dark)",
              lineHeight: 1.1
            }}>
              Beyond<br /><span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--warm-accent)" }}>Ice Cream</span>
            </h2>
            <p className="reveal-delay-2" style={{
              fontFamily: "var(--sans)",
              fontWeight: 400,
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              marginBottom: 32
            }}>
              From probiotic-rich dahi and refreshing lassi to aromatic ghee and festive shrikhand — Shuddham's full range is made from farm-fresh, pure milk.
            </p>
            <Link to="/partnership" className="btn reveal-delay-3" style={{
              background: "var(--warm-dark)",
              color: "var(--white)",
              padding: "14px 32px",
              borderRadius: "99px",
              fontSize: "0.85rem",
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-block"
            }}>Become a Partner →</Link>
          </div>
          <div className={`reveal reveal-delay-2 ${vis ? 'reveal-active' : ''}`} style={{
            width: "100%",
            aspectRatio: "1.1/1",
            borderRadius: "var(--r-xl)",
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(60,47,47,0.1)"
          }}>
            <img src={freshMilkImg} alt="Fresh Farm Milk" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        <div ref={ref} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
          {DAIRY.map((d, i) => {
            const Icon = d.icon;
            return (
              <div key={d.id} className={`dc sr ${vis ? "in" : ""}`} style={{
                transitionDelay: `${i * 70}ms`,
                background: "var(--warm-cream)",
                padding: "32px",
                borderRadius: "var(--r-lg)",
                border: "1px solid var(--border)"
              }}>
                <div style={{ width: 56, height: 56, borderRadius: "var(--r-md)", background: d.accent, display: "flex", alignItems: "center", justifyContent: "center", color: d.fg, marginBottom: 20 }}>
                  <Icon size={28} strokeWidth={2.5} />
                </div>
                <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.2rem", color: "var(--warm-dark)", marginBottom: 8 }}>{d.name}</h3>
                <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.7, color: "var(--muted)" }}>{d.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
