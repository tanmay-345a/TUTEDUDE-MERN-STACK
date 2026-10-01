const http = require("http");
const fs = require("fs");
const path = require("path");

const server = http.createServer((req, res) => {

    let filePath;

    if (req.url === "/" || req.url === "/home") {
        filePath = path.join(__dirname, "home.html");
    } 
    else if (req.url === "/about") {
        filePath = path.join(__dirname, "about.html");
    } 
    else if (req.url === "/contact") {
        filePath = path.join(__dirname, "contact.html");
    }
    else if (req.url === "/style.css") {
    filePath = path.join(__dirname, "style.css");
} 
    else {
        res.writeHead(404, { "Content-Type": "text/html" });

        res.end(`
            <h1>404 - Page Not Found</h1>
            <p>The page you requested does not exist.</p>
            <a href="/home">Go to Home</a>
        `);

        return;
    }

    fs.readFile(filePath, (err, data) => {

        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<h1>500 - Internal Server Error</h1>");
            return;
        }
        const contentType = req.url === "/style.css"
            ? "text/css"
            : "text/html";


       res.writeHead(200, { "Content-Type": contentType });
        res.end(data);
    });
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});