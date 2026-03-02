import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDragScroll } from "../hooks";
import splitImg from "../assets/images/split_editorial.png";
import { FLAVORS } from "../data/content";
import DripDivider from "./DripDivider";

// Use subset for homepage gallery
const SIGNATURE_PRODUCTS = FLAVORS.slice(0, 6);

export default function FlavorSystem() {
  const railRef = useRef(null);
  const drag = useDragScroll(railRef);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track scroll position to update active dot
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const handleScroll = () => {
      const scrollPos = rail.scrollLeft;
      const cardWidthWithGap = 320 + 40; // Card width (320px) + gap (40px)
      const index = Math.round(scrollPos / cardWidthWithGap);
      setActiveIndex(Math.min(index, SIGNATURE_PRODUCTS.length - 1));
    };

    rail.addEventListener("scroll", handleScroll);
    return () => rail.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollTo({
      left: index * (320 + 40),
      behavior: "smooth"
    });
  };

  return (
    <div id="flavors" style={{ background: "var(--anita-beige)", position: "relative" }}>
      {/* Editorial Split Section */}
      <section style={{
        padding: "clamp(60px, 10vw, 120px) 24px",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          gap: "clamp(40px, 8vw, 100px)"
        }}>
          <div style={{ textAlign: "left" }}>
            <span style={{
              fontFamily: "var(--sans)",
              fontSize: "0.8rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--anita-pink)",
              display: "block",
              marginBottom: 16
            }}>About Our Craft</span>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              color: "var(--anita-green)",
              marginBottom: 24,
              letterSpacing: "-0.02em",
              textTransform: "uppercase"
            }}>
              Sweet Moments <br /> Start with <br /> <span style={{ fontStyle: "italic" }}>Purity</span>
            </h2>

            <p style={{
              fontFamily: "var(--sans)",
              fontSize: "1rem",
              lineHeight: 1.7,
              color: "var(--muted)",
              maxWidth: 480,
              marginBottom: 40
            }}>
              Every scoop is a celebration of fine ingredients and artisanal patience. We source the freshest dairy and real fruits to ensure your moments are nothing short of magical.
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <Link to="/our-story" style={{
                border: "1px solid var(--anita-green)",
                padding: "14px 40px",
                borderRadius: "0",
                color: "var(--anita-green)",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }}>
                Our Story
              </Link>
              <Link to="/flavors" style={{
                background: "var(--anita-green)",
                color: "var(--white)",
                padding: "14px 40px",
                borderRadius: "0",
                textDecoration: "none",
                fontSize: "0.85rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em"
              }}>
                View All Flavors
              </Link>
            </div>
          </div>

          <div style={{
            borderRadius: "0",
            overflow: "hidden",
            boxShadow: "0 40px 80px rgba(34,61,51,0.12)"
          }}>
            <img src={splitImg} alt="Artisanal Ice Cream Craft" style={{ width: "100%", height: "auto", display: "block" }} />
          </div>
        </div>
      </section>

      {/* Product Gallery Section with Sliding Area */}
      <section style={{ padding: "clamp(80px, 10vw, 120px) 0", textAlign: "left" }}>
        <div style={{ maxWidth: 1400, margin: "0 24px 60px", paddingLeft: "clamp(0px, 4vw, 40px)", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 400,
            color: "var(--anita-green)",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}>
            Signature Selection
          </h2>
          <p style={{ fontFamily: "var(--sans)", fontSize: "0.9rem", color: "var(--muted)", marginTop: 12 }}>
            Drag to explore our full range of pure delights
          </p>
        </div>

        <div
          ref={railRef}
          className="fl-rail"
          {...drag}
          style={{
            display: "flex",
            gap: "40px",
            padding: "0 clamp(24px, 5vw, 40px)",
            width: "100%",
            scrollSnapType: "x mandatory"
          }}
        >
          {SIGNATURE_PRODUCTS.map(p => (
            <div key={p.id} className="anita-card" style={{ flex: "0 0 320px", scrollSnapAlign: "center", padding: "0 0 30px" }}>
              <div className="anita-arched-img" style={{ background: p.bg || "rgba(0,0,0,0.03)", aspectRatio: "1/1.2" }}>
                <img src={p.image} alt={p.name} loading="lazy" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ padding: "30px 10px 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.25rem", fontWeight: 700, color: "var(--anita-green)", marginBottom: 8, textTransform: "uppercase" }}>{p.name}</h3>
                <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "0.85rem", color: "var(--muted)", marginBottom: 20, height: "3.2em", overflow: "hidden", lineHeight: 1.6 }}>{p.desc}</p>
                <button className="anita-btn" style={{ padding: "10px 24px", fontSize: "0.75rem" }}>See More</button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 40
        }}>
          {SIGNATURE_PRODUCTS.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              style={{
                width: 10,
                height: 10,
                borderRadius: "50%",
                border: "none",
                background: activeIndex === i ? "var(--anita-green)" : "var(--anita-pink)",
                opacity: activeIndex === i ? 1 : 0.4,
                cursor: "pointer",
                transition: "all 0.3s ease",
                padding: 0
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
      <DripDivider color="var(--anita-beige)" position="bottom" height={80} />
    </div>
  );
}
