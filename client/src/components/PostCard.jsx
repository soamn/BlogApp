// PostCard.js
import React from "react";
import { Link } from "react-router-dom";

function PostCard({ post, onDelete }) {
  return (
    <div className="post-card">
      <h2 className="post-title">{post.title}</h2>
      <p className="post-body">{post.content.slice(0, 100)}...</p>{" "}
      <div className="post-actions">
        <Link to={`/edit/${post.id}`}>
          <button className="btn edit-btn">Edit</button>
        </Link>
        <Link to={`/posts/${post.id}`}>
          <button className="btn view-btn">View Full Post</button>
        </Link>
        <button onClick={() => onDelete(post.id)} className="btn delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}

export default PostCard;
