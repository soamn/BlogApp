import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8080/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setTitle(data.post[0].title);
        setContent(data.post[0].content);
      })
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedPost = { title, content };

    fetch(`http://localhost:8080/api/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPost),
    })
      .then((response) => response.json())
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.error("Error updating post:", error));
  };

  return (
    <div className="post-form">
      <h2>Edit Post</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          defaultValue={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="btn submit-btn">
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;
