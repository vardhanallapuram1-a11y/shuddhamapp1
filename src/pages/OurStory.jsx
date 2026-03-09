import { useReveal } from "../hooks";
import storyImage from "../assets/images/hero_warm_elegance.png"; // Reusing for consistency, could change later

export default function OurStory() {
    const [ref1, vis1] = useReveal();
    const [ref2, vis2] = useReveal();

    return (
        <div style={{ background: "var(--warm-bg)", minHeight: "100vh" }}>
            {/* Intro Hero */}
            <section style={{ padding: "160px 40px 100px", textAlign: "center", borderBottom: "1px solid var(--border)" }}>
                <div ref={ref1} className={`reveal ${vis1 ? 'reveal-active' : ''}`} style={{ maxWidth: 800, margin: "0 auto" }}>
                    <h1 style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(3rem, 7vw, 5rem)",
                        fontWeight: 800,
                        color: "var(--warm-dark)",
                        lineHeight: 1.1,
                        marginBottom: 30
                    }}>
                        Crafting Purity Since <span style={{ fontStyle: "italic", fontWeight: 400 }}>2015</span>
                    </h1>
                    <p style={{
                        fontFamily: "var(--sans)",
                        fontSize: "1.2rem",
                        lineHeight: 1.7,
                        color: "var(--muted)",
                        maxWidth: 600,
                        margin: "0 auto"
                    }}>
                        What started as a small dream in Ratlam to bring back the authentic taste of pure milk has grown into a family of flavors, loved by thousands.
                    </p>
                </div>
            </section>

            {/* The Mission Section */}
            <section style={{ padding: "100px 40px", background: "var(--white)" }}>
                <div className="hero-grid" style={{ maxWidth: 1400, margin: "0 auto", display: "grid", alignItems: "center", gap: 80 }}>
                    <div ref={ref2} className={`reveal ${vis2 ? 'reveal-active' : ''}`}>
                        <h2 style={{
                            fontFamily: "var(--serif)",
                            fontSize: "clamp(2rem, 5vw, 3rem)",
                            fontWeight: 800,
                            color: "var(--warm-dark)",
                            marginBottom: 24
                        }}>
                            Pure Heart, <br />
                            <span style={{ color: "var(--warm-accent)" }}>Pure Milk.</span>
                        </h2>
                        <div style={{
                            fontFamily: "var(--sans)",
                            fontSize: "1rem",
                            lineHeight: 1.85,
                            color: "var(--muted)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 24
                        }}>
                            <p>
                                At Shuddham, "Purity" isn't just a marketing word—it's the foundation of everything we churn. We believe that great ice cream starts with the animal, the farm, and the soil.
                            </p>
                            <p>
                                Every liter of milk is sourced from our carefully managed network of farms where cows and buffalos are treated with respect and fed natural fodder, ensuring the cream we collect is rich and untainted.
                            </p>
                            <p>
                                We avoid all shortcuts. No synthetic stabilizers, no artificial bulking agents, and absolutely zero adulteration. Just the slow, patient churn of nature's best ingredients.
                            </p>
                        </div>
                    </div>
                    <div style={{ position: "relative" }}>
                        <img
                            src={storyImage}
                            alt="Artisanal Process"
                            style={{
                                width: "100%",
                                borderRadius: "var(--r-xl)",
                                boxShadow: "0 40px 80px rgba(60,47,47,0.15)"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section style={{ padding: "100px 40px", background: "var(--warm-bg)" }}>
                <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center", marginBottom: 60 }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: "2.5rem", color: "var(--warm-dark)" }}>Our Pillars</h3>
                </div>
                <div style={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 32
                }}>
                    {[
                        { t: "Authenticity", b: "Recipes that honor traditional Indian dairy wisdom while embracing modern craft." },
                        { t: "Hygiene", b: "State-of-the-art facility with touchless processing to ensure the highest safety." },
                        { t: "Community", b: "Supporting local farmers and bringing joy to local families every single day." }
                    ].map((v, i) => (
                        <div key={i} style={{
                            padding: 40,
                            background: "var(--white)",
                            borderRadius: "var(--r-lg)",
                            border: "1px solid var(--border)",
                            boxShadow: "0 10px 30px rgba(60,47,47,0.05)"
                        }}>
                            <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--ice-peach)", marginBottom: 16 }}>{v.t}</h4>
                            <p style={{ fontFamily: "var(--sans)", color: "var(--muted)", lineHeight: 1.7 }}>{v.b}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
