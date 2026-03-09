import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import heroImg1 from "../assets/images/hero_ice_cream_splashes.png";
import heroImg2 from "../assets/images/hero_premium.png";
import heroImg3 from "../assets/images/hero_warm_elegance.png";
import heroImg4 from "../assets/images/hero_ice_cream_joy.png";

const SLIDES = [
  {
    image: heroImg1,
    title: "Fresh Natural Heavenly",
    subtitle: "That's Our Promise",
    desc: "Handcrafted ice cream made from farm-fresh milk, real fruits, and zero shortcuts.",
    accent: "#7d4b4b"
  },
  {
    image: heroImg2,
    title: "Pure Milk Indulgence",
    subtitle: "Zero Artificials",
    desc: "The richest textures using only the finest ingredients sourced directly from local farms.",
    accent: "#4e342e"
  },
  {
    image: heroImg3,
    title: "Artisanal Excellence",
    subtitle: "Crafted with Care",
    desc: "Every scoop is a result of patience and a passion for perfection.",
    accent: "#614e41"
  },
  {
    image: heroImg4,
    title: "Sweet Moments",
    subtitle: "For Every Family",
    desc: "Sharing joy, one scoop at a time. Shuddham is made for those who value purity.",
    accent: "#8c6e6e"
  }
];

const variants = {
  enter: (dir) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.4 } } },
  exit: (dir) => ({ x: dir < 0 ? "100%" : "-100%", opacity: 0, transition: { x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.3 } } })
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + SLIDES.length) % SLIDES.length);
  };

  const goTo = (i) => {
    setDirection(i > index ? 1 : -1);
    setIndex(i);
  };

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 820);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Auto-play: inline state updates to avoid stale closure
  useEffect(() => {
    const t = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1 + SLIDES.length) % SLIDES.length);
    }, 3000);
    return () => clearInterval(t);
  }, []);

  const Dots = () => (
    <div style={{ display: "flex", justifyContent: "center", gap: "6px" }}>
      {SLIDES.map((_, i) => (
        <button
          key={i}
          onClick={() => goTo(i)}
          style={{
            width: i === index ? "16px" : "6px",
            height: "6px",
            borderRadius: "3px",
            background: i === index ? "#4e342e" : "#ccc",
            border: "none",
            cursor: "pointer",
            transition: "all 0.3s",
            padding: 0
          }}
        />
      ))}
    </div>
  );

  // ── MOBILE LAYOUT ─────────────────────────────────────
  if (isMobile) {
    const slide = SLIDES[index];
    return (
      <section id="hero" style={{ background: "#fff" }}>
        {/* Full-width image with fixed height */}
        <div style={{ width: "100%", display: "grid", gridTemplateColumns: "1fr", position: "relative", overflow: "hidden" }}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={index}
              src={slide.image}
              alt={slide.title}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ width: "100%", height: "auto", display: "block", gridArea: "1 / 1" }}
            />
          </AnimatePresence>
        </div>

        {/* Content below image — in normal flow, always visible */}
        <div style={{ padding: "4px 5px 0", background: "#fff", textAlign: "center" }}>

          <h1 style={{ fontFamily: "var(--stencil-font)", fontSize: "1.7rem", fontWeight: 900, lineHeight: 1.1, color: "#4e342e", textTransform: "uppercase", marginBottom: 4 }}>
            {slide.title.split(" ").slice(0, 2).join(" ")} <br />
            <span style={{ color: slide.accent }}>{slide.title.split(" ").slice(2).join(" ")}</span>
          </h1>

          <p style={{ fontSize: "0.82rem", fontWeight: 700, color: "#6d6d6d", marginBottom: 4 }}>
            {slide.subtitle}
          </p>

          <p style={{ fontSize: "0.78rem", lineHeight: 1.4, color: "#888", marginBottom: 8 }}>
            {slide.desc}
          </p>

          <div style={{ marginBottom: 8 }}>
            <Dots />
          </div>

          <div style={{ display: "flex", gap: 10, justifyContent: "center", alignItems: "center" }}>
            <Link
              to="/flavors"
              style={{ background: "#4e342e", color: "#fff", padding: "9px 20px", textDecoration: "none", borderRadius: 99, fontWeight: 700, fontSize: "0.78rem" }}
            >
              Explore Flavors
            </Link>
            <button onClick={() => paginate(-1)} style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #ddd", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronLeft size={17} color="#4e342e" />
            </button>
            <button onClick={() => paginate(1)} style={{ width: 36, height: 36, borderRadius: "50%", border: "1px solid #ddd", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
              <ChevronRight size={17} color="#4e342e" />
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── DESKTOP LAYOUT ────────────────────────────────────
  return (
    <section id="hero" style={{ height: "100vh", background: "#fff", position: "relative", overflow: "hidden" }}>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          style={{
            position: "absolute",
            inset: 0,
            display: "grid",
            gridTemplateColumns: "1fr 1fr"
          }}
        >
          {/* Content Left */}
          <div style={{ padding: "0 80px", display: "flex", flexDirection: "column", justifyContent: "center", background: "#fff" }}>
            <ScrollReveal variant="fadeUp">
              <h1 style={{ fontFamily: "var(--stencil-font)", fontSize: "clamp(3.5rem, 6vw, 5.5rem)", fontWeight: 900, lineHeight: 1.1, color: "#4e342e", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                {SLIDES[index].title.split(" ").slice(0, 2).join(" ")} <br />
                <span style={{ color: SLIDES[index].accent }}>{SLIDES[index].title.split(" ").slice(2).join(" ")}</span>
              </h1>
              <div style={{ fontSize: "1.8rem", color: "#6d6d6d", fontWeight: 700, marginBottom: "2rem" }}>
                {SLIDES[index].subtitle}
              </div>
              <p style={{ fontFamily: "var(--sans)", fontSize: "1.1rem", lineHeight: 1.4, color: "#6d6d6d", maxWidth: 480, marginBottom: "3rem" }}>
                {SLIDES[index].desc}
              </p>
              <Link to="/flavors" className="btn" style={{ background: "var(--warm-dark)", color: "white", padding: "12px 32px", textDecoration: "none", borderRadius: "99px", fontWeight: 700, fontSize: "1rem", display: "inline-block" }}>
                Explore Flavors
              </Link>
            </ScrollReveal>
          </div>

          {/* Image Right */}
          <div style={{ position: "relative", overflow: "hidden", background: "#eee" }}>
            <img src={SLIDES[index].image} alt={SLIDES[index].title} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Desktop navigation arrows */}
      <div style={{ position: "absolute", bottom: 80, right: 80, display: "flex", gap: 16, zIndex: 10 }}>
        <button onClick={() => paginate(-1)} style={{ width: 50, height: 50, borderRadius: "50%", border: "1px solid #e0e0e0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
          <ChevronLeft size={24} color="#4e342e" />
        </button>
        <button onClick={() => paginate(1)} style={{ width: 50, height: 50, borderRadius: "50%", border: "1px solid #e0e0e0", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.06)" }}>
          <ChevronRight size={24} color="#4e342e" />
        </button>
      </div>

      {/* Desktop pagination dots */}
      <div style={{ position: "absolute", bottom: 40, left: 80, display: "flex", gap: 10, zIndex: 10 }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{ width: i === index ? 30 : 10, height: 10, borderRadius: 5, background: i === index ? "#4e342e" : "#ccc", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }}
          />
        ))}
      </div>
    </section>
  );
}
