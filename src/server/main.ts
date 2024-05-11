import express from "express";
import ViteExpress from "vite-express";
import { Cheese } from "../swagger/api.js";

const app = express();

app.get("/hello", (_, res) => {
  res.send("Hello Vite + React + TypeScript!");
});

app.get("/cheeses", (_, res) => {
  const cheeses: Cheese[] = [
    { id: "1", name: "Cheddar", price: 5.99, color: "#20272F", image: "fire.png" },
  ];
  res.send(cheeses)
});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
