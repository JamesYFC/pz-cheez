import request from "supertest";
import app from "./app.js";
import { isCheese } from "./utils.js";

describe("Test /cheeses", () => {
    test("It should respond with a GET method", done => {
        request(app)
            .get("/cheeses")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
    test("It should return the correct object on GET", done => {
        request(app)
            .get("/cheeses")
            .then(response => {
                const cheeses = response.body;
                expect(typeof cheeses).toBe("object");
                expect(Object.keys(cheeses).length).toBe(5);
                expect(Object.values(cheeses).every(isCheese)).toBe(true);
                done();
            });
    });
    test("It should add a cheese correctly with POST", done => {
        const testObject = {
            name: "Test Cheese",
            price: 9.99,
            color: "test",
            imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Somerset-Cheddar.jpg",
        };

        request(app)
            .post("/cheeses")
            .send({
                name: "Test Cheese",
                price: 9.99,
                color: "test",
                imageUrl: "https://upload.wikimedia.org/wikipedia/commons/1/18/Somerset-Cheddar.jpg",
            })
            .then(response => {
                expect(response.statusCode).toBe(201);
                expect(isCheese(response.body)).toBe(true);
                expect(response.body).toMatchObject(testObject);
                done();
            });
    })
});

// todo add additional tests for PUT, DELETE, :cheeseID routes, etc