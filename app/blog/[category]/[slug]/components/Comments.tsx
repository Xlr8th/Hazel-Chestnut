"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import "./Comments.css";

interface Comment {
  id: string;
  user_id?: string;
  name: string;
  comment: string;
  created_at: string;
  likes: number;
  liked: boolean;
}

interface CommentsProps {
  slug: string;
}

const Comments: React.FC<CommentsProps> = ({ slug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [form, setForm] = useState({ comment: "" });
  const [user, setUser] = useState<any>(null);

  // ✅ 1. Get logged-in user
  useEffect(() => {
    const getUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  // ✅ 2. Fetch comments
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .eq("slug", slug)
        .order("created_at", { ascending: false });

      if (error) console.error(error);
      else setComments(data.map(c => ({ ...c, likes: 0, liked: false })));
    };

    fetchComments();
  }, [slug]);

  // ✅ 3. Post comment
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return alert("Please login to comment!");
    if (!form.comment.trim()) return;

    const newComment = {
      slug,
      name: (user.user_metadata?.full_name as string) || "Anonymous",
      user_id: user.id,
      comment: form.comment,
    };

    const { data, error } = await supabase
      .from("comments")
      .insert(newComment)
      .select()
      .single();

    if (error) {
      console.error(error);
      return;
    }

    setComments(prev => [{ ...data, likes: 0, liked: false }, ...prev]);
    setForm({ comment: "" });
  };

  // ✅ 4. Toggle like locally
  const toggleLike = (id: string) => {
    setComments(prev =>
      prev.map(c =>
        c.id === id ? { ...c, liked: !c.liked, likes: c.liked ? c.likes - 1 : c.likes + 1 } : c
      )
    );
  };

  // ✅ 5. Delete comment
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this comment?")) return;

    const { error } = await supabase
      .from("comments")
      .delete()
      .eq("id", id);

    if (error) {
      console.error(error);
      return;
    }

    setComments(prev => prev.filter(c => c.id !== id));
  };

  return (
    <section className="blog-comment-form section">
      <div className="container">
        {/* Form */}
        {user ? (
          <form onSubmit={handleSubmit}>
            <div className="section-header">
              <h3>Share Your Thoughts</h3>
              <p>Share your reflections on this post.</p>
            </div>

            <div className="row gy-3">
              <div className="col-12 form-group">
                <textarea
                  name="comment"
                  className="form-control"
                  placeholder="Write your thoughts here..."
                  rows={4}
                  value={form.comment}
                  onChange={e => setForm({ comment: e.target.value })}
                  required
                />
              </div>

              <div className="col-12 text-center">
                <button type="submit" className="btn-submit">
                  Post Comment
                </button>
              </div>
            </div>
          </form>
        ) : (
          <p className="text-muted text-center">Sign in to post a comment.</p>
        )}

        {/* Comments List */}
        <div className="blog-comments mt-5">
          <h4 className="comments-header mb-4">{comments.length} Comment(s)</h4>

          <div className="comments-container">
            {comments.length === 0 && (
              <p className="text-muted text-center">No comments yet.</p>
            )}

            {comments.map(comment => (
              <div key={comment.id} className="comment-thread">
                <div className="comment-box">
                  <div className="avatar-wrapper">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                        comment.name
                      )}&background=random&size=64`}
                      alt={comment.name}
                    />
                  </div>

                  <div className="comment-content">
                    <div className="comment-header">
                      <h4>{comment.name}</h4>
                      <span className="time">
                        {new Date(comment.created_at).toLocaleString("en-US", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                    </div>

                    <div className="comment-body">
                      <p>{comment.comment}</p>
                    </div>

                    {/* Like & Delete Buttons */}
                    <div className="comment-actions">
                      <button
                        type="button"
                        className={`like-btn ${comment.liked ? "liked" : ""}`}
                        onClick={() => toggleLike(comment.id)}
                      >
                        {comment.liked ? <AiFillLike /> : <AiOutlineLike />}
                      </button>
                      <span className="like-count">{comment.likes}</span>

                      {/* Show delete button only for comment owner */}
                      {user?.id === comment.user_id && (
                        <button
                          type="button"
                          className="delete-btn"
                          onClick={() => handleDelete(comment.id)}
                        >
                          <FaTrashAlt />
                        </button>
                      )}
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