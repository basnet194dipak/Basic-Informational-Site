import express from "express";
import path from "node:path";

const app = express();

const PORT = 8080;

const basePath = "/home/program21/odin/Basic-Informational-Site";

app.get("/", (req, res) => {
  res.sendFile(path.join(basePath, "index.html"));
});


app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(basePath, "contact-me.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(basePath, "about.html"));
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(basePath, "404.html"));
});
app.listen(3000);