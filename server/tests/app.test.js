require("dotenv").config();
const request = require("supertest");
const app = require("../index");
const { describe } = require("node:test");

describe("POST /api/posts", () => {
  it("should create a new post", async () => {
    const newPost = {
      title:
        "The Power of Habit: How Small Changes Can Lead to Big Results (test post)",
      content:
        "In a world where we are constantly striving for personal growth and success, one key factor often stands out: habit. The things we do every day, often without even thinking about them, have a profound impact on our lives. From the way we manage our time to how we approach our work, our habits shape our reality. But what if we told you that small, intentional changes to your habits could lead to big results?",
    };

    const response = await request(app)
      .post("/api/posts")
      .send(newPost)
      .expect(201);
  });

  // Test Invalid Input
  it("should return an error for invalid input", async () => {
    const response = await request(app)
      .post("/api/posts")
      .send({ title: "", content: "" })
      .expect(422); // Expect status 422 for invalid input

    expect(response.body.error).toBe("Invalid Input");
  });
});

describe("GET /api/posts", () => {
  // Test Get All Posts
  it("should return all posts", async () => {
    const response = await request(app).get("/api/posts").expect(200);
  });
});

const postId = 36;
describe(`GET /api/posts/${postId}`, () => {
  // Test Get Single Post
  it("should return a specific post by ID", async () => {
    const response = await request(app).get(`/api/posts/${postId}`).expect(200);
  });
});

it("should return 404 if post not found", async () => {
  const response = await request(app)
    .get("/api/posts/9999") // Assuming 9999 doesn't exist
    .expect(404);

  expect(response.body.error).toBe("Post not found");
});

describe("PUT /api/posts/:id", () => {
  // Test Update Post
  it("should update an existing post", async () => {
    const postId = 1; // Use a valid post ID from your DB
    const updatedPost = {
      title: "Updated Title",
      content: "Updated content of the post",
    };

    const response = await request(app)
      .put(`/api/posts/${postId}`)
      .send(updatedPost)
      .expect(200); // Expect status 200 for successful update

    expect(response.body.message).toBe("Post updated");
  });

  // Test Update Post with Invalid Input
  it("should return error for invalid input", async () => {
    const postId = 1; // Use a valid post ID from your DB
    const invalidPost = {
      title: "",
      content: "",
    };

    const response = await request(app)
      .put(`/api/posts/${postId}`)
      .send(invalidPost)
      .expect(422);

    expect(response.body.error).toBe("Invalid Input");
  });

  it("should return 404 if post not found", async () => {
    const response = await request(app)
      .put("/api/posts/9999") // Assuming 9999 doesn't exist
      .send({
        title: "Updated Title",
        content: "Updated content of the post",
      })
      .expect(404);

    expect(response.body.error).toBe("Post not found");
  });
});

describe("DELETE /api/posts/:id", () => {
  // Test Delete Post
  it("should delete a post", async () => {
    const postId = 1; // Use a valid post ID from your DB

    const response = await request(app)
      .delete(`/api/posts/${postId}`)
      .expect(200);

    expect(response.body.message).toBe("Post deleted");
  });

  it("should return 404 if post not found", async () => {
    const response = await request(app)
      .delete("/api/posts/9999") // Assuming 9999 doesn't exist
      .expect(404);

    expect(response.body.error).toBe("Post not found");
  });
});
