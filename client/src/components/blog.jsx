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
      } catch (error) {}
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div>Loading...</div>;
  }

  const { title, content } = post;

  const paragraphs = splitContentIntoParagraphs(content);

  return (
    <div className="full-post">
      <h1 className="full-post-title">{title}</h1>
      {paragraphs.map((para, index) => (
        <p key={index} className="full-post-body">
          {para}
        </p>
      ))}
    </div>
  );
}

function splitContentIntoParagraphs(content) {
  const maxLengths = [500, 700, 1000];

  const paragraphs = [];
  let startIndex = 0;

  for (let maxLength of maxLengths) {
    const endIndex = Math.min(startIndex + maxLength, content.length);
    const segment = content.slice(startIndex, endIndex);

    const lastFullStopIndex = segment.lastIndexOf(".");

    if (lastFullStopIndex !== -1) {
      paragraphs.push(segment.slice(0, lastFullStopIndex + 1));
      startIndex += lastFullStopIndex + 1;
    } else {
      paragraphs.push(segment);
      startIndex += segment.length;
    }
  }

  return paragraphs;
}

export default FullPost;
