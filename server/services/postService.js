const connection = require("../config/db");

async function createPost(title, content) {
  const sql =
    "INSERT INTO blogapp.posts (title, content, created_at) VALUES (?, ?, NOW())";
  const result = connection.query(sql, [title, content]);
  return result.values;
}

async function getPost(id) {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM posts WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function getPosts() {
  return new Promise((resolve, reject) => {
    const sql = "SELECT * FROM posts";
    connection.query(sql, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function updatePost(id, title, content) {
  return new Promise((resolve, reject) => {
    const sql = "UPDATE posts SET title = ?, content = ? WHERE id = ?";
    connection.query(sql, [title, content, id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

async function deletePost(id) {
  return new Promise((resolve, reject) => {
    const sql = "DELETE FROM posts WHERE id = ?";
    connection.query(sql, [id], (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}

module.exports = { createPost, getPost, getPosts, updatePost, deletePost };
