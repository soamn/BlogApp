const mysql = require("mysql");
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
});
const createDb = `CREATE DATABASE IF NOT EXISTS BlogApp`;
connection.query(createDb, (err, reult) => {
  if (err) {
    console.error("Error creating db", err);
    return;
  }

  createTables();
});

function createTables() {
  connection.query("USE blogapp", (err) => {
    if (err) {
      console.error("Error selecting database:", err.message);
      return;
    }

    const createPostsTableQuery = `
        CREATE TABLE IF NOT EXISTS posts (
            id INT AUTO_INCREMENT PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            content TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        );
        `;

    connection.query(createPostsTableQuery, (err, results) => {
      if (err) {
        console.error("Error creating posts table:", err.message);
        return;
      }
    });
  });
}

module.exports = connection;
