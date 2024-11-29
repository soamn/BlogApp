const express = require("express");
const router = express.Router();

const posts = require("../controllers/controller");
const middleware = require("../middleware/middleware");

router.route("/api/posts").get(posts.getAllPosts);
router.route("/api/posts/:id").get(middleware, posts.getPost);
router.route("/api/posts").post(posts.createPosts);
router.route("/api/posts/:id").put(middleware, posts.updatePosts);
router.route("/api/posts/:id").delete(middleware, posts.deletePosts);
module.exports = router;
