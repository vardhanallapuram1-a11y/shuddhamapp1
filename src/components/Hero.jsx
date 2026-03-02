import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import heroImg from "../assets/images/hero_ice_cream_splashes.png";
import { FLAVORS } from "../data/content";

export default function Hero() {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 820);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const arcItems = FLAVORS.slice(0, 3);

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        minHeight: isMobile ? "auto" : "100vh",
        background: "var(--hero-gradient)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: isMobile ? "100px 20px 60px" : "120px 40px 100px",
        overflow: "hidden",
        position: "relative"
      }}
    >
      {/* Decorative Background Elements - Hidden on mobile for performance/clarity */}
      {!isMobile && (
        <motion.div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "250px",
          height: "250px",
          background: "url('https://api.iconify.design/lucide:cone.svg?color=%23fce4ec') no-repeat center/contain",
          opacity: 0.1,
          y: y2,
          filter: "blur(4px)"
        }} />
      )}

      <div className="hero-grid" style={{
        maxWidth: 1400,
        margin: "0 auto",
        width: "100%",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1.1fr 0.9fr",
        alignItems: "center",
        gap: isMobile ? "40px" : "60px",
        position: "relative",
        zIndex: 10,
        textAlign: isMobile ? "center" : "left"
      }}>

        <div style={{ order: isMobile ? 2 : 1 }}>
          <ScrollReveal variant="fadeUp" delay={0.2}>
            <p style={{
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "#a0a0a0",
              marginBottom: "0.5rem",
              textTransform: "uppercase",
              letterSpacing: "0.2em"
            }}>Welcome to Shuddham</p>
            <h1 style={{
              fontFamily: "var(--stencil-font)",
              fontWeight: 900,
              fontSize: isMobile ? "clamp(2.5rem, 15vw, 4rem)" : "clamp(3.5rem, 7vw, 6rem)",
              lineHeight: 1,
              letterSpacing: "-0.02em",
              color: "#4e342e",
              marginBottom: "1.5rem",
              textTransform: "uppercase"
            }}>
              Fresh Natural <br />
              <span style={{ color: "#7d4b4b" }}>Heavenly,</span><br />
              <span style={{ fontSize: isMobile ? "1.5rem" : "2rem", color: "#6d6d6d", textTransform: "none", fontWeight: 700 }}>That's Our Promise</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal variant="fadeUp" delay={0.4}>
            <p style={{
              fontFamily: "var(--sans)",
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: 1.6,
              color: "#6d6d6d",
              maxWidth: 480,
              margin: isMobile ? "0 auto 2.5rem" : "0 0 3rem"
            }}>
              Handcrafted ice cream made from farm-fresh milk, real fruits, and zero shortcuts. Experience the Shuddham promise.
            </p>
          </ScrollReveal>
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center", order: isMobile ? 1 : 2 }}>
          <ScrollReveal variant="zoomIn" delay={0.3}>
            {/* "NEW!" Badge */}
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              style={{
                position: "absolute",
                top: isMobile ? "0px" : "0",
                right: isMobile ? "10px" : "0",
                zIndex: 20,
                background: "white",
                padding: "8px 16px",
                borderRadius: "50% 50% 50% 0",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                fontFamily: "var(--sans)",
                fontWeight: 800,
                fontSize: "1rem",
                color: "#7d4b4b"
              }}>
              NEW!
            </motion.div>

            {/* Main Image */}
            <div style={{ position: "relative", zIndex: 15, maxWidth: isMobile ? "280px" : "100%" }}>
              <motion.img
                src={heroImg}
                alt="Premium Ice Cream"
                style={{
                  width: "100%",
                  height: "auto",
                  filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.15))"
                }}
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              />
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Bottom Features - Replaces Arc on Mobile */}
      <div style={{
        position: isMobile ? "relative" : "absolute",
        bottom: isMobile ? "auto" : "-150px",
        left: isMobile ? "auto" : "50%",
        transform: isMobile ? "none" : "translateX(-50%)",
        width: isMobile ? "100%" : "800px",
        height: isMobile ? "auto" : "400px",
        border: isMobile ? "none" : "2px solid #fff0f0",
        borderRadius: "50%",
        display: "flex",
        gap: isMobile ? "24px" : "0",
        justifyContent: "center",
        alignItems: isMobile ? "center" : "flex-start",
        paddingTop: isMobile ? "0" : "40px",
        marginTop: isMobile ? "50px" : "0",
        padding: isMobile ? "20px" : "0"
      }}>
        {arcItems.map((item, i) => {
          const angles = [-30, 0, 30];
          const angle = angles[i];
          const radius = 350;
          const x = isMobile ? 0 : Math.sin(angle * (Math.PI / 180)) * radius;
          const y = isMobile ? 0 : -Math.cos(angle * (Math.PI / 180)) * radius + radius;

          return (
            <div key={item.id} className="arc-item" style={{
              position: isMobile ? "relative" : "absolute",
              left: isMobile ? "auto" : `calc(50% + ${x}px)`,
              top: isMobile ? "auto" : `${y}px`,
              width: isMobile ? "auto" : "80px",
              transform: isMobile ? "none" : "translateX(-50%)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              <div style={{
                width: "56px",
                height: "56px",
                background: "white",
                borderRadius: "50%",
                padding: "5px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.05)",
                marginBottom: "8px"
              }}>
                <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <span style={{
                fontFamily: "var(--sans)",
                fontSize: "0.65rem",
                fontWeight: 700,
                color: "#a0a0a0",
                textAlign: "center"
              }}>{item.name}</span>
            </div>
          );
        })}
      </div>
    </section >
  );
}
