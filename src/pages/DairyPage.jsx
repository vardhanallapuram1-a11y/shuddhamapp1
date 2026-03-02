import { useReveal } from "../hooks";
import { DAIRY } from "../data/content";
import dairyHero from "../assets/fresh_milk.png";
import { useState, useEffect } from "react";

export default function DairyPage() {
    const [ref1, vis1] = useReveal();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 820);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <div style={{ background: "var(--warm-bg)", minHeight: "100vh", padding: isMobile ? "100px 20px 60px" : "140px 24px 100px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>

                {/* Header Section */}
                <div ref={ref1} className={`reveal ${vis1 ? 'reveal-active' : ''}`} style={{ marginBottom: isMobile ? 60 : 100, textAlign: isMobile ? "center" : "left" }}>
                    <div className="hero-grid" style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "1.2fr 0.8fr",
                        gap: isMobile ? 40 : 80,
                        alignItems: "center"
                    }}>
                        <div style={{ order: isMobile ? 2 : 1 }}>
                            <span style={{
                                fontFamily: "var(--sans)",
                                fontSize: "0.8rem",
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                color: "var(--warm-accent)",
                                display: "block",
                                marginBottom: 20
                            }}>Pure Dairy Essentials</span>
                            <h1 style={{
                                fontFamily: "var(--serif)",
                                fontSize: isMobile ? "clamp(2.5rem, 10vw, 3.5rem)" : "clamp(3rem, 6vw, 4.5rem)",
                                fontWeight: 800,
                                color: "var(--warm-dark)",
                                lineHeight: 1.1,
                                marginBottom: 24
                            }}>
                                From Farm To <br />
                                <span style={{ fontStyle: "italic", fontWeight: 400 }}>Family Traditions.</span>
                            </h1>
                            <p style={{
                                fontFamily: "var(--sans)",
                                fontSize: "1rem",
                                lineHeight: 1.7,
                                color: "var(--muted)",
                                maxWidth: 600,
                                margin: isMobile ? "0 auto" : "0"
                            }}>
                                Shuddham represents the purest form of dairy—clarified ghee, slow-set dahi, and handcrafted paneer made with zero additives.
                            </p>
                        </div>
                        <div style={{
                            order: isMobile ? 1 : 2,
                            borderRadius: "var(--r-xl)",
                            overflow: "hidden",
                            boxShadow: "0 40px 80px rgba(60,47,47,0.15)",
                            maxWidth: isMobile ? "350px" : "100%",
                            margin: isMobile ? "0 auto" : "0"
                        }}>
                            <img src={dairyHero} alt="Premium Dairy" style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    </div>
                </div>

                {/* Detailed Categories */}
                <div style={{ display: "flex", flexDirection: "column", gap: isMobile ? 40 : 80 }}>
                    {DAIRY.map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <div key={d.id} className="reveal reveal-active" style={{
                                display: "grid",
                                gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: isMobile ? 32 : 60,
                                alignItems: "center",
                                background: "var(--white)",
                                padding: isMobile ? "32px 20px" : "clamp(40px, 5vw, 80px)",
                                borderRadius: isMobile ? "var(--r-lg)" : "var(--r-xl)",
                                boxShadow: "0 20px 50px rgba(60,47,47,0.06)",
                                border: "1px solid var(--border)",
                                textAlign: isMobile ? "center" : "left"
                            }}>
                                <div style={{ order: isMobile ? 2 : (i % 2 === 0 ? 1 : 2) }}>
                                    <div style={{
                                        width: isMobile ? 64 : 80,
                                        height: isMobile ? 64 : 80,
                                        borderRadius: "var(--r-md)",
                                        background: d.accent,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: d.fg,
                                        marginBottom: 24,
                                        margin: isMobile ? "0 auto 24px" : "0 0 32px"
                                    }}>
                                        <Icon size={isMobile ? 32 : 40} strokeWidth={2.5} />
                                    </div>
                                    <h2 style={{ fontFamily: "var(--serif)", fontSize: isMobile ? "1.75rem" : "2.5rem", color: "var(--warm-dark)", marginBottom: 16 }}>{d.name}</h2>
                                    <p style={{ fontFamily: "var(--sans)", fontSize: "0.95rem", lineHeight: 1.8, color: "var(--muted)", marginBottom: 24 }}>
                                        {d.desc} Our {d.name.toLowerCase()} is prepared using traditional methods that preserve the natural vitamins and rich flavors of pure farm milk.
                                    </p>
                                    <ul style={{
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 12,
                                        padding: 0,
                                        alignItems: isMobile ? "center" : "flex-start"
                                    }}>
                                        {["100% Zero-Adulteration", "Sourced from Grass-Fed Dairy", "Traditional Bilona-Style Processing"].map(bullet => (
                                            <li key={bullet} style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "var(--sans)", fontSize: "0.85rem", color: "var(--warm-dark)", fontWeight: 600 }}>
                                                <span style={{ color: "var(--warm-accent)" }}>✓</span> {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{
                                    order: isMobile ? 1 : (i % 2 === 0 ? 2 : 1),
                                    background: "var(--warm-cream)",
                                    borderRadius: "var(--r-lg)",
                                    aspectRatio: "1.2/1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: isMobile ? "4rem" : "5rem",
                                    maxWidth: isMobile ? "300px" : "100%",
                                    margin: isMobile ? "0 auto" : "0"
                                }}>
                                    {/* Placeholder for high-quality product render */}
                                    {i === 3 ? "🏺" : i === 1 ? "🥣" : "🥛"}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
