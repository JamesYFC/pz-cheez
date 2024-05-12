import express from "express";
import ViteExpress from "vite-express";
import { Cheese } from "../definitions/swagger.js";

const baseData = [
  {
    name: "Cheddar",
    price: 5.99,
    color: "#20272F",
    image: "https://en.wikipedia.org/wiki/File:Somerset-Cheddar.jpg",
  },
  // {
  //   name: "Gouda",
  //   price: 7.99,
  //   color: "#FFC700",
  //   image: "fire.png",
  // },
  // {
  //   name: "Brie",
  //   price: 8.99,
  //   color: "#F4EAE4",
  //   image: "fire.png",
  // },
  // {
  //   name: "Mozzarella",
  //   price: 6.99,
  //   color: "#F4EAE4",
  //   image: "fire.png",
  // },
  // {
  //   name: "Swiss",
  //   price: 9.99,
  //   color: "#F4EAE4",
  //   image: "fire.png",
  // },
];

const cheeses: Cheese[] = baseData.map((item, index) => ({
  ...item,
  id: "pregen-" + item.name,
}));

const app = express();

// Get all cheeses
app.get("/cheeses", (_, res) => {
  res.send(cheeses)
});

app.get("/cheeses/:id", (req, res) => {

});

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
