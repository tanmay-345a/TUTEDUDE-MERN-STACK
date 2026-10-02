# JWT Authentication

## Note

Thank you so much for being an amazing mentor throughout my MERN Stack journey at Tutedude. Your guidance and support helped me complete all 36 tasks and improve my skills. I learned a lot from you, and I’m truly grateful for your teaching and encouragement. 🙏💻

Thank you for everything! ❤️

## Project Description

This project demonstrates user authentication using JWT (JSON Web Token).

The project has a React frontend and an Express.js backend. Users can register, login and access a protected route only after successful authentication.

## Technologies Used

- React.js
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcryptjs
- CSS

## Features

1. User Registration
2. User Login
3. Password Hashing
4. JWT Token Generation
5. JWT Token Storage in Local Storage
6. Protected Route
7. Authentication Middleware
8. Logout

## Project Structure

```text
TanmayShakyaTask36
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
└── README.md

How It Works
1. Registration

The user enters a username and password.

The password is hashed using bcryptjs before storing it in MongoDB.

2. Login

The user enters the registered username and password.

The backend checks the username and password. If they are correct, a JWT token is generated.

3. JWT Token

The JWT token is stored in the browser's Local Storage after successful login.

4. Protected Route

When the user accesses the protected route, the JWT token is sent with the request.

The authentication middleware verifies the token.

If the token is valid, the user can access the protected data.

5. Logout

When the user clicks Logout, the JWT token is removed from Local Storage.

API Routes
Method	Route	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	Login user
GET	/api/protected	Access protected data
Learning Outcome

Through this project, I learned:

How user registration works
How passwords can be securely hashed
How JWT authentication works
How authentication middleware protects routes
How React communicates with an Express backend
How to store and use JWT tokens in Local Storage
How MongoDB stores user information
How to Run
Backend
cd backend
npm install
node server.js

Backend runs on:

http://localhost:5000
Frontend

Open another terminal:

cd frontend
npm install
npm run dev

Frontend runs on:

http://localhost:5173


Conclusion

This project provides a simple implementation of JWT-based authentication using React, Express.js and MongoDB.
