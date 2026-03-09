import { Link } from "react-router-dom";
import { useReveal } from "../hooks";
import { FLAVORS } from "../data/content";

export default function SeasonalBanner() {
  const [ref, vis] = useReveal();
  const summer = FLAVORS.filter(f => f.season === "Summer").slice(0, 3);

  return (
    <section style={{ background: "var(--warm-bg)", padding: "clamp(12px, 5vw, 80px) 32px", position: "relative", overflow: "hidden" }}>
      <div ref={ref} style={{ maxWidth: 1240, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center", position: "relative" }}>

        <div className={`sr from-left ${vis ? "in" : ""}`}>
          <h2 style={{ fontFamily: "var(--serif)", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.6rem)", letterSpacing: "-0.03em", color: "var(--ice-brown)", lineHeight: 1.1, marginBottom: 24 }}>
            Pure <em style={{ fontStyle: "italic", color: "var(--tiger)" }}>Delights</em>
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.95rem", lineHeight: 1.85, color: "rgba(60,47,47,0.7)", marginBottom: 36 }}>
            Seasonal specials made from fresh summer fruits. Alphonso Mango, Tender Coconut, Kala Jamun — only while they last.
          </p>
          <Link to="/flavors" className="btn btn-tiger">Shop Seasonal →</Link>
        </div>

        <div className={`sr from-right ${vis ? "in" : ""}`} style={{ transitionDelay: "120ms", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {summer.map((f, i) => (
            <div key={f.id} style={{ borderRadius: "var(--r-xl)", overflow: "hidden", background: f.bg, border: "1px solid rgba(255,255,255,0.06)", transitionDelay: `${i * 60}ms`, aspectRatio: "2/3" }}>
              {f.image && (
                <img
                  src={f.image}
                  alt={f.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.9 }}
                />
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}