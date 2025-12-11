import Image from "next/image";
import styles from "./page.module.css";
import HeroCarousel from "./HeroCarousel";

export default function Home() {
  return (
    <div>
      <div className="hero-carousel">
        <HeroCarousel />
        
      </div>      
    </div>
  );
}
