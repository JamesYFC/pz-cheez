import express from "express";
import ViteExpress from "vite-express";
import { Cheese } from "../definitions/swagger.js";

const baseData: Omit<Cheese, "id">[] = [
  {
    name: "Cheddar",
    price: 5.99,
    color: "#FFC700",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Somerset-Cheddar.jpg",
  },
  {
    name: "Gouda",
    price: 7.99,
    color: "#FFC700",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Gouda.jpg",
  },
  {
    name: "Brie",
    price: 8.99,
    color: "#F4EAE4",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/320px-Brie_01.jpg",
  },
  {
    name: "Bleu De Gex",
    price: 6.99,
    color: "#113c5e",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bleu_de_Gex.jpg/320px-Bleu_de_Gex.jpg",
  },
  // {
  //   name: "Swiss",
  //   price: 9.99,
  //   color: "#F4EAE4",
  //   image: "fire.png",
  // },
];

const cheeses: Cheese[] = baseData.map(item => ({
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
