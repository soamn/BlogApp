import React, { useState, useEffect } from "react";
import PostCard from "../components/PostCard";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data.posts))
      .catch((error) => {});
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/api/posts/${id}`, { method: "DELETE" })
      .then((response) => response.json())
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((error) => {});
  };

  return (
    <div className="home">
      <div className="top-card">
        {posts.length === 0 ? (
          <p>No posts available. Please create a post.</p>
        ) : (
          <>
            <div className="top-section"></div>
          </>
        )}
      </div>
      {posts.length === 0 ? (
        <p>No posts available. Please create a post.</p>
      ) : (
        <>
          <div className="card">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} onDelete={handleDelete} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
