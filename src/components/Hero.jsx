export default function Hero() {
  return (
    <section id="hero" style={{ minHeight: "100vh", position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "center", backgroundColor: "var(--ocean)" }}>

      {/* Dynamic Background Blurs */}
      <div style={{ position: "absolute", top: "-10%", right: "-5%", width: "60vmax", height: "60vmax", borderRadius: "50%", background: "radial-gradient(circle, rgba(242,139,3,0.3) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
      <div style={{ position: "absolute", bottom: "-20%", left: "-10%", width: "70vmax", height: "70vmax", borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 1000, margin: "0 auto", padding: "140px 32px 100px", width: "100%", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
      
        <h1 className="h2" style={{
          fontFamily: "var(--serif)", fontWeight: 900,
          fontSize: "clamp(3.8rem, 10vw, 8.5rem)",
          lineHeight: 1, letterSpacing: "-0.03em",
          color: "var(--white)", marginBottom: "1.8rem",
          textShadow: "0 20px 60px rgba(0,0,0,0.3)"
        }}>
          Every Scoop,<br />
          <em style={{ fontStyle: "italic", color: "var(--tiger)" }}>Pure Joy.</em>
        </h1>

        <p className="h3" style={{ fontFamily: "var(--sans)", fontWeight: 400, fontSize: "1.3rem", lineHeight: 1.6, color: "rgba(255,255,255,0.85)", maxWidth: 650, marginBottom: "4rem", letterSpacing: "0.01em" }}>
          Handcrafted ice cream made from farm-fresh milk, real fruits, and zero shortcuts. Experience the Shuddham promise.
        </p>

        <div className="h4" style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <a href="#flavors" className="btn btn-tiger" style={{ padding: "20px 48px", fontSize: "1rem", boxShadow: "0 20px 40px rgba(242,139,3,0.3)" }}>Explore Flavors</a>
          <a href="#story" className="btn btn-ghost btn-ghost-light" style={{ padding: "20px 48px", fontSize: "1rem" }}>Our Pure Story</a>
        </div>
      </div>

      <div className="hide-sm" style={{ position: "absolute", bottom: 40, right: 40, display: "flex", flexDirection: "column", alignItems: "center", gap: 16, zIndex: 2 }}>
        <span style={{ fontFamily: "var(--sans)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", writingMode: "vertical-rl", transform: "rotate(180deg)" }}>
          Scroll
        </span>
        <div style={{ width: 1, height: 80, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
      </div>

    </section>
  );
}