import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play logic
  useEffect(() => {
    if (isPaused || drag.isDragging) return;
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % SIGNATURE_PRODUCTS.length;
      scrollTo(nextIndex);
    }, 2000);
    return () => clearInterval(interval);
  }, [isPaused, activeIndex, drag.isDragging]);

  // Track scroll position to update active dot
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const handleScroll = () => {
      const cardWidth = 300 + 40; // Card (300) + Gap (40)
      const index = Math.round(rail.scrollLeft / cardWidth);
      setActiveIndex(Math.min(index, SIGNATURE_PRODUCTS.length - 1));
    };

    rail.addEventListener("scroll", handleScroll);
    return () => rail.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (index) => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollTo({
      left: index * (300 + 40),
      behavior: "smooth"
    });
  };

  const nav = (dir) => {
    const newIdx = (activeIndex + dir + SIGNATURE_PRODUCTS.length) % SIGNATURE_PRODUCTS.length;
    scrollTo(newIdx);
  };

  return (
    <div id="flavors" style={{ background: "var(--anita-beige)", position: "relative" }}>
      {/* Editorial Split Section */}
      <section style={{
        padding: "clamp(12px, 6vw, 100px) 24px clamp(16px, 6vw, 48px)",
        maxWidth: 1400,
        margin: "0 auto",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          alignItems: "center",
          gap: "clamp(12px, 8vw, 100px)"
        }}>
          <div style={{ textAlign: "left" }}>

            <h2 style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(1.6rem, 4vw, 3rem)",
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
      <section style={{ padding: "clamp(16px, 6vw, 48px) 0 clamp(6px, 2vw, 32px)", textAlign: "left", position: "relative" }}>
        <div style={{ maxWidth: 1400, margin: "0 24px 20px", paddingLeft: "clamp(0px, 4vw, 40px)", textAlign: "center" }}>
          <h2 style={{
            fontFamily: "var(--serif)",
            fontSize: "clamp(1.4rem, 3.5vw, 2.4rem)",
            fontWeight: 400,
            color: "var(--anita-green)",
            letterSpacing: "0.05em",
            textTransform: "uppercase"
          }}>
            Signature Selection
          </h2>
        </div>

        <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto" }}>
          {/* Arrows for Desktop */}
          <button
            onClick={() => nav(-1)}
            style={{
              position: "absolute",
              left: "10px",
              top: "40%",
              zIndex: 10,
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <ChevronLeft size={24} color="var(--anita-green)" />
          </button>

          <button
            onClick={() => nav(1)}
            style={{
              position: "absolute",
              right: "10px",
              top: "40%",
              zIndex: 10,
              background: "white",
              border: "1px solid var(--border)",
              borderRadius: "50%",
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)"
            }}
          >
            <ChevronRight size={24} color="var(--anita-green)" />
          </button>

          <div
            ref={railRef}
            className="fl-rail"
            {...drag}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            style={{
              display: "flex",
              gap: "40px",
              padding: "0 clamp(24px, 5vw, 40px)",
              width: "100%",
              scrollSnapType: "x mandatory",
              overflowX: "auto",
              msOverflowStyle: "none",
              scrollbarWidth: "none"
            }}
          >
            {SIGNATURE_PRODUCTS.map(p => (
              <div key={p.id} className="anita-card" style={{ flex: "0 0 300px", scrollSnapAlign: "center", padding: "0 0 16px" }}>
                {/* Image dominates — taller ratio, full bleed */}
                <div className="anita-arched-img" style={{ background: p.bg || "rgba(0,0,0,0.03)" }}>
                  <img src={p.image} alt={p.name} loading="lazy" style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                {/* Supporting text — compact, secondary */}
                <div style={{ padding: "14px 10px 0", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <h3 style={{ fontFamily: "var(--serif)", fontSize: "1.05rem", fontWeight: 700, color: "var(--anita-green)", marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.04em" }}>{p.name}</h3>
                  <p style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: "0.78rem", color: "var(--muted)", marginBottom: 12, height: "2.8em", overflow: "hidden", lineHeight: 1.5, opacity: 0.85 }}>{p.desc}</p>
                  <button className="anita-btn" style={{ padding: "8px 20px", fontSize: "0.72rem" }}>See More</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: 12,
          marginTop: 6,
          paddingBottom: 4
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
      <DripDivider color="var(--anita-beige)" position="bottom" height={30} />
    </div>
  );
}
