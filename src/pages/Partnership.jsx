import Contact from "../components/Contact";
import { useState, useEffect } from "react";

export default function Partnership() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth <= 820);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return (
        <div style={{ background: "var(--warm-bg)", minHeight: "100vh", padding: isMobile ? "80px 0 60px" : "140px 24px 100px" }}>
            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 24px" : "0" }}>

                {/* Page Header */}
                <div style={{ marginBottom: 80, textAlign: "center" }}>
                    <h1 style={{
                        fontFamily: "var(--serif)",
                        fontSize: "clamp(3rem, 7vw, 5rem)",
                        fontWeight: 800,
                        color: "var(--warm-dark)",
                        lineHeight: 1.1,
                        marginBottom: 30
                    }}>
                        Grow With <span style={{ fontStyle: "italic", fontWeight: 400 }}>Shuddham.</span>
                    </h1>
                    <p style={{
                        fontFamily: "var(--sans)",
                        fontSize: "1.2rem",
                        lineHeight: 1.7,
                        color: "var(--muted)",
                        maxWidth: 700,
                        margin: "0 auto"
                    }}>
                        We are looking for dedicated partners, distributors, and retailers who share our passion for local, pure, and artisanal dairy.
                    </p>
                </div>

                {/* Benefits Section */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: 32,
                    marginBottom: 100
                }}>
                    {[
                        { t: "Premium Branding", desc: "Access to high-end marketing materials and a brand name associated with world-class purity." },
                        { t: "Exclusive Territories", desc: "Grow your business with territory protection and direct support from our logistics team." },
                        { t: "Quality Assurance", desc: "Zero returns on quality — our lab-tested promise ensures your customers stay loyal." }
                    ].map((b, i) => (
                        <div key={i} style={{
                            background: "var(--white)",
                            padding: 40,
                            borderRadius: "var(--r-lg)",
                            border: "1px solid var(--border)",
                            boxShadow: "0 10px 30px rgba(60,47,47,0.05)",
                            textAlign: isMobile ? "center" : "left"
                        }}>
                            <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", color: "var(--warm-accent)", marginBottom: 16 }}>{b.t}</h3>
                            <p style={{ fontFamily: "var(--sans)", color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.7 }}>{b.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Formal Contact Form Section (Reused Component) */}
            </div>

            <Contact />

            <div style={{ maxWidth: 1400, margin: "0 auto", padding: isMobile ? "0 24px" : "0" }}>
                <div style={{ marginTop: 80, textAlign: "center", borderTop: "1px solid var(--border)", paddingTop: 80 }}>
                    <h3 style={{ fontFamily: "var(--serif)", fontSize: "2rem", color: "var(--warm-dark)", marginBottom: 20 }}>Direct Line</h3>
                    <p style={{ fontFamily: "var(--sans)", fontSize: "1.2rem", color: "var(--muted)" }}>
                        Anil Sisodia: <span style={{ fontWeight: 800, color: "var(--warm-accent)" }}>+91 9425103492</span>
                    </p>
                </div>
            </div>
        </div>
    );
}
