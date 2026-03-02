import { useReveal } from "../hooks";
import { Phone, MapPin, Hash } from "lucide-react";

export default function Contact() {
  const [ref, vis] = useReveal();

  const contacts = [
    { icon: <Phone size={24} />, label: "Phone", val: "9425103492 / 7987638522" },
    { icon: <MapPin size={24} />, label: "Address", val: "Mangrol, Gram Sajjanpada,\nRatlam (M.P.) — 457001" },
    { icon: <Hash size={24} />, label: "GST", val: "23FHSPS6144H1ZT" },
  ];

  return (
    <section id="contact" style={{ padding: "clamp(60px, 10vw, 120px) 24px", background: "var(--warm-bg)" }}>
      <div ref={ref} style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className={`reveal reveal-delay-2 ${vis ? "reveal-active" : ""}`} style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "clamp(40px, 8vw, 100px)",
          alignItems: "center"
        }}>
          <div>
            <div style={{ marginBottom: 40 }}>
              <span style={{
                fontFamily: "var(--sans)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--warm-accent)",
                display: "block",
                marginBottom: 16
              }}>Get in Touch</span>
              <h2 style={{
                fontFamily: "var(--serif)",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: "var(--warm-dark)",
                lineHeight: 1.1
              }}>
                Partner with <br /><span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--warm-accent)" }}>Shuddham</span>
              </h2>
            </div>

            <p style={{
              fontFamily: "var(--sans)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              marginBottom: 48,
              maxWidth: 480
            }}>
              Looking to stock Shuddham products or partner with us? Reach out to Anil Sisodia directly. We'd love to bring pure, natural dairy to more families.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {contacts.map((c, i) => (
                <div key={c.label} className={`reveal reveal-delay-${i + 2} ${vis ? 'reveal-active' : ''}`} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                  <div style={{
                    width: 52,
                    height: 52,
                    background: "var(--warm-cream)",
                    color: "var(--warm-accent)",
                    borderRadius: "var(--r-md)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    boxShadow: "0 8px 24px rgba(60,47,47,0.06)"
                  }}>{c.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "var(--sans)",
                      fontSize: "0.7rem",
                      fontWeight: 800,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "var(--muted)",
                      marginBottom: 6
                    }}>{c.label}</div>
                    <div style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--warm-dark)",
                      whiteSpace: "pre-line",
                      lineHeight: 1.5
                    }}>{c.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={`reveal reveal-delay-3 ${vis ? 'reveal-active' : ''}`} style={{
            background: "var(--white)",
            borderRadius: "var(--r-xl)",
            padding: "clamp(32px, 5vw, 48px)",
            boxShadow: "0 40px 80px rgba(60,47,47,0.08)",
            border: "1px solid var(--border)"
          }}>
            <h3 style={{
              fontFamily: "var(--serif)",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "var(--warm-dark)",
              marginBottom: 32,
              letterSpacing: "-0.01em"
            }}>Send a Message</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {["Your Name", "Phone Number", "City / Location"].map(p => (
                <input key={p} className="fi" placeholder={p} style={{
                  fontFamily: "var(--sans)",
                  padding: "16px 20px",
                  borderRadius: "12px",
                  border: "1px solid var(--border)",
                  background: "var(--warm-bg)",
                  fontSize: "0.95rem"
                }} />
              ))}
              <textarea className="fi" placeholder="Tell us about your requirement..." rows={4} style={{
                fontFamily: "var(--sans)",
                padding: "16px 20px",
                borderRadius: "12px",
                border: "1px solid var(--border)",
                background: "var(--warm-bg)",
                resize: "vertical",
                fontSize: "0.95rem"
              }} />
              <button className="btn" style={{
                width: "100%",
                justifyContent: "center",
                marginTop: 12,
                background: "var(--warm-dark)",
                color: "var(--white)",
                padding: "16px",
                borderRadius: "99px",
                fontSize: "1rem",
                fontWeight: 700,
                border: "none",
                cursor: "pointer"
              }}>Send Inquiry →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
