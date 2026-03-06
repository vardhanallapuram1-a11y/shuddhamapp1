import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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
    desc: "Handcrafted ice cream made from farm-fresh milk, real fruits, and zero shortcuts. Experience the Shuddham promise.",
    accent: "#7d4b4b"
  },
  {
    image: heroImg2,
    title: "Pure Milk Indulgence",
    subtitle: "Zero Artificials",
    desc: "We bring you the richest textures using only the finest ingredients sourced directly from local farms.",
    accent: "#4e342e"
  },
  {
    image: heroImg3,
    title: "Artisanal Excellence",
    subtitle: "Crafted with Care",
    desc: "Every scoop is a result of patience and a passion for perfection. Tradition meets modern taste.",
    accent: "#614e41"
  },
  {
    image: heroImg4,
    title: "Sweet Moments",
    subtitle: "For Every Family",
    desc: "Sharing joy, one scoop at a time. Shuddham is made for those who value purity above all else.",
    accent: "#8c6e6e"
  }
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 820);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prevIndex) => (prevIndex + newDirection + SLIDES.length) % SLIDES.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.8 }
      }
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 }
      }
    })
  };

  return (
    <section
      id="hero"
      style={{
        height: isMobile ? "clamp(600px, 90vh, 800px)" : "100vh",
        background: "#fffaf7",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden"
      }}
    >
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
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            alignItems: "center"
          }}
        >
          {/* Content Side */}
          <div style={{
            padding: isMobile ? "100px 24px 40px" : "0 80px",
            zIndex: 10,
            textAlign: isMobile ? "center" : "left",
            order: isMobile ? 2 : 1
          }}>
            <ScrollReveal variant="fadeUp">
              <p style={{
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: "0.85rem",
                color: "#a0a0a0",
                marginBottom: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "0.2em"
              }}>Shuddham Excellence</p>
              <h1 style={{
                fontFamily: "var(--stencil-font)",
                fontWeight: 900,
                fontSize: isMobile ? "clamp(2.5rem, 12vw, 3.5rem)" : "clamp(3.5rem, 6vw, 5.5rem)",
                lineHeight: 1,
                letterSpacing: "-0.02em",
                color: "#4e342e",
                marginBottom: "1.5rem",
                textTransform: "uppercase"
              }}>
                {SLIDES[index].title.split(' ').slice(0, 2).join(' ')} <br />
                <span style={{ color: SLIDES[index].accent }}>{SLIDES[index].title.split(' ').slice(2).join(' ')}</span><br />
                <span style={{ fontSize: isMobile ? "1.2rem" : "1.8rem", color: "#6d6d6d", textTransform: "none", fontWeight: 700 }}>
                  {SLIDES[index].subtitle}
                </span>
              </h1>
              <p style={{
                fontFamily: "var(--sans)",
                fontSize: isMobile ? "0.95rem" : "1.1rem",
                lineHeight: 1.6,
                color: "#6d6d6d",
                maxWidth: 480,
                margin: isMobile ? "0 auto 2.5rem" : "0 0 3rem"
              }}>
                {SLIDES[index].desc}
              </p>
              <div style={{ display: "flex", gap: "16px", justifyContent: isMobile ? "center" : "flex-start" }}>
                <Link to="/flavors" className="btn" style={{ background: "var(--warm-dark)", color: "white", padding: "12px 32px", textDecoration: "none", borderRadius: "99px", fontWeight: 700 }}>Explore Flavors</Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Side */}
          <div style={{
            width: "100%",
            height: isMobile ? "40%" : "100%",
            position: "relative",
            order: isMobile ? 1 : 2,
            background: SLIDES[index].image.endsWith('.png') ? "transparent" : "#000"
          }}>
            <motion.img
              src={SLIDES[index].image}
              alt={SLIDES[index].title}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.1))"
              }}
            />
            {/* Overlay for depth on full images */}
            {!SLIDES[index].image.endsWith('.png') && (
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "linear-gradient(to right, rgba(255,250,247,1) 0%, rgba(255,250,247,0) 20%)",
                display: isMobile ? "none" : "block"
              }} />
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div style={{
        position: "absolute",
        bottom: isMobile ? "40px" : "80px",
        right: isMobile ? "center" : "80px",
        left: isMobile ? "0" : "auto",
        width: isMobile ? "100%" : "auto",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        zIndex: 100
      }}>
        <button
          onClick={() => paginate(-1)}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid #e0e0e0",
            background: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.background = "#f5f5f5"}
          onMouseLeave={(e) => e.target.style.background = "white"}
        >
          <ChevronLeft size={24} color="#4e342e" />
        </button>
        <button
          onClick={() => paginate(1)}
          style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            border: "1px solid #e0e0e0",
            background: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => e.target.style.background = "#f5f5f5"}
          onMouseLeave={(e) => e.target.style.background = "white"}
        >
          <ChevronRight size={24} color="#4e342e" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div style={{
        position: "absolute",
        bottom: isMobile ? "110px" : "40px",
        left: isMobile ? "50%" : "80px",
        transform: isMobile ? "translateX(-50%)" : "none",
        display: "flex",
        gap: "10px",
        zIndex: 100
      }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDirection(i > index ? 1 : -1);
              setIndex(i);
            }}
            style={{
              width: index === i ? "30px" : "10px",
              height: "10px",
              borderRadius: "5px",
              background: index === i ? "#4e342e" : "#d1d1d1",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0
            }}
          />
        ))}
      </div>
    </section>
  );
}
