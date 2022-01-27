const express = require("express");

const app = express();
const PORT = 3030 || process.env.PORT;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/home.html"));
});
app.get("/Regiter", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/register.html"));
});
app.get("/Login", (req, res) => {
  res.sendFile(path.join(__dirname, "./views/login.html"));
});

app.listen(PORT, () => console.log("Servidor" + PORT + " corriendo..."));
