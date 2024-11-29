Blog Application API
====================

This repository contains a RESTful API for a blog application. The API allows you to perform CRUD (Create, Read, Update, Delete) operations on blog posts. The backend is built using Express, and the database is managed with MySQL.

This project also includes unit tests for the API endpoints using **Jest** and **Supertest** to ensure everything works as expected.

Prerequisites
-------------

Before running this project, make sure you have the following installed:

*   [Node.js](https://nodejs.org/) (v14 or higher)
    
*   [MySQL](https://www.mysql.com/) or a MySQL-compatible database
    

Installation
------------

1.  ` git clone https://github.com/soamn/BlogApp `
    
2.  `npm install`
    
3.  Create a .env file at the root of the project with the following variables:envCopy codeHOST=localhostUSER=rootPASSWORD=your-database-passwordAdjust the values based on your database configuration.
    
4.  The app.js script will create a database called BlogApp if it doesn’t already exist.
    

Running the Application
-----------------------
To run the tests
` cd server `
` npm test ` 
To run the application:

` cd client `
` npm start `
` cd server `
` npm start `
The application will start on http://localhost:3000 by default.

API Endpoints
-------------

### POST /api/posts

*   **Create a new post**
    
*   ` "title": "Post Title", "content": "Post Content"} `
    
*   `{ "message": "Post created", "post": { "id": 1, "title": "Post Title", "content": "Post Content", }} `
    

### GET /api/posts

*   **Get all posts**
    
*   `{ "posts": \[ { "id": 1, "title": "Post Title", "content": "Post Content",} `
    

### GET /api/posts/:id

*   **Get a specific post by ID**
    
*   `{ "post": { "id": 1, "title": "Post Title", "content": "Post Content", `
    

### PUT /api/posts/:id

*   **Update a specific post**
    
*   `{ "title": "Updated Post Title", "content": "Updated Post Content"}`
    
    

### DELETE /api/posts/:id

*   **Delete a specific post**
    
    

Running the Tests
-----------------

This project uses **Jest** and **Supertest** to test the API endpoints.

1. `npm install --save-dev jest supertest`
    
2.  `npm test `This will run all tests defined in the \_\_tests\_\_ directory and verify the functionality of the API endpoints.
    

### Test Scenarios Covered

*   **Create Post**: Tests the creation of a new post and checks for proper response messages and status codes.
    
*   **Get All Posts**: Tests fetching all posts and verifies the response is an array.
    
*   **Get Single Post**: Tests fetching a single post by ID, ensuring it returns the correct post data.
    
*   **Update Post**: Tests updating an existing post with new data and checking for the correct status and response.
    
*   **Delete Post**: Tests deleting a post and verifies the response message after successful deletion.
    

Database
--------

The application uses MySQL to store the blog posts. The app.js file will automatically create the BlogApp database and the posts table if they don’t already exist.

### Database Schema

#### posts table

*   id: INT, Primary Key, Auto Increment
    
*   title: VARCHAR(255), NOT NULL
    
*   content: TEXT, NOT NULL
    
*   created\_at: TIMESTAMP, DEFAULT CURRENT\_TIMESTAMP
    

Environment Variables
---------------------


    
*   PASSWORD: The password for the MySQL user.
    
*   PORT: The port where your app will run (default: 3000).
    

Troubleshooting
---------------

*   **MySQL Connection Issues**: Ensure that the MySQL server is running and that the credentials in the .env file are correct.
    
*   **Port Conflicts**: If 3000 is already in use, modify the PORT variable in the .env file.


** Deplayment guide **
On you Aws or server 
*    Create a Folder by the name of the application ` mkdir MyBlogApp `
*    `sudo apt update`
     ` sudo apt install nginx `
  configure nginx and map your server ip to localhost running app i.e https://localhost:3000
  You can use pm2 to run your client and server in your server using the above steps to run the application
