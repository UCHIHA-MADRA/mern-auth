import express from "express";
import dotenv from "dotenv";
dotenv.config({});

const PORT = process.env.NODE_PORT || 5050;

const app = express();

app.get("/", (req, res) => res.send("<h1>Welcome to App</h1>"));

app.get("/api", (req, res) => {
  res.json({
    status: "OK",
    message: "JAI SHREE RAM 🚩",
    data: [{ name: "Vipul" }, { name: "Prabhu" }, { name: "Minhaj" }],
  });
});

app.listen(PORT, () => {
  console.log("server is listening! on PORT: " + PORT);
});
