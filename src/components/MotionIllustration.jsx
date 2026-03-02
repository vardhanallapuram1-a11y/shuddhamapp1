import { useReveal } from "../hooks";

export default function MotionIllustration() {
    const [ref, vis] = useReveal();

    return (
        <section ref={ref} className={`reveal ${vis ? 'reveal-active' : ''}`} style={{
            padding: "100px 0",
            background: "var(--anita-beige)",
            overflow: "hidden"
        }}>
            <div style={{
                maxWidth: 1400,
                margin: "0 auto",
                padding: "0 24px",
                position: "relative"
            }}>
                <div style={{
                    width: "100%",
                    borderRadius: "40px",
                    overflow: "hidden",
                    aspectRatio: "21/9",
                    background: "#F8CDCD", // Light pink base
                    position: "relative",
                    boxShadow: "0 30px 60px rgba(34,61,51,0.1)"
                }}>
                    {/* Simplified Illustration Elements */}
                    <div style={{
                        position: "absolute",
                        inset: 0,
                        backgroundImage: `url('https://www.anita-gelato.com/wp-content/uploads/2021/11/FACTORY-SLIDER-scaled.jpg')`, // Using real image as reference for style, or placeholder
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: vis ? "scale(1.05)" : "scale(1)",
                        transition: "transform 8s ease-out"
                    }}></div>

                    {/* Overlay Text/Elements */}
                    <div style={{
                        position: "absolute",
                        bottom: 40,
                        left: 40,
                        color: "var(--anita-green)",
                        zIndex: 2
                    }}>
                        <h2 style={{
                            fontFamily: "var(--serif)",
                            fontSize: "2.5rem",
                            fontWeight: 400,
                            textTransform: "uppercase",
                            margin: 0
                        }}>Anita Gelato Factory</h2>
                        <p style={{
                            fontFamily: "var(--sans)",
                            fontSize: "0.9rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            opacity: 0.8
                        }}>SINCE 2002</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
