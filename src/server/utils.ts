import { Cheese } from "../definitions/swagger.js";
import { CheeseInput } from "../definitions/types.js";
import { URL } from "url";

// todo can test all the functions here

const stringIsValidUrl = (url: string): boolean => {
    try {
        const myURL = new URL(url);
    } catch (e) {
        console.log(`Error while validating url ${url}: ${e}`);
        return false;
    }
    return true;
};

export function isCheeseInput(obj: any): obj is CheeseInput {
    return (
        typeof obj === "object" &&
        typeof obj.name === "string" &&
        typeof obj.price === "number" &&
        typeof obj.color === "string" &&
        typeof obj.imageUrl === "string"
        && stringIsValidUrl(obj.imageUrl)
    );
}

export function isCheese(object: any): object is Cheese {
    return (
        typeof object === "object" &&
        typeof object.id === "string" &&
        typeof object.name === "string" &&
        typeof object.price === "number" &&
        typeof object.color === "string" &&
        typeof object.imageUrl === "string"
    );
}