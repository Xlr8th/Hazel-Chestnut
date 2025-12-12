import Image from "next/image";
import styles from "./page.module.css";
import HeroCarousel from "./Components/hero_carousel/HeroCarousel";
import Title from "./Components/title_section/Title";
import BlogCard from "./Components/Blog_Card/BlogCard";

export default function Home() {
  return (
    <>
      <div className="hero-carousel">
        <HeroCarousel />        
      </div>

      <div className="mt-5">
        <Title />
      </div>

      <div className="container mb-5">
        <div className="row row-cols-1 row-cols-lg-2 g-4">

          <div className="col">
            <BlogCard 
              badge="Word"
              author="Alexander Thompson"
              date="February 12, 2025"
              heading="Building Your Life on the Unshakable Word of God"
              text="God’s Word remains a firm foundation in a shifting world. Discover how Scripture anchors your faith and guides everyday decisions with clarity."
              readTime="8 min read"
              blogImg="/blog/blog-post-square-1.webp"
              authorImg="/person/person-m-5.webp"
            />
          </div>

          <div className="col">
            <BlogCard 
              badge="Family"
              author="Alexander Thompson"
              date="February 12, 2025"
              heading="Creating a Christ-Centered Home in a Busy World"
              text="With life pulling in every direction, keeping Christ at the center becomes intentional. Learn practical ways to bring faith, love, and unity into your home."
              readTime="8 min read"
              blogImg="/blog/blog-post-square-2.webp"
              authorImg="/person/person-m-6.webp"
            />
          </div>

          <div className="col">
            <BlogCard 
              badge="Marriage"
              author="Alexander Thompson"
              date="February 12, 2025"
              heading="Strengthening Your Marriage Through Faith and Love"
              text="A thriving marriage is built on grace, forgiveness, and shared purpose. Explore how faith can deepen connection and breathe life into your relationship."
              readTime="8 min read"
              blogImg="/blog/blog-post-square-3.webp"
              authorImg="/person/person-m-7.webp"
            />
          </div>

          <div className="col">
            <BlogCard 
              badge="Parenting"
              author="Alexander Thompson"
              date="February 12, 2025"
              heading="Raising Godly Children in a Changing Culture"
              text="Today’s culture shapes children constantly. Discover biblical principles and simple habits that help you shepherd their hearts toward Christ."
              readTime="8 min read"
              blogImg="/blog/blog-post-square-4.webp"
              authorImg="/person/person-m-8.webp"
            />
          </div>

          <div className="col">
            <BlogCard 
              badge="Lifestyle"
              author="Alexander Thompson"
              date="February 12, 2025"
              heading="Living a Purpose-Driven Life That Honors Christ"
              text="True fulfillment comes from living intentionally for Jesus. Learn how to embrace purpose, serve others, and shine God’s light through everyday choices."
              readTime="8 min read"
              blogImg="/blog/blog-post-square-5.webp"
              authorImg="/person/person-m-9.webp"
            />
          </div>

          <div className="col">
            <BlogCard 
              badge="Opinion"
              author="Alexander Thompson"
              date="February 12, 2025"
              heading="Finding God’s Perspective in a World Full of Noise"
              text="With so many voices competing for attention, discerning God’s viewpoint is essential. Reflect on how Scripture helps you navigate opinions and truth."
              readTime="8 min read"
              blogImg="/blog/blog-post-square-7.webp"
              authorImg="/person/person-m-10.webp"
            />
          </div>

        </div>
      </div>


      <div>
        
      </div>
    </>
  );
}
