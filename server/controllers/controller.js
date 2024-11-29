const postService = require("../services/postService");

// Get a single post
const getPost = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postService.getPost(id);

    if (post.length > 0) {
      return res.status(200).send({ post });
    } else {
      return res.status(404).send({ error: "Post not found" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

// Get all posts
const getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getPosts();
    return res.status(200).send({ posts });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

// Create a specific post
const createPosts = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(422).send({ error: "Invalid Input" });
    }
    const post = await postService.createPost(title, content);
    return res.status(201).send({ message: "Post created", post });
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

// Update a post
const updatePosts = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(422).send({ error: "Invalid Input" });
    }

    const result = await postService.updatePost(id, title, content);
    if (result.affectedRows > 0) {
      return res.status(200).send({ message: "Post updated" });
    } else {
      return res.status(404).send({ error: "Post not found" });
    }
  } catch (error) {
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

// Delete a post
const deletePosts = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await postService.deletePost(id);
    if (result.affectedRows > 0) {
      return res.status(200).send({ message: "Post deleted" });
    } else {
      return res.status(404).send({ error: "Post not found" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPosts,
  updatePosts,
  deletePosts,
  getAllPosts,
  getPost,
};
