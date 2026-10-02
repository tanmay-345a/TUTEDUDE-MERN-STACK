const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");
const Post = require("./models/Post");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/schemaReference")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.log("MongoDB connection error:", error);
    });

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.post("/users", async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();

        res.json(savedUser);
    } catch (error) {
        res.status(500).json({ message: "Error adding user" });
    }
});

app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({ message: "Error getting users" });
    }
});

app.post("/posts", async (req, res) => {
    try {
        const post = new Post(req.body);
        const savedPost = await post.save();

        res.json(savedPost);
    } catch (error) {
        res.status(500).json({ message: "Error adding post" });
    }
});

app.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find().populate("user");

        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: "Error getting posts" });
    }
});

app.listen(5000, () => {
    console.log("Server started on port 5000");
});