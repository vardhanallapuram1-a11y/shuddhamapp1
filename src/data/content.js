import { Droplets, ShieldCheck, ThermometerSnowflake, PackageCheck, Leaf, Heart } from "lucide-react";

import imgBiscoff from "../assets/images/flavor_biscoff.jpeg";
import imgChoco from "../assets/images/flavor_chocolate_brownie.jpeg";
import imgCoffee from "../assets/images/flavor_coffee_tiramisu.jpeg";
import imgKaju from "../assets/images/flavor_kaju_draksh.jpeg";
import imgJamun from "../assets/images/flavor_kala_jamun.jpeg";
import imgSitaphal from "../assets/images/flavor_sitaphal.jpeg";
import imgTender from "../assets/images/flavor_tender_coconut.jpeg";
import imgMango from "../assets/images/mango_cup_forest.jpeg";
import imgBerry from "../assets/images/purple_cup_forest.jpeg";
import imgStrawberry from "../assets/images/strawberry_cup_fantasy.jpeg";
import imgAmerican from "../assets/images/flavor_american_nuts.jpeg";
import imgShake from "../assets/images/flavor3.jpeg";
import imgHoney from "../assets/images/flavors1.jpeg";
import imgVelvet from "../assets/images/flavor2.jpeg";
import imgFlv4 from "../assets/images/flavors4.jpeg";

import imgDairyMilk from "../assets/images/dairy_flavored_milk.png";
import imgDairyDahi from "../assets/images/dairy_dahi.png";
import imgDairyLassi from "../assets/images/dairy_lassi.png";
import imgDairyGhee from "../assets/images/dairy_ghee.png";
import imgDairyShrikhand from "../assets/images/dairy_shrikhand.png";

export const FLAVORS = [
  { id: "coffee", name: "Coffee Tiramisu", cat: "Classic", season: "All Season", tags: ["Premium"], desc: "Espresso-kissed cream with mascarpone undertones and a cocoa-dusted finish. Italian soul, pure milk heart.", pairings: ["Brownie", "Biscoff"], bg: "#2C1A0E", fg: "#F6E9DB", image: imgCoffee, accent: "#8B5E3C" },
  { id: "paan", name: "Sitaphal Special", cat: "Unique", season: "All Season", tags: ["Bestseller", "Unique"], desc: "Rich and creamy custard apple (sitaphal) ice cream made with real fruit pulp. A tropical delight.", pairings: ["Coconut", "Vanilla"], bg: "#1A3A1A", fg: "#D4F0C4", image: imgSitaphal, accent: "#3E8A3E" },
  { id: "biscoff", name: "Biscoff Caramel", cat: "Classic", season: "All Season", tags: ["New", "Premium"], desc: "Belgian Biscoff cookie butter swirled through silky caramel cream. Warm spice, crunchy crumble pockets.", pairings: ["Coffee", "Vanilla"], bg: "#4A2A08", fg: "#FFE8C0", image: imgBiscoff, accent: "#C47A1A" },
  { id: "honey", name: "Honey & Date", cat: "Unique", season: "All Season", tags: ["Natural", "New"], desc: "Naturally sweet organic honey paired with rich, chewy Mediterranean dates. A nutritious, guilt-free indulgence.", pairings: ["Vanilla", "Kaju"], bg: "#4A3A1A", fg: "#F8EACC", image: imgHoney, accent: "#A67B3D" },
  { id: "coconut", name: "Tender Coconut", cat: "Classic", season: "Summer", tags: ["Natural", "Bestseller"], desc: "Creamy ice cream from fresh tender coconuts — subtly sweet, tropically refreshing. Pure fruit, nothing else.", pairings: ["Mango", "Vanilla"], bg: "#3A2A1A", fg: "#F0E8D8", image: imgTender, accent: "#8A7550" },
  { id: "choco", name: "Chocolate Brownie", cat: "Classic", season: "All Season", tags: ["Bestseller"], desc: "Fudgy brownie chunks folded into our signature dark chocolate base. Dense, rich, pure indulgence.", pairings: ["Vanilla", "Coffee"], bg: "#1A0E08", fg: "#E8D0B0", image: imgChoco, accent: "#6B3A1A" },
  { id: "jamun", name: "Kala Jamun", cat: "Classic", season: "Monsoon", tags: ["Unique", "Natural"], desc: "Bold, tangy black plum with a deep earthy-sweet finish and a vivid natural purple hue.", pairings: ["Sitaphal", "Vanilla"], bg: "#1E0A2A", fg: "#E8C8F8", image: imgJamun, accent: "#8A3AB0" },
  { id: "kaju-draksh", name: "Kaju Draksh", cat: "Festive", season: "Festive", tags: ["Festive", "Natural"], desc: "Rich cashews and raisins (draksh) in a creamy milk base. A traditional royal treat.", pairings: ["Kaju", "Saffron"], bg: "#3A2A10", fg: "#F8EAC0", image: imgKaju, accent: "#9A7A20" },
  { id: "anjeer", name: "Anjeer Royale", cat: "Classic", season: "All Season", tags: ["Natural", "Premium"], desc: "Luscious sun-dried figs blended into rich, creamy milk. A classic Indian flavor that is both healthy and indulgent.", pairings: ["Kaju", "Honey"], bg: "#4A2A1A", fg: "#F0E8D8", image: imgFlv4, accent: "#8A7550" },
  { id: "american", name: "American Nuts", cat: "Classic", season: "All Season", tags: ["Bestseller"], desc: "Crunchy almonds, cashews, and raisins folded into rich vanilla cream. An American classic perfected locally.", pairings: ["Chocolate", "Vanilla"], bg: "#2A1A0A", fg: "#F8EACC", image: imgAmerican, accent: "#8A5A1A" },
  { id: "velvet", name: "Red Velvet", cat: "Classic", season: "All Season", tags: ["New", "Premium"], desc: "Vivid red velvet cake ice cream with cream cheese ribbons. Decadent, velvety, unforgettably bold.", pairings: ["Brownie", "Berry"], bg: "#4A0808", fg: "#FFD8D8", image: imgVelvet, accent: "#C01A1A" },
  { id: "shake", name: "Milkshake & Cold Coffee", cat: "Beverages", season: "Summer", tags: ["Popular"], desc: "Classic milkshake and cold brew coffee frozen together. Cooling, rich, and perfectly caffeinated.", pairings: ["Brownie", "Biscoff"], bg: "#1A1210", fg: "#E8D8C0", image: imgShake, accent: "#7A5A3A" },
  { id: "mango", name: "Alphonso Mango", cat: "Classic", season: "Summer", tags: ["Seasonal", "Bestseller"], desc: "Pure Alphonso pulp churned into sunshine-gold velvet. The king of mangoes in its finest frozen form.", pairings: ["Coconut", "Coconut Bar"], bg: "#3A2200", fg: "#FFE898", image: imgMango, accent: "#C87C00" },
  { id: "strawberry", name: "Strawberry Fantasy", cat: "Classic", season: "All Season", tags: ["Bestseller"], desc: "Real strawberry pieces in blush-pink cream — sweet and faintly tart. A timeless classic.", pairings: ["Vanilla", "Sitaphal"], bg: "#3A0A14", fg: "#FFD8E0", image: imgStrawberry, accent: "#C02040" },
  { id: "berry", name: "Wild Berry Bliss", cat: "Classic", season: "All Season", tags: ["New"], desc: "Blueberry, blackberry and elderberry in a dreamy deep-purple base. Nature's boldest medley.", pairings: ["Strawberry", "Jamun"], bg: "#160A24", fg: "#DCC8F8", image: imgBerry, accent: "#5A20A0" },
];

