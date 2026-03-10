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
        <div style={{ background: "var(--anita-beige)", minHeight: "100vh" }}>

            {/* Pink Hero Section */}
            <div style={{
                background: "var(--anita-pink)",
                padding: "160px 24px 100px",
                position: "relative",
                textAlign: "center"
            }}>
                {/* Vertical Text */}
                <div className="vertical-text hide-sm" style={{
                    position: "absolute",
                    left: 40,
                    top: "50%",
                    transform: "translateY(-50%)",
                    height: "fit-content"
                }}>
                    SCROLL & DISCOVER —
                </div>

                <div ref={ref1} className={`reveal ${vis1 ? 'reveal-active' : ''}`} style={{ maxWidth: 1000, margin: "0 auto" }}>
                    <h1 style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(4rem, 10vw, 8rem)",
                        fontWeight: 400,
                        color: "var(--anita-green)",
                        lineHeight: 1,
                        margin: 0,
                        textTransform: "uppercase",
                        letterSpacing: "0.05em"
                    }}>
                        Flavors
                    </h1>
                    <div style={{ marginTop: 24, fontSize: "0.8rem", fontWeight: 700, letterSpacing: "0.2em", color: "var(--anita-green)" }}>
                        HOME . FLAVORS
                    </div>
                </div>
            </div>

            <div style={{ maxWidth: 1400, margin: "0 auto", padding: "80px 24px" }}>

                {/* Filter Bar - horizontally scrollable on mobile */}
                <div style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    gap: 10,
                    overflowX: "auto",
                    paddingBottom: 8,
                    marginBottom: 60,
                    msOverflowStyle: "none",
                    scrollbarWidth: "none"
                }}>
                    {CATS.map(c => (
                        <button
                            key={c}
                            onClick={() => setActiveCat(c)}
                            className={`anita-filter-tab ${activeCat === c ? 'active' : ''}`}
                            style={{ flexShrink: 0 }}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                {/* Flavors Grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                    gap: "60px 40px"
                }}>
                    {filtered.map((f, i) => (
                        <div key={f.id} className="anita-card">
                            <div className="anita-arched-img">
                                <img
                                    src={f.image}
                                    alt={f.name}
                                    style={{ transition: "transform 0.6s ease" }}
                                    onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
                                    onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                />
                            </div>

                            <div style={{ padding: "32px 20px", textAlign: "center", flex: 1, display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <h3 style={{
                                    fontFamily: "var(--serif)",
                                    fontSize: "1.3rem",
                                    fontWeight: 700,
                                    color: "var(--anita-green)",
                                    marginBottom: 10,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                }}>{f.name}</h3>
                                <p style={{
                                    fontFamily: "var(--serif)",
                                    fontSize: "0.85rem",
                                    fontStyle: "italic",
                                    lineHeight: 1.5,
                                    color: "var(--muted)",
                                    maxWidth: 300,
                                    marginBottom: 24,
                                    flex: 1,
                                    opacity: 0.8
                                }}>{f.desc}</p>

                                <button className="anita-btn" style={{ fontSize: "0.75rem", padding: "10px 24px" }}>See More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
