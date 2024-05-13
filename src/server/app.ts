import { randomUUID } from "crypto";
import express from "express";
import { Cheese } from "../definitions/swagger.js";
import baseData from "./baseData.js";
import { isCheeseInput } from "./utils.js";

// todo use db for persistence. I really want to try mkdb!
const cheeses: Record<string, Cheese> = baseData.reduce(
    (acc, item) => {
        const id = randomUUID();
        return {
            ...acc,
            [id]: { ...item, id }
        }
    },
    {});

const app = express();

// Get all cheeses. With time, could add pagination, filter params, etc
app.get("/cheeses", (_, res) => {
    res.send(cheeses)
});

// Post a new cheese
app.post("/cheeses", express.json(), (req, res) => {
    const cheese = req.body;

    if (!isCheeseInput(cheese)) {
        res.status(400).send("Invalid input");
    }

    const id = randomUUID();
    cheeses[id] = { ...cheese, id };
    res.status(201).send(cheeses[id]);
});

// Get a specific cheese
app.get("/cheeses/:id", (req, res) => {
    const id = req.params.id;
    if (id in cheeses) {
        res.send(cheeses[id]);
    } else {
        res.status(404).send("Cheese not found");
    }
});

// Update a specific cheese
app.put("/cheeses/:id", express.json(), (req, res) => {
    const id = req.params.id;
    const newCheese = req.body;

    // check if the cheese exists
    if (id in cheeses === false) {
        res.status(404).send("Cheese not found");
        return;
    }

    // Validate object is a cheese
    if (!isCheeseInput(newCheese)) {
        res.status(400).send("Invalid input");
        return;
    }

    // We handle cheese objects without an ID field just fine, but additional checks are performed if it has an ID
    if ("id" in newCheese) {
        // Disallow ID mismatch between param and object
        if (newCheese.id !== id) {
            res.status(400).send("ID mismatch between PUT cheese ID param and body ID property");
            return;
        }

        const existingCheese = cheeses[id];
        // Disallow overwriting IDs
        if (newCheese.id !== existingCheese.id) {
            res.status(400).send("New cheese ID doesn't match existing ID! Overwriting IDs is not allowed.");
            return;
        }
    }

    // Update the cheese
    cheeses[id] = { ...newCheese, id };
    res.send(cheeses[id]);
});

// Delete a specific cheese
app.delete("/cheeses/:id", (req, res) => {
    const id = req.params.id;
    if (id in cheeses) {
        delete cheeses[id];
        res.send("Cheese deleted");
    } else {
        res.status(404).send("Cheese not found");
    }
});

export default app;