export const DAIRY = [
  { id: "milk", name: "Flavored Milk", icon: Droplets, desc: "Farm-fresh milk in natural flavors — rose, mango, chocolate. Calcium-rich goodness.", accent: "#D4E8F7", fg: "#0B63B2", image: imgDairyMilk },
  { id: "dahi", name: "Premium Dahi", icon: PackageCheck, desc: "Thick, naturally set curd from pure milk, cultured the traditional way.", accent: "#F6E9DB", fg: "#7A4A20", image: imgDairyDahi },
  { id: "lassi", name: "Lassi & Chach", icon: ThermometerSnowflake, desc: "Probiotic lassi and cooling chach made from natural ingredients. Perfect with every Indian meal.", accent: "#FDE9CE", fg: "#C8681A", image: imgDairyLassi },
  { id: "ghee", name: "Pure Ghee", icon: ShieldCheck, desc: "Slow-cooked aromatic golden ghee — nutrient-rich, clarified and pure for cooking and ritual.", accent: "#FFF8E0", fg: "#8A7010", image: imgDairyGhee },
  { id: "shrikhand", name: "Shrikhand", icon: Heart, desc: "Naturally sweetened strained yogurt dessert. Traditional flavors and seasonal specials.", accent: "#FFE8EE", fg: "#B02040", image: imgDairyShrikhand },
];

export const STATS = [
  { val: 2015, label: "Founded", suf: "" },
  { val: 50, label: "Flavors", suf: "+" },
  { val: 100, label: "Pure Milk", suf: "%" },
  { val: 10, label: "Happy Families", suf: "K+" },
];

export const WHY = [
  { icon: ShieldCheck, t: "Lab Tested", b: "Every batch tested for purity and quality before leaving our facility. Strict food safety standards, always." },
  { icon: Leaf, t: "Zero Adulteration", b: "Sourced from healthy cows and buffalos — completely free from chemicals and synthetic adulterants." },
  { icon: PackageCheck, t: "Machine Packaged", b: "Advanced packaging locks in freshness and guarantees each product reaches you in perfect condition." },
  { icon: ThermometerSnowflake, t: "Hygienic Process", b: "From milking to packaging, every step follows strict hygiene protocols and modern food safety practices." },
  { icon: Droplets, t: "Natural Ingredients", b: "Real fruits, natural extracts, pure milk. No synthetic colors, no artificial flavors, no shortcuts." },
  { icon: Heart, t: "Made with Love", b: "Every flavor is crafted with genuine care. Shuddham is more than a brand — it's a family promise." },
];

export const CATS = ["All", "Classic", "Festive", "Unique", "Beverages"];

