import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { useScrollProgress, useActiveSection } from "./hooks";
import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import FlavorsPage from "./pages/FlavorsPage";
import DairyPage from "./pages/DairyPage";
import Partnership from "./pages/Partnership";
import "./index.css";

export default function App() {
  const progress = useScrollProgress();
  // Active section hook might need adaptation for multi-page, for now we keep it for page progress
  const active = useActiveSection(["hero", "flavors", "story", "dairy", "why", "contact"]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="pg" style={{ width: `${progress}%` }} aria-hidden="true" />
      <Header active={active} />
      <main style={{ paddingTop: "80px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/flavors" element={<FlavorsPage />} />
          <Route path="/dairy" element={<DairyPage />} />
          <Route path="/partnership" element={<Partnership />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}
