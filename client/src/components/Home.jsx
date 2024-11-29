import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => console.error("Error fetching posts:", error));
    console.log(posts);
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/posts/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => console.error("Error deleting post:", error));
  };

  return (
    <div className="home">
      {posts.length === 0 ? (
        <p>No posts available. Please create a post.</p>
      ) : (
        <div className="card">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} onDelete={handleDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
