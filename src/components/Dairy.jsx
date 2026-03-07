import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";
import freshMilkImg from "../assets/fresh_milk.png";
import { DAIRY } from "../data/content";
import DripDivider from "./DripDivider";

export default function Dairy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="dairy" ref={containerRef} style={{ padding: "clamp(12px, 6vw, 100px) 24px", background: "var(--ice-lavender-light)", position: "relative" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(40px, 6vw, 80px)",
          alignItems: "center",
          marginBottom: 72
        }}>
          <div>
            <ScrollReveal variant="fadeUp" delay={0.1}>
              <span style={{
                fontFamily: "var(--sans)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--ice-lavender)",
                display: "block",
                marginBottom: 12
              }}>Pure Dairy</span>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.2}>
              <h2 style={{
                fontFamily: "var(--serif)",
                fontWeight: 800,
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                letterSpacing: "-0.03em",
                marginTop: 12,
                marginBottom: 24,
                color: "var(--ice-brown)",
                lineHeight: 1.1
              }}>
                Beyond<br /><span style={{ fontStyle: "italic", fontWeight: 400, color: "var(--ice-lavender)" }}>Ice Cream</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.3}>
              <p style={{
                fontFamily: "var(--sans)",
                fontWeight: 400,
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "rgba(60,47,47,0.7)",
                marginBottom: 32
              }}>
                From probiotic-rich dahi and refreshing lassi to aromatic ghee and festive shrikhand — Shuddham's full range is made from farm-fresh, pure milk.
              </p>
            </ScrollReveal>
            <ScrollReveal variant="fadeUp" delay={0.4}>
              <Link to="/partnership" className="btn" style={{
                background: "var(--ice-brown)",
                color: "var(--white)",
                padding: "14px 32px",
                borderRadius: "99px",
                fontSize: "0.85rem",
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-block"
              }}>Become a Partner →</Link>
            </ScrollReveal>
          </div>
          <ScrollReveal variant="zoomIn" delay={0.2}>
            <div style={{
              width: "100%",
              aspectRatio: "1.1/1",
              borderRadius: "var(--r-xl)",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
              position: "relative"
            }}>
              <motion.img
                src={freshMilkImg}
                alt="Fresh Farm Milk"
                style={{
                  width: "100%",
                  height: "120%",
                  objectFit: "cover",
                  y
                }}
              />
            </div>
          </ScrollReveal>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(240px,1fr))", gap: 16 }}>
          {DAIRY.map((d, i) => {
            const Icon = d.icon;
            return (
              <ScrollReveal
                key={d.id}
                variant="fadeUp"
                delay={i * 0.05}
              >
                <div className="dc" style={{
                  background: "var(--ice-white)",
                  padding: "32px",
                  borderRadius: "var(--r-lg)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.02)",
                  height: "100%"
                }}>
                  <div style={{ width: 56, height: 56, borderRadius: "var(--r-md)", background: d.accent, display: "flex", alignItems: "center", justifyContent: "center", color: d.fg, marginBottom: 20 }}>
                    <Icon size={28} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontFamily: "var(--serif)", fontWeight: 700, fontSize: "1.2rem", color: "var(--ice-brown)", marginBottom: 8 }}>{d.name}</h3>
                  <p style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "0.9rem", lineHeight: 1.7, color: "rgba(60,47,47,0.6)" }}>{d.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
