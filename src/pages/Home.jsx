import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Stats from "../components/Stats";
import Story from "../components/Story";
import SeasonalBanner from "../components/SeasonalBanner";
import Dairy from "../components/Dairy";
import WhyUs from "../components/WhyUs";
import Contact from "../components/Contact";
import FlavorSystem from "../components/Flavors";

export default function Home() {
    return (
        <>
            <Hero />
            <Marquee />
            <Stats />
            <FlavorSystem />
            <Story />
            <SeasonalBanner />
            <Dairy />
            <Contact />
        </>
    );
}
