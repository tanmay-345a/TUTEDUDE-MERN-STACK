import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const response = await fetch("http://localhost:5000/posts");
    const data = await response.json();

    setPosts(data);
  };

  const addUser = async (e) => {
    e.preventDefault();

    if (name === "" || email === "") {
  alert("Please enter name and email");
  return;
}

    await fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    });

    alert("User added successfully");

    setName("");
    setEmail("");
  };

  const addPost = async (e) => {
    e.preventDefault();

    if (title === "" || content === "" || userId === "") {
  alert("Please enter all post details");
  return;
}

    await fetch("http://localhost:5000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: title,
        content: content,
        user: userId
      })
    });

    alert("Post added successfully");

    setTitle("");
    setContent("");
    setUserId("");

    getPosts();
  };

  return (
    <div className="container">
      <h1>Schema Reference</h1>

      <h2>Add User</h2>

      <form onSubmit={addUser} className="form-box">
        <input
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add User</button>
      </form>

      <hr />

      <h2>Add Post</h2>

      <form onSubmit={addPost} className="form-box">
        <input
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <br /><br />

        <textarea
          placeholder="Enter post content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="Enter User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />

        <br /><br />

        <button type="submit">Add Post</button>
      </form>

      <hr />

      <h2>All Posts</h2>

      {posts.map((post) => (
        <div key={post._id} className="post">
          <h3>{post.title}</h3>

          <p>{post.content}</p>

          <p>
            Posted by: {post.user ? post.user.name : "Unknown User"}
          </p>

          <p>
            Email: {post.user ? post.user.email : "No email"}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;