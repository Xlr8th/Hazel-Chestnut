"use client";

import React, { useState } from "react";
import './Comments.css'

interface Comment {
  name: string;
  email: string;
  website: string;
  comment: string;
}

const Comments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState<Comment>({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.comment) return;

    setComments([...comments, form]);
    setForm({ name: "", email: "", website: "", comment: "" });
  };

  return (
    <section className="blog-comment-form section">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="section-header">
            <h3>Share Your Thoughts</h3>
            <p>Your email address will not be published. Required fields are marked *</p>
          </div>

          <div className="row gy-3">
            <div className="col-md-6 form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-md-6 form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12 form-group">
              <label htmlFor="website">Website</label>
              <input
                type="url"
                name="website"
                id="website"
                placeholder="Your website (optional)"
                className="form-control"
                value={form.website}
                onChange={handleChange}
              />
            </div>

            <div className="col-12 form-group">
              <label htmlFor="comment">Your Comment *</label>
              <textarea
                name="comment"
                id="comment"
                rows={5}
                placeholder="Write your thoughts here..."
                className="form-control"
                value={form.comment}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="col-12 text-center">
              <button type="submit" className="btn-submit">
                Post Comment
              </button>
            </div>
          </div>
        </form>

        {/* Display Posted Comments */}
        <div className="blog-comments mt-5">
          <h4 className="comments-header mb-4">{comments.length} Comment(s)</h4>
          <div className="comments-container">
            {comments.map((c, i) => (
              <div key={i} className="comment-thread">
                <div className="comment-box">
                  <div className="comment-wrapper">
                    <div className="avatar-wrapper">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                          c.name
                        )}&background=random&size=64`}
                        alt={c.name}
                      />
                    </div>
                    <div className="comment-content">
                      <div className="comment-header">
                        <div className="user-info">
                          <h4>{c.name}</h4>
                          <span className="time-badge">{new Date().toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="comment-body">
                        <p>{c.comment}</p>
                        {c.website && (
                          <p>
                            <a href={c.website} target="_blank" rel="noopener noreferrer">
                              Visit website
                            </a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
