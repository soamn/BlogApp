const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connection = require("./config/db");
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const postsRoute = require("./routes/posts-route");
app.use(postsRoute);
app.listen(process.env.PORT || 8080, () => {});
