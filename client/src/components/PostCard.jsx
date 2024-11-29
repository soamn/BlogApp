// PostCard.js
import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, onDelete }) {
  return (
    <a href={`/posts/${post.id}`}>
      <div className="post-card">
        <h2 className="post-title">{post.title}</h2>
        <p className="post-body">{post.content.slice(0, 100)}...</p>{" "}
        <p className="date">{post.created_at.slice(0, 10)}</p>
        <div className="post-actions">
          <Link to={`/edit/${post.id}`}>
            <button className="btn edit-btn">✏️</button>
          </Link>
          <button onClick={() => onDelete(post.id)} className="btn delete-btn">
            🗑️
          </button>
        </div>
      </div>
    </a>
  );
}

export default PostCard;
