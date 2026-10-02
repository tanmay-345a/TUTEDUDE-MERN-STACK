# Schema Reference-Tanmay Shakya

## Project Description

This project demonstrates how User and Post schemas are connected
using Node.js, Express.js, MongoDB and React.

A user can be added with a name and email.
A post can be added with a title, content and User ID.
The post is linked with the User schema using MongoDB reference.

## Technologies Used

- React
- Node.js
- Express.js
- MongoDB
- Mongoose
- HTML
- CSS
- JavaScript

## Backend

The backend is created using Node.js and Express.js.

Server runs on:

http://localhost:5000

MongoDB database name:

schemaReference

## User Schema

The User schema contains:

- name
- email

## Post Schema

The Post schema contains:

- title
- content
- user

The `user` field stores the reference of a User.

## API Routes

### Add User

POST `/users`

Used to add a new user.

### Add Post

POST `/posts`

Used to add a new post linked with a user.

### Get Users

GET `/users`

Used to get all users.

### Get Posts

GET `/posts`

Used to get all posts with related user information.

## Frontend

The React frontend provides forms to:

1. Add a User
2. Add a Post
3. View all Posts
4. Display related User information

## Validation

Basic validation is added to the forms.

The User form checks whether name and email are entered.

The Post form checks whether title, content and User ID are entered.

## How to Run the Project

### Step 1: Start MongoDB

Make sure MongoDB service is running.

### Step 2: Start Backend

Open terminal inside the backend folder and run:

```bash
node server.js
