import { Cheese } from "../definitions/swagger.js";

const baseData: Omit<Cheese, "id">[] = [
    {
        name: "Red Leicester",
        price: 5.99,
        color: "orange",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Somerset-Cheddar.jpg",
    },
    {
        name: "Gouda",
        price: 7.99,
        color: "yellow",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Gouda.jpg",
    },
    {
        name: "Brie",
        price: 8.99,
        color: "white",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Brie_01.jpg/320px-Brie_01.jpg",
    },
    {
        name: "Bleu De Gex",
        price: 6.99,
        color: "blue",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bleu_de_Gex.jpg/320px-Bleu_de_Gex.jpg",
    },
    {
        name: "Casu Martzu",
        price: 69.99,
        color: "gray",
        imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Casu_Marzu_cheese.jpg/320px-Casu_Marzu_cheese.jpg",
    },
];

export default baseData;