import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrolled } from "../hooks";
import logoImg from "../assets/logo.webp";

export default function Header({ active }) {
  const scrolled = useScrolled(80);
  const [menu, setMenu] = useState(false);

  const links = [
    { label: "Home", path: "/" },
    { label: "Flavors", path: "/flavors" },
    { label: "Story", path: "/our-story" },
    { label: "Dairy", path: "/dairy" },
    { label: "Partner", path: "/partnership" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: scrolled ? "12px 32px" : "18px 32px",
      background: scrolled ? "rgba(255, 255, 255, 0.95)" : "rgba(255, 255, 255, 0.8)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid #f0e6d6",
      transition: "all 0.4s var(--ease-out)",
    }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Left: Logo */}
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
          <img src={logoImg} alt="Shuddham Logo" style={{ width: 40, height: "auto" }} />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "var(--serif)", fontSize: "1.4rem", fontWeight: 800, letterSpacing: "0.05em", color: "var(--warm-dark)", lineHeight: 1 }}>SHUDDHAM</div>
            <div style={{ fontFamily: "var(--sans)", fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--muted)", marginTop: 2 }}>Bond of Purity</div>
          </div>
        </Link>

        {/* Right: Modern Nav */}
        <nav className="hide-sm" style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map(l => (
            <NavLink key={l.path} to={l.path} style={({ isActive }) => ({
              fontFamily: "var(--sans)",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: "var(--warm-dark)",
              opacity: isActive ? 1 : 0.6,
              borderBottom: isActive ? "2px solid var(--warm-dark)" : "2px solid transparent",
              paddingBottom: "4px",
              transition: "all 0.4s var(--ease-out)"
            })}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/partnership" className="btn" style={{
            background: "var(--warm-dark)",
            color: "var(--white)",
            padding: "10px 24px",
            borderRadius: "99px",
            fontSize: "0.8rem",
            fontWeight: 700,
            textDecoration: "none"
          }}>
            Discovery
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button className="show-sm" onClick={() => setMenu(!menu)} style={{ background: "none", border: "none", color: "var(--warm-dark)", fontSize: "1.5rem" }}>
          ☰
        </button>
      </div>

      {menu && (
        <div style={{
          background: "var(--warm-bg)",
          backdropFilter: "blur(24px)",
          borderTop: "1px solid var(--border)",
          padding: "24px 32px 40px",
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
        }}>
          {links.map(l => (
            <NavLink key={l.path} to={l.path} onClick={() => setMenu(false)}
              style={({ isActive }) => ({
                display: "block",
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: "1rem",
                letterSpacing: "0.1em",
                color: isActive ? "var(--warm-accent)" : "var(--warm-dark)",
                textDecoration: "none",
                padding: "16px 0",
                borderBottom: "1px solid var(--border)",
                textTransform: "uppercase"
              })}>
              {l.label}
            </NavLink>
          ))}
          <Link to="/flavors" onClick={() => setMenu(false)} className="btn" style={{
            marginTop: 32,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            background: "var(--warm-dark)",
            color: "var(--white)",
            padding: "16px",
            borderRadius: "99px",
            fontSize: "0.9rem",
            fontWeight: 700,
            textDecoration: "none"
          }}>Explore Flavors</Link>
        </div>
      )}
    </header>
  );
}
