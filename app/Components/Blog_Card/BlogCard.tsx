import './BlogCard.css'

interface CardProps {  
  badge: string;
  author: string;
  date: string;
  heading: string;
  text: string;
  readTime: string;
  blogImg: string;
  authorImg: string;
}

const BlogCard = ({badge, author, date, heading, text, readTime, blogImg, authorImg}: CardProps) => {
  return (
    <div>
      <article className="blog-card" data-aos="fade-up">
        <div className="blog-image">
            <img src={blogImg} alt="Blog Image" loading="lazy" />
            <div className="category-badge">{badge}</div>
        </div>
        <div className="blog-content">
            <div className="author-info">
            <img src={authorImg} alt="Author" className="author-avatar" />
            <div className="author-details">
                <span className="author-name">{author}</span>
                <span className="publish-date">{date}</span>
            </div>
            </div>
            <h3><a href="#">{heading}</a></h3>
            <p>{text}</p>
            <div className="blog-footer">
            <div className="reading-time">
                <i className="bi bi-clock"></i>
                <span>{readTime}</span>
            </div>
            <a href="#" className="btn-read-more">
                <span>Continue Reading</span>
                <i className="bi bi-arrow-right"></i>
            </a>
            </div>
        </div>
        </article>
    </div>
  )
}

export default BlogCard