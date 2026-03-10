import { useReveal } from "../hooks";
import storyImage from "../assets/images/hero_warm_elegance.png";
import founder1 from "../assets/images/team_founder_1.png";
import founder2 from "../assets/images/team_founder_2.png";
import teamMgmt from "../assets/images/team_management.png";
import { useState, useEffect } from "react";

export default function OurStory() {
    const [ref1, vis1] = useReveal();
    const [ref2, vis2] = useReveal();
    const [ref3, vis3] = useReveal();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 820);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const team = [
        { name: "Anil Sisodia", role: "Founder & Managing Director", img: founder1, desc: "The visionary behind Shuddham, Anil takes pride in delivering dairy products crafted with purity, hygiene, and love. Committed to maintaining the trust of customers through quality." },
        { name: "Management Team", role: "Quality & Operations", img: teamMgmt, desc: "Our dedicated professionals who ensure strict hygiene protocols and machine packaging to lock in freshness every single day." }
    ];

    return (
        <div style={{ background: "var(--warm-bg)", minHeight: "100vh" }}>
            {/* Intro Hero */}
            <section style={{ padding: isMobile ? "120px 24px 60px" : "180px 40px 120px", textAlign: "center", borderBottom: "1px solid var(--border)" }}>
                <div ref={ref1} className={`reveal ${vis1 ? 'reveal-active' : ''}`} style={{ maxWidth: 900, margin: "0 auto" }}>
                    <h1 style={{
                        fontFamily: "var(--serif)",
                        fontSize: isMobile ? "clamp(2.5rem, 10vw, 3.5rem)" : "clamp(4rem, 8vw, 6rem)",
                        fontWeight: 800,
                        color: "var(--warm-dark)",
                        lineHeight: 1.1,
                        marginBottom: 30
                    }}>
                        Crafting Purity Since <span style={{ fontStyle: "italic", fontWeight: 400 }}>2015</span>
                    </h1>
                    <p style={{
                        fontFamily: "var(--sans)",
                        fontSize: isMobile ? "1.1rem" : "1.35rem",
                        lineHeight: 1.7,
                        color: "var(--muted)",
                        maxWidth: 700,
                        margin: "0 auto"
                    }}>
                        What started as a small dream in Ratlam to bring back the authentic taste of pure milk has grown into a family of flavors, loved by thousands across the region.
                    </p>
                </div>
            </section>

            {/* The Mission Section */}
            <section style={{ padding: isMobile ? "60px 24px" : "120px 40px", background: "var(--white)" }}>
                <div className="hero-grid" style={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
                    alignItems: "center",
                    gap: isMobile ? 40 : 100
                }}>
                    <div ref={ref2} className={`reveal ${vis2 ? 'reveal-active' : ''}`}>
                        <h2 style={{
                            fontFamily: "var(--serif)",
                            fontSize: isMobile ? "clamp(2rem, 8vw, 2.5rem)" : "clamp(2.5rem, 5vw, 4rem)",
                            fontWeight: 800,
                            color: "var(--warm-dark)",
                            marginBottom: 24
                        }}>
                            Pure Heart, <br />
                            <span style={{ color: "var(--warm-accent)" }}>Pure Milk.</span>
                        </h2>
                        <div style={{
                            fontFamily: "var(--sans)",
                            fontSize: isMobile ? "0.95rem" : "1.05rem",
                            lineHeight: 1.85,
                            color: "var(--muted)",
                            display: "flex",
                            flexDirection: "column",
                            gap: 24
                        }}>
                            <p>
                                At Shuddham, "Purity" isn't just a marketing word—it's the foundation of everything we churn. Our journey began in 2015 when we realized that the simple, honest dairy of our childhood had been replaced by mass-produced alternatives. We decided to go back to the source.
                            </p>
                            <p>
                                We believe that great ice cream starts with the animal, the farm, and the soil. Every liter of milk is sourced from our carefully managed network of farms where cows and buffalos are treated with respect and fed natural fodder, ensuring the cream we collect is rich and untainted.
                            </p>
                            <p>
                                We avoid all shortcuts. While others use synthetic stabilizers and artificial bulking agents, we rely on the slow, patient churn of nature's best ingredients. It's a tradition of patience that results in a flavor that truly feels like home.
                            </p>
                        </div>
                    </div>
                    <div style={{ position: "relative", maxWidth: isMobile ? "100%" : "500px", margin: "0 auto" }}>
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

            {/* Meet the Visionaries Section */}
            <section style={{ padding: isMobile ? "80px 24px" : "140px 40px", background: "var(--white)", borderTop: "1px solid var(--border)" }}>
                <div style={{ maxWidth: 1400, margin: "0 auto" }}>
                    <div style={{ textAlign: "center", marginBottom: isMobile ? 60 : 100 }}>

                        <h2 style={{ fontFamily: "var(--serif)", fontSize: isMobile ? "1.75rem" : "2.5rem", color: "var(--warm-dark)", fontWeight: 800 }}>Meet The Visionaries</h2>
                    </div>

                    <div ref={ref3} className={`reveal ${vis3 ? 'reveal-active' : ''}`} style={{
                        display: "grid",
                        gridTemplateColumns: isMobile ? "1fr" : "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: isMobile ? 60 : 40,
                        justifyContent: "center",
                        maxWidth: isMobile ? "100%" : 900,
                        margin: "0 auto"
                    }}>
                        {team.map((member, i) => (
                            <div key={i} className="team-card" style={{ textAlign: "center" }}>

                                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.75rem", color: "var(--warm-dark)", marginBottom: 8 }}>{member.name}</h3>
                                <p style={{ fontFamily: "var(--sans)", color: "var(--warm-accent)", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>{member.role}</p>
                                <p style={{ fontFamily: "var(--sans)", color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.6, maxWidth: 320, margin: "0 auto" }}>{member.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section style={{ padding: "100px 40px", background: "var(--warm-bg)" }}>
                <div style={{ maxWidth: 1400, margin: "0 auto", textAlign: "center", marginBottom: 60 }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: isMobile ? "2rem" : "3rem", color: "var(--warm-dark)" }}>Our Pillars</h3>
                </div>
                <div style={{
                    maxWidth: 1400,
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
                    gap: 32
                }}>
                    {[
                        { t: "Authenticity", b: "Recipes that honor traditional Indian dairy wisdom while embracing modern culinary craft with precision." },
                        { t: "Hygiene", b: "A state-of-the-art facility with touchless processing to ensure the highest safety for your entire family." },
                        { t: "Community", b: "Supporting local farmers and bringing pure, honest joy to thousands of families every single day." }
                    ].map((v, i) => (
                        <div key={i} style={{
                            padding: 40,
                            background: "var(--white)",
                            borderRadius: "var(--r-lg)",
                            border: "1px solid var(--border)",
                            boxShadow: "0 10px 30px rgba(60,47,47,0.05)",
                            textAlign: isMobile ? "center" : "left"
                        }}>
                            <h4 style={{ fontFamily: "var(--serif)", fontSize: "1.5rem", color: "var(--warm-accent)", marginBottom: 16 }}>{v.t}</h4>
                            <p style={{ fontFamily: "var(--sans)", color: "var(--muted)", lineHeight: 1.7 }}>{v.b}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
