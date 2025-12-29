import './BlogCard.css'
import Link from 'next/link';

interface CardProps {  
  badge: string;
  category:string;
  slug:string;
  author: string;
  date: string;
  heading: string;
  text: string;
  readTime: string;
  blogImg: string;
  authorImg: string;
}

const BlogCard = ({badge, category, slug, author, date, heading, text, readTime, blogImg, authorImg}: CardProps) => {
  const postUrl = `/blog/${category}/${slug}`
  return (
    <div>
      <article className="blog-card" data-aos="fade-up">
        <Link href={postUrl} className="blog-image">
            <img src={blogImg} alt="Blog Image" loading="lazy" />
            <div className="category-badge">{badge}</div>
        </Link>
        <div className="blog-content">
            <div className="author-info">
            <img src={authorImg} alt="Author" className="author-avatar" />
            <div className="author-details">
                <span className="author-name">{author}</span>
                <span className="publish-date">{date}</span>
            </div>
            </div>
            <h3><Link href={postUrl}>{heading}</Link></h3>
            <p>{text}</p>
            <div className="blog-footer">
            <div className="reading-time">
                <i className="bi bi-clock"></i>
                <span>{readTime}</span>
            </div>
            <Link href={postUrl} className="btn-read-more">
                <span>Continue Reading</span>
                <i className="bi bi-arrow-right"></i>
            </Link>
            </div>
        </div>
        </article>
    </div>
  )
}

export default BlogCard