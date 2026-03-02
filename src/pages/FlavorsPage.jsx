import { useState } from "react";
import { useReveal } from "../hooks";
import { FLAVORS, CATS } from "../data/content";

export default function FlavorsPage() {
    const [ref1, vis1] = useReveal();
    const [activeCat, setActiveCat] = useState("All");

    const filtered = activeCat === "All"
        ? FLAVORS
        : FLAVORS.filter(f => f.cat === activeCat);

    return (
        <div style={{ background: "var(--warm-bg)", minHeight: "100vh", padding: "140px 24px 100px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>

                {/* Header Section */}
                <div ref={ref1} className={`reveal ${vis1 ? 'reveal-active' : ''}`} style={{ marginBottom: 80, textAlign: "left" }}>
                    <span style={{
                        fontFamily: "var(--sans)",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--warm-accent)",
                        display: "block",
                        marginBottom: 20
                    }}>Signature Collection</span>
                    <h1 style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(3rem, 6vw, 4.5rem)",
                        fontWeight: 800,
                        color: "var(--warm-dark)",
                        lineHeight: 1.1,
                        marginBottom: 24
                    }}>
                        Every Flavor, <br />
                        <span style={{ fontStyle: "italic", fontWeight: 400 }}>A New Story.</span>
                    </h1>
                    <p style={{
                        fontFamily: "var(--sans)",
                        fontSize: "1.1rem",
                        lineHeight: 1.7,
                        color: "var(--muted)",
                        maxWidth: 600
                    }}>
                        From seasonal fruit harvests to classic artisanal crumbles, explore our curated selection of pure milk delights.
                    </p>
                </div>

                {/* Filter Bar */}
                <div style={{
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                    marginBottom: 60,
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 20
                }}>
                    {CATS.map(c => (
                        <button
                            key={c}
                            onClick={() => setActiveCat(c)}
                            style={{
                                padding: "8px 20px",
                                borderRadius: "99px",
                                border: activeCat === c ? "none" : "1px solid var(--border)",
                                background: activeCat === c ? "var(--warm-dark)" : "transparent",
                                color: activeCat === c ? "var(--white)" : "var(--warm-dark)",
                                fontFamily: "var(--sans)",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.3s var(--ease-out)"
                            }}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Flavors Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                    gap: 40
                }}>
                    {filtered.map((f, i) => (
                        <div key={f.id} className="reveal reveal-active" style={{ // Forcing active for grid simplicity, or could use staggered reveal
                            background: "var(--white)",
                            borderRadius: "var(--r-lg)",
                            overflow: "hidden",
                            boxShadow: "0 15px 35px rgba(60,47,47,0.08)",
                            border: "1px solid var(--border)",
                            transition: "transform 0.4s var(--ease-out)",
                            display: "flex",
                            flexDirection: "column"
                        }}>
                            <div style={{ height: 480, overflow: "hidden", position: "relative", background: f.bg || "var(--warm-cream)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <img
                                    src={f.image}
                                    alt={f.name}
                                    style={{ width: "100%", height: "100%", objectFit: "contain", transition: "transform 0.6s ease" }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                />
                                <div style={{
                                    position: "absolute",
                                    top: 16,
                                    right: 16,
                                    background: "var(--warm-dark)",
                                    color: "var(--white)",
                                    padding: "4px 12px",
                                    borderRadius: "99px",
                                    fontSize: "0.65rem",
                                    fontWeight: 800,
                                    letterSpacing: "0.05em",
                                    textTransform: "uppercase"
                                }}>
                                    {f.cat}
                                </div>
                            </div>

                            <div style={{ padding: 32, flex: 1, display: "flex", flexDirection: "column" }}>
                                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", fontWeight: 700, color: "var(--warm-dark)", marginBottom: 12 }}>{f.name}</h3>
                                <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", lineHeight: 1.6, color: "var(--muted)", flex: 1 }}>{f.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
