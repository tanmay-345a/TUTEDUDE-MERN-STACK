import { useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Register user
  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      );

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      setMessage("Server error");
    }
  };

  // Login user
  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username,
            password
          })
        }
      );

      const data = await response.json();
      setMessage(data.message);

      if (response.ok) {
        localStorage.setItem("token", data.token);
        setUsername("");
        setPassword("");
      }
    } catch (error) {
      setMessage("Server error");
    }
  };

  // Access protected route
  const getProtectedData = async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("Please login first");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/protected",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Server error");
    }
  };

  // Logout
  const logoutUser = () => {
    localStorage.removeItem("token");
    setMessage("Logged out successfully");
  };

  return (
    <div className="container">
      <h1>JWT Authentication</h1>

      <h2>Register</h2>

      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      <hr />

      <h2>Login</h2>

      <form onSubmit={loginUser}>
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      <hr />

      <h2>Protected Route</h2>

      <button onClick={getProtectedData}>
        Access Protected Data
      </button>

      <button onClick={logoutUser}>
        Logout
      </button>

      <p className="message">{message}</p>
    </div>
  );
}

export default App;