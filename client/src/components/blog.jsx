import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function FullPost() {
  const location = useLocation();
  const [post, setPost] = useState(null);

  const postId = location.pathname.split("/")[2];

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/posts/${postId}`
        );
        const data = await response.json();
        setPost(data.post[0]);
      } catch (error) {
        console.error("Error fetching the post:", error);
      }
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className="full-post">
      <h1 className="full-post-title">{post.title}</h1>
      <p className="full-post-body">{post.content}</p>
    </div>
  );
}

export default FullPost;
