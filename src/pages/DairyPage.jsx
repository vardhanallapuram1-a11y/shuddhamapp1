import { useReveal } from "../hooks";
import { DAIRY } from "../data/content";
import dairyHero from "../assets/fresh_milk.png";

export default function DairyPage() {
    const [ref1, vis1] = useReveal();

    return (
        <div style={{ background: "var(--warm-bg)", minHeight: "100vh", padding: "140px 24px 100px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto" }}>

                {/* Header Section */}
                <div ref={ref1} className={`reveal ${vis1 ? 'reveal-active' : ''}`} style={{ marginBottom: 100, textAlign: "left" }}>
                    <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: 80, alignItems: "center" }}>
                        <div>
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
                                fontSize: "clamp(3rem, 6vw, 4.5rem)",
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
                                fontSize: "1.1rem",
                                lineHeight: 1.7,
                                color: "var(--muted)",
                                maxWidth: 600
                            }}>
                                Shuddham represents the purest form of dairy—clarified ghee, slow-set dahi, and handcrafted paneer made with zero additives.
                            </p>
                        </div>
                        <div style={{ borderRadius: "var(--r-xl)", overflow: "hidden", boxShadow: "0 40px 80px rgba(60,47,47,0.15)" }}>
                            <img src={dairyHero} alt="Premium Dairy" style={{ width: "100%", height: "auto", display: "block" }} />
                        </div>
                    </div>
                </div>

                {/* Detailed Categories */}
                <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
                    {DAIRY.map((d, i) => {
                        const Icon = d.icon;
                        return (
                            <div key={d.id} className="reveal reveal-active" style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                                gap: 60,
                                alignItems: "center",
                                background: "var(--white)",
                                padding: "clamp(40px, 5vw, 80px)",
                                borderRadius: "var(--r-xl)",
                                boxShadow: "0 20px 50px rgba(60,47,47,0.06)",
                                border: "1px solid var(--border)"
                            }}>
                                <div style={{ order: i % 2 === 0 ? 1 : 2 }}>
                                    <div style={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: "var(--r-md)",
                                        background: d.accent,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: d.fg,
                                        marginBottom: 32
                                    }}>
                                        <Icon size={40} strokeWidth={2.5} />
                                    </div>
                                    <h2 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", color: "var(--warm-dark)", marginBottom: 20 }}>{d.name}</h2>
                                    <p style={{ fontFamily: "var(--sans)", fontSize: "1.1rem", lineHeight: 1.85, color: "var(--muted)", marginBottom: 32 }}>
                                        {d.desc} Our {d.name.toLowerCase()} is prepared using traditional methods that preserve the natural vitamins and rich flavors of pure farm milk.
                                    </p>
                                    <ul style={{
                                        listStyle: "none",
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: 16,
                                        padding: 0
                                    }}>
                                        {["100% Zero-Adulteration", "Sourced from Grass-Fed Dairy", "Traditional Bilona-Style Processing"].map(bullet => (
                                            <li key={bullet} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--sans)", fontSize: "0.95rem", color: "var(--warm-dark)", fontWeight: 600 }}>
                                                <span style={{ color: "var(--warm-accent)" }}>✓</span> {bullet}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div style={{
                                    order: i % 2 === 0 ? 2 : 1,
                                    background: "var(--warm-cream)",
                                    borderRadius: "var(--r-lg)",
                                    aspectRatio: "1.2/1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "5rem"
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
