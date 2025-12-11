"use client";

import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";
import styles from "./HeroCarousel.module.css";

interface Slide {
  src: string;
  category: string;
  title: string;
  author: string;
  date: string;
  readTime: string;
  views: string;
  link: string;
}

// Typed array of slides
const blogSlides: Slide[] = [
  {
    src: "/blog/blog-hero-1.webp",
    category: "Business",
    title: "The Future of Remote Work and Digital Transformation",
    author: "Mark Johnson",
    date: "12 Jan, 2024",
    readTime: "4 Minute Read",
    views: "2.3k views",
    link: "/blog-details"
  },
  {
    src: "/blog/blog-hero-2.webp",
    category: "Tech",
    title: "How AI is Shaping Modern Businesses",
    author: "Jane Doe",
    date: "18 Feb, 2024",
    readTime: "5 Minute Read",
    views: "3.1k views",
    link: "/blog-details"
  },
  {
    src: "/blog/blog-hero-3.webp",
    category: "Lifestyle",
    title: "Remote Work: Tips for Productivity and Balance",
    author: "John Smith",
    date: "25 Mar, 2024",
    readTime: "6 Minute Read",
    views: "1.8k views",
    link: "/blog-details"
  }
];

export default function HeroCarousel() {
  return (
    <Carousel indicators controls interval={3000}>
      {blogSlides.map((slide, index) => (
        <Carousel.Item key={index}>
          <div className={styles.heroSlide}>
            <Image
              src={slide.src}
              alt={slide.title}
              fill
              className={styles.heroImage}
              style={{ objectFit: "cover" }}
            />
            <div className={styles.carouselHeroContent}>
              <span className={styles.category}>{slide.category}</span>
              <h1>{slide.title}</h1>
              <div className={styles.meta}>
                <span className={styles.author}>BY <a href="#">{slide.author}</a></span>
                <span className={styles.date}>{slide.date}</span>
                <span className={styles.readTime}>{slide.readTime}</span>
                <span className={styles.views}>{slide.views}</span>
              </div>
              <a href={slide.link} className={styles.readMore}>
                Continue Reading <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